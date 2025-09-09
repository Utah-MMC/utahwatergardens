import sqlite3
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import seaborn as sns
from typing import Dict, List, Tuple, Optional
import json
import logging
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import warnings
warnings.filterwarnings('ignore')

class LeadAnalyticsSystem:
    def __init__(self, database_path='leads.db'):
        self.database_path = database_path
        
        # Set up plotting style
        plt.style.use('seaborn-v0_8')
        sns.set_palette("husl")
        
        # Conversion rates and values (can be customized)
        self.conversion_rates = {
            'new': 0.05,      # 5% of new leads convert
            'contacted': 0.15, # 15% of contacted leads convert
            'warm': 0.30,     # 30% of warm leads convert
            'hot': 0.60,      # 60% of hot leads convert
            'qualified': 0.80  # 80% of qualified leads convert
        }
        
        self.average_deal_values = {
            'pond_installation': 15000,
            'water_feature': 8000,
            'maintenance': 2000,
            'repair': 5000,
            'consultation': 500
        }
    
    def get_lead_data(self) -> pd.DataFrame:
        """Get comprehensive lead data from database"""
        conn = sqlite3.connect(self.database_path)
        
        # Get leads with interactions
        query = '''
            SELECT 
                l.*,
                COUNT(li.id) as interaction_count,
                COUNT(et.id) as email_count,
                SUM(CASE WHEN et.opened = 1 THEN 1 ELSE 0 END) as emails_opened,
                SUM(CASE WHEN et.clicked = 1 THEN 1 ELSE 0 END) as emails_clicked
            FROM leads l
            LEFT JOIN lead_interactions li ON l.id = li.lead_id
            LEFT JOIN email_tracking et ON l.id = et.lead_id
            GROUP BY l.id
        '''
        
        df = pd.read_sql_query(query, conn)
        
        # Get interaction details
        interactions_query = '''
            SELECT lead_id, interaction_type, interaction_date, outcome
            FROM lead_interactions
            ORDER BY interaction_date
        '''
        interactions_df = pd.read_sql_query(interactions_query, conn)
        
        # Get email tracking details
        email_query = '''
            SELECT lead_id, sent_date, opened, clicked, bounced
            FROM email_tracking
            ORDER BY sent_date
        '''
        email_df = pd.read_sql_query(email_query, conn)
        
        conn.close()
        
        return df, interactions_df, email_df
    
    def calculate_lead_velocity(self) -> Dict:
        """Calculate lead velocity metrics"""
        df, _, _ = self.get_lead_data()
        
        # Convert dates
        df['created_date'] = pd.to_datetime(df['created_date'])
        df['last_contacted'] = pd.to_datetime(df['last_contacted'])
        
        # Calculate time to first contact
        df['time_to_first_contact'] = (df['last_contacted'] - df['created_date']).dt.days
        
        # Calculate lead age
        df['lead_age_days'] = (datetime.now() - df['created_date']).dt.days
        
        velocity_metrics = {
            'avg_time_to_first_contact': df['time_to_first_contact'].mean(),
            'median_time_to_first_contact': df['time_to_first_contact'].median(),
            'avg_lead_age': df['lead_age_days'].mean(),
            'leads_created_today': len(df[df['created_date'].dt.date == datetime.now().date()]),
            'leads_created_this_week': len(df[df['created_date'] >= datetime.now() - timedelta(days=7)]),
            'leads_created_this_month': len(df[df['created_date'] >= datetime.now() - timedelta(days=30)])
        }
        
        return velocity_metrics
    
    def analyze_source_performance(self) -> pd.DataFrame:
        """Analyze performance by lead source"""
        df, _, _ = self.get_lead_data()
        
        source_analysis = df.groupby('lead_source').agg({
            'id': 'count',
            'lead_score': ['mean', 'median', 'std'],
            'interaction_count': 'mean',
            'email_count': 'mean',
            'emails_opened': 'sum',
            'emails_clicked': 'sum'
        }).round(2)
        
        # Calculate conversion rates by source
        source_analysis['conversion_rate'] = df.groupby('lead_source')['lead_status'].apply(
            lambda x: (x.isin(['hot', 'qualified'])).mean()
        )
        
        # Calculate email engagement rates
        source_analysis['email_open_rate'] = (
            source_analysis[('emails_opened', 'sum')] / 
            source_analysis[('email_count', 'mean')] * 
            source_analysis[('id', 'count')]
        ).fillna(0)
        
        source_analysis['email_click_rate'] = (
            source_analysis[('emails_clicked', 'sum')] / 
            source_analysis[('email_count', 'mean')] * 
            source_analysis[('id', 'count')]
        ).fillna(0)
        
        return source_analysis
    
    def calculate_roi_metrics(self) -> Dict:
        """Calculate ROI and revenue projections"""
        df, _, _ = self.get_lead_data()
        
        # Calculate potential revenue by lead status
        revenue_by_status = {}
        total_potential_revenue = 0
        
        for status in self.conversion_rates.keys():
            status_leads = df[df['lead_status'] == status]
            count = len(status_leads)
            conversion_rate = self.conversion_rates[status]
            avg_deal_value = self.average_deal_values['pond_installation']  # Default value
            
            potential_revenue = count * conversion_rate * avg_deal_value
            revenue_by_status[status] = {
                'count': count,
                'conversion_rate': conversion_rate,
                'potential_revenue': potential_revenue,
                'avg_deal_value': avg_deal_value
            }
            total_potential_revenue += potential_revenue
        
        # Calculate cost metrics (estimated)
        total_leads = len(df)
        estimated_cost_per_lead = 50  # Estimated cost to acquire a lead
        total_acquisition_cost = total_leads * estimated_cost_per_lead
        
        roi_metrics = {
            'total_potential_revenue': total_potential_revenue,
            'total_acquisition_cost': total_acquisition_cost,
            'roi_percentage': ((total_potential_revenue - total_acquisition_cost) / total_acquisition_cost * 100) if total_acquisition_cost > 0 else 0,
            'revenue_by_status': revenue_by_status,
            'cost_per_lead': estimated_cost_per_lead,
            'total_leads': total_leads
        }
        
        return roi_metrics
    
    def generate_trend_analysis(self) -> Dict:
        """Generate trend analysis over time"""
        df, _, _ = self.get_lead_data()
        
        # Convert dates
        df['created_date'] = pd.to_datetime(df['created_date'])
        
        # Daily trends
        daily_trends = df.groupby(df['created_date'].dt.date).agg({
            'id': 'count',
            'lead_score': 'mean'
        }).reset_index()
        daily_trends.columns = ['date', 'leads_created', 'avg_lead_score']
        
        # Weekly trends
        df['week'] = df['created_date'].dt.isocalendar().week
        df['year'] = df['created_date'].dt.year
        weekly_trends = df.groupby(['year', 'week']).agg({
            'id': 'count',
            'lead_score': 'mean'
        }).reset_index()
        weekly_trends.columns = ['year', 'week', 'leads_created', 'avg_lead_score']
        
        # Monthly trends
        df['month'] = df['created_date'].dt.to_period('M')
        monthly_trends = df.groupby('month').agg({
            'id': 'count',
            'lead_score': 'mean'
        }).reset_index()
        monthly_trends.columns = ['month', 'leads_created', 'avg_lead_score']
        
        return {
            'daily_trends': daily_trends,
            'weekly_trends': weekly_trends,
            'monthly_trends': monthly_trends
        }
    
    def create_visualizations(self, save_path: str = 'lead_analytics/'):
        """Create comprehensive visualizations"""
        import os
        os.makedirs(save_path, exist_ok=True)
        
        df, interactions_df, email_df = self.get_lead_data()
        
        # 1. Lead Source Performance
        plt.figure(figsize=(12, 8))
        source_performance = self.analyze_source_performance()
        
        plt.subplot(2, 2, 1)
        source_performance[('id', 'count')].plot(kind='bar')
        plt.title('Leads by Source')
        plt.xticks(rotation=45)
        plt.ylabel('Number of Leads')
        
        plt.subplot(2, 2, 2)
        source_performance[('lead_score', 'mean')].plot(kind='bar')
        plt.title('Average Lead Score by Source')
        plt.xticks(rotation=45)
        plt.ylabel('Average Lead Score')
        
        plt.subplot(2, 2, 3)
        source_performance['conversion_rate'].plot(kind='bar')
        plt.title('Conversion Rate by Source')
        plt.xticks(rotation=45)
        plt.ylabel('Conversion Rate')
        
        plt.subplot(2, 2, 4)
        source_performance['email_open_rate'].plot(kind='bar')
        plt.title('Email Open Rate by Source')
        plt.xticks(rotation=45)
        plt.ylabel('Open Rate')
        
        plt.tight_layout()
        plt.savefig(f'{save_path}source_performance.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        # 2. Lead Score Distribution
        plt.figure(figsize=(12, 8))
        
        plt.subplot(2, 2, 1)
        plt.hist(df['lead_score'], bins=20, alpha=0.7, color='skyblue')
        plt.title('Lead Score Distribution')
        plt.xlabel('Lead Score')
        plt.ylabel('Frequency')
        
        plt.subplot(2, 2, 2)
        df.boxplot(column='lead_score', by='lead_source', ax=plt.gca())
        plt.title('Lead Score by Source')
        plt.suptitle('')
        
        plt.subplot(2, 2, 3)
        df['lead_status'].value_counts().plot(kind='pie', autopct='%1.1f%%')
        plt.title('Lead Status Distribution')
        
        plt.subplot(2, 2, 4)
        df.groupby('lead_status')['lead_score'].mean().plot(kind='bar')
        plt.title('Average Lead Score by Status')
        plt.xticks(rotation=45)
        
        plt.tight_layout()
        plt.savefig(f'{save_path}lead_distribution.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        # 3. Time Series Analysis
        trends = self.generate_trend_analysis()
        
        plt.figure(figsize=(15, 10))
        
        plt.subplot(3, 1, 1)
        plt.plot(trends['daily_trends']['date'], trends['daily_trends']['leads_created'])
        plt.title('Daily Lead Generation')
        plt.ylabel('Leads Created')
        
        plt.subplot(3, 1, 2)
        plt.plot(trends['weekly_trends'].index, trends['weekly_trends']['leads_created'])
        plt.title('Weekly Lead Generation')
        plt.ylabel('Leads Created')
        
        plt.subplot(3, 1, 3)
        plt.plot(trends['monthly_trends']['month'].astype(str), trends['monthly_trends']['leads_created'])
        plt.title('Monthly Lead Generation')
        plt.ylabel('Leads Created')
        plt.xticks(rotation=45)
        
        plt.tight_layout()
        plt.savefig(f'{save_path}time_series.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        # 4. ROI Analysis
        roi_metrics = self.calculate_roi_metrics()
        
        plt.figure(figsize=(12, 8))
        
        plt.subplot(2, 2, 1)
        revenue_data = roi_metrics['revenue_by_status']
        statuses = list(revenue_data.keys())
        revenues = [revenue_data[status]['potential_revenue'] for status in statuses]
        plt.bar(statuses, revenues)
        plt.title('Potential Revenue by Lead Status')
        plt.xticks(rotation=45)
        plt.ylabel('Potential Revenue ($)')
        
        plt.subplot(2, 2, 2)
        conversion_rates = [revenue_data[status]['conversion_rate'] for status in statuses]
        plt.bar(statuses, conversion_rates)
        plt.title('Conversion Rates by Lead Status')
        plt.xticks(rotation=45)
        plt.ylabel('Conversion Rate')
        
        plt.subplot(2, 2, 3)
        costs = [revenue_data[status]['count'] * roi_metrics['cost_per_lead'] for status in statuses]
        plt.bar(statuses, costs)
        plt.title('Acquisition Costs by Lead Status')
        plt.xticks(rotation=45)
        plt.ylabel('Cost ($)')
        
        plt.subplot(2, 2, 4)
        roi_values = [(revenues[i] - costs[i]) / costs[i] * 100 if costs[i] > 0 else 0 for i in range(len(statuses))]
        plt.bar(statuses, roi_values)
        plt.title('ROI by Lead Status')
        plt.xticks(rotation=45)
        plt.ylabel('ROI (%)')
        
        plt.tight_layout()
        plt.savefig(f'{save_path}roi_analysis.png', dpi=300, bbox_inches='tight')
        plt.close()
    
    def predict_lead_conversion(self, lead_features: Dict) -> Dict:
        """Predict lead conversion probability using machine learning"""
        df, _, _ = self.get_lead_data()
        
        # Prepare features for ML
        df['converted'] = df['lead_status'].isin(['hot', 'qualified']).astype(int)
        
        # Create feature matrix
        features = ['lead_score', 'interaction_count', 'email_count', 'emails_opened', 'emails_clicked']
        X = df[features].fillna(0)
        y = df['converted']
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Train model
        model = RandomForestRegressor(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)
        
        # Make prediction for new lead
        new_lead_features = np.array([
            lead_features.get('lead_score', 0),
            lead_features.get('interaction_count', 0),
            lead_features.get('email_count', 0),
            lead_features.get('emails_opened', 0),
            lead_features.get('emails_clicked', 0)
        ]).reshape(1, -1)
        
        conversion_probability = model.predict(new_lead_features)[0]
        
        # Calculate model performance
        y_pred = model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        r2 = r2_score(y_test, y_pred)
        
        return {
            'conversion_probability': conversion_probability,
            'model_performance': {
                'mse': mse,
                'r2_score': r2
            },
            'feature_importance': dict(zip(features, model.feature_importances_))
        }
    
    def generate_forecast(self, days_ahead: int = 30) -> Dict:
        """Generate lead generation forecast"""
        df, _, _ = self.get_lead_data()
        
        # Convert dates
        df['created_date'] = pd.to_datetime(df['created_date'])
        
        # Daily lead counts
        daily_leads = df.groupby(df['created_date'].dt.date)['id'].count().reset_index()
        daily_leads.columns = ['date', 'leads']
        daily_leads['date'] = pd.to_datetime(daily_leads['date'])
        
        # Simple moving average forecast
        window_size = 7
        daily_leads['ma'] = daily_leads['leads'].rolling(window=window_size).mean()
        
        # Linear regression forecast
        X = np.arange(len(daily_leads)).reshape(-1, 1)
        y = daily_leads['leads'].values
        
        model = LinearRegression()
        model.fit(X, y)
        
        # Generate future dates
        last_date = daily_leads['date'].max()
        future_dates = pd.date_range(start=last_date + timedelta(days=1), periods=days_ahead, freq='D')
        
        # Predict future values
        future_X = np.arange(len(daily_leads), len(daily_leads) + days_ahead).reshape(-1, 1)
        future_predictions = model.predict(future_X)
        
        forecast_data = pd.DataFrame({
            'date': future_dates,
            'predicted_leads': future_predictions
        })
        
        return {
            'historical_data': daily_leads,
            'forecast_data': forecast_data,
            'model_coefficient': model.coef_[0],
            'model_intercept': model.intercept_,
            'avg_daily_leads': daily_leads['leads'].mean(),
            'trend_direction': 'increasing' if model.coef_[0] > 0 else 'decreasing'
        }
    
    def generate_comprehensive_report(self) -> Dict:
        """Generate comprehensive analytics report"""
        df, interactions_df, email_df = self.get_lead_data()
        
        # Calculate all metrics
        velocity_metrics = self.calculate_lead_velocity()
        source_performance = self.analyze_source_performance()
        roi_metrics = self.calculate_roi_metrics()
        trends = self.generate_trend_analysis()
        forecast = self.generate_forecast()
        
        # Create summary statistics
        summary_stats = {
            'total_leads': len(df),
            'avg_lead_score': df['lead_score'].mean(),
            'high_priority_leads': len(df[df['lead_score'] >= 30]),
            'conversion_rate': (df['lead_status'].isin(['hot', 'qualified'])).mean(),
            'avg_interactions_per_lead': df['interaction_count'].mean(),
            'email_engagement_rate': (df['emails_opened'] / df['email_count']).mean() if df['email_count'].sum() > 0 else 0
        }
        
        # Top performing sources
        top_sources = source_performance[('id', 'count')].nlargest(5)
        
        # Lead quality analysis
        lead_quality = {
            'excellent_leads': len(df[df['lead_score'] >= 50]),
            'good_leads': len(df[(df['lead_score'] >= 30) & (df['lead_score'] < 50)]),
            'fair_leads': len(df[(df['lead_score'] >= 15) & (df['lead_score'] < 30)]),
            'poor_leads': len(df[df['lead_score'] < 15])
        }
        
        comprehensive_report = {
            'summary_stats': summary_stats,
            'velocity_metrics': velocity_metrics,
            'source_performance': source_performance.to_dict(),
            'roi_metrics': roi_metrics,
            'trends': trends,
            'forecast': forecast,
            'top_sources': top_sources.to_dict(),
            'lead_quality': lead_quality,
            'generated_date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        return comprehensive_report
    
    def export_analytics_report(self, filename: str = 'lead_analytics_report.json'):
        """Export comprehensive analytics report to JSON"""
        report = self.generate_comprehensive_report()
        
        with open(filename, 'w') as f:
            json.dump(report, f, indent=2, default=str)
        
        logging.info(f"Analytics report exported to {filename}")
        return report

if __name__ == "__main__":
    # Initialize analytics system
    analytics_system = LeadAnalyticsSystem()
    
    # Generate comprehensive report
    print("Generating comprehensive analytics report...")
    report = analytics_system.generate_comprehensive_report()
    
    # Create visualizations
    print("Creating visualizations...")
    analytics_system.create_visualizations()
    
    # Export report
    analytics_system.export_analytics_report()
    
    # Print summary
    print("\n" + "="*60)
    print("LEAD ANALYTICS SUMMARY")
    print("="*60)
    print(f"Total Leads: {report['summary_stats']['total_leads']}")
    print(f"Average Lead Score: {report['summary_stats']['avg_lead_score']:.1f}")
    print(f"High Priority Leads: {report['summary_stats']['high_priority_leads']}")
    print(f"Overall Conversion Rate: {report['summary_stats']['conversion_rate']:.1%}")
    print(f"Email Engagement Rate: {report['summary_stats']['email_engagement_rate']:.1%}")
    print(f"\nPotential Revenue: ${report['roi_metrics']['total_potential_revenue']:,.2f}")
    print(f"ROI: {report['roi_metrics']['roi_percentage']:.1f}%")
    print(f"\nForecast Trend: {report['forecast']['trend_direction']}")
    print(f"Average Daily Leads: {report['forecast']['avg_daily_leads']:.1f}")
    print("="*60) 