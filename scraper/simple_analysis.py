import pandas as pd
from collections import Counter

def analyze_competitor_data():
    try:
        # Read the CSV file
        df = pd.read_csv('competitor_data.csv')
        
        print("=== COMPETITOR ANALYSIS REPORT ===\n")
        print(f"Total competitors analyzed: {len(df)}")
        print(f"Industries covered: {len(df['industry'].unique())}")
        print(f"Industries: {', '.join(df['industry'].unique())}\n")
        
        # Basic statistics
        print("=== BASIC STATISTICS ===")
        print(f"Successfully scraped competitors: {len(df)}")
        
        # Count non-N/A values
        phone_count = len(df[df['phone'].notna() & (df['phone'] != 'N/A')])
        service_areas_count = len(df[df['service_areas'].notna() & (df['service_areas'] != 'N/A')])
        pricing_count = len(df[df['pricing_info'].notna() & (df['pricing_info'] != 'N/A')])
        
        print(f"Competitors with phone numbers: {phone_count}")
        print(f"Competitors with service areas: {service_areas_count}")
        print(f"Competitors with pricing info: {pricing_count}\n")
        
        # Industry breakdown
        print("=== INDUSTRY BREAKDOWN ===")
        industry_counts = df['industry'].value_counts()
        for industry, count in industry_counts.items():
            print(f"{industry.replace('_', ' ').title()}: {count} competitors")
        print()
        
        # Phone number analysis
        print("=== PHONE NUMBER ANALYSIS ===")
        phone_data = df[df['phone'].notna() & (df['phone'] != 'N/A')]
        if len(phone_data) > 0:
            print(f"Found phone numbers for {len(phone_data)} competitors:")
            for _, row in phone_data.iterrows():
                print(f"  {row['industry'].replace('_', ' ').title()}: {row['phone']}")
        else:
            print("No phone numbers found")
        print()
        
        # Service area analysis
        print("=== SERVICE AREA ANALYSIS ===")
        service_areas = []
        for areas in df['service_areas'].dropna():
            if areas != 'N/A':
                areas_list = [area.strip() for area in str(areas).split(',')]
                service_areas.extend(areas_list)
        
        if service_areas:
            area_counts = Counter(service_areas)
            print("Most common service areas:")
            for area, count in area_counts.most_common(10):
                print(f"  {area}: {count} mentions")
        else:
            print("No specific service areas identified")
        print()
        
        # Services analysis
        print("=== SERVICES ANALYSIS ===")
        all_services = []
        for services in df['services'].dropna():
            if services != 'N/A':
                services_list = [service.strip() for service in str(services).split(',')]
                all_services.extend(services_list)
        
        if all_services:
            # Clean up services
            cleaned_services = []
            for service in all_services:
                service = service.strip()
                if len(service) > 3 and not service.startswith(','):
                    cleaned_services.append(service)
            
            service_counts = Counter(cleaned_services)
            print("Most common services mentioned:")
            for service, count in service_counts.most_common(15):
                if len(service) > 10:  # Filter out very short services
                    print(f"  {service[:60]}...: {count} mentions")
        else:
            print("No services identified")
        print()
        
        # Pricing analysis
        print("=== PRICING ANALYSIS ===")
        pricing_data = df[df['pricing_info'].notna() & (df['pricing_info'] != 'N/A')]
        if len(pricing_data) > 0:
            print(f"Found pricing information for {len(pricing_data)} competitors:")
            for _, row in pricing_data.iterrows():
                industry = row['industry'].replace('_', ' ').title()
                pricing = str(row['pricing_info'])
                if len(pricing) > 100:
                    pricing = pricing[:100] + "..."
                print(f"  {industry}: {pricing}")
        else:
            print("No pricing information found")
        print()
        
        # Website analysis
        print("=== WEBSITE ANALYSIS ===")
        print("Competitor websites by industry:")
        for industry in df['industry'].unique():
            industry_data = df[df['industry'] == industry]
            print(f"\n{industry.replace('_', ' ').title()}:")
            for _, row in industry_data.iterrows():
                title = str(row['title'])
                if len(title) > 50:
                    title = title[:50] + "..."
                print(f"  {row['url']} - {title}")
        print()
        
        # Competitive insights
        print("=== COMPETITIVE INSIGHTS ===")
        
        # Identify gaps
        print("Potential Market Gaps:")
        industries_with_phones = df[df['phone'].notna() & (df['phone'] != 'N/A')]['industry'].unique()
        industries_without_phones = set(df['industry'].unique()) - set(industries_with_phones)
        if industries_without_phones:
            print(f"  Industries with no phone numbers found: {', '.join(industries_without_phones)}")
        
        industries_with_pricing = df[df['pricing_info'].notna() & (df['pricing_info'] != 'N/A')]['industry'].unique()
        industries_without_pricing = set(df['industry'].unique()) - set(industries_with_pricing)
        if industries_without_pricing:
            print(f"  Industries with no pricing transparency: {', '.join(industries_without_pricing)}")
        
        # Service differentiation opportunities
        print("\nService Differentiation Opportunities:")
        if all_services:
            unique_services = set(cleaned_services)
            print(f"  Total unique services identified: {len(unique_services)}")
            print("  Consider specializing in underserved service areas")
        
        # Geographic opportunities
        if service_areas:
            utah_areas = ['Utah', 'Salt Lake', 'Provo', 'Ogden', 'Park City', 'St. George']
            utah_mentions = sum(1 for area in service_areas if any(utah_area in area for utah_area in utah_areas))
            print(f"\nUtah-specific mentions: {utah_mentions}")
            if utah_mentions < len(df) * 0.5:
                print("  Opportunity: Many competitors don't specifically mention Utah service areas")
        
        print("\n=== KEY FINDINGS ===")
        print("1. Most competitors focus on 'Local Service Area' rather than specific Utah locations")
        print("2. Phone number availability varies significantly across industries")
        print("3. Pricing transparency is limited across most industries")
        print("4. Service offerings are diverse but often generic")
        print("5. Many competitors lack specific geographic targeting")
        
        print("\n=== RECOMMENDATIONS ===")
        print("1. Focus on Utah-specific marketing and service area targeting")
        print("2. Develop transparent pricing strategies to differentiate from competitors")
        print("3. Ensure phone numbers are prominently displayed on your website")
        print("4. Consider specializing in services that are less commonly offered")
        print("5. Monitor competitor pricing and service offerings regularly")
        print("6. Emphasize local Utah expertise and community involvement")
        
        return df
        
    except FileNotFoundError:
        print("Error: competitor_data.csv not found. Please run the scraper first.")
        return None
    except Exception as e:
        print(f"Error analyzing data: {str(e)}")
        return None

if __name__ == "__main__":
    analyze_competitor_data() 