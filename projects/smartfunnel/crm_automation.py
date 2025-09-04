import gspread
from google.oauth2.service_account import Credentials
import pandas as pd
from datetime import datetime
import logging
from config import *

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class CRMAutomation:
    def __init__(self):
        self.client = None
        self.sheet = None
        self.setup_google_sheets()
        
    def setup_google_sheets(self):
        """Setup Google Sheets API connection"""
        try:
            # Define the scope
            scope = [
                'https://spreadsheets.google.com/feeds',
                'https://www.googleapis.com/auth/drive'
            ]
            
            # Load credentials
            creds = Credentials.from_service_account_file(
                GOOGLE_SHEETS_CREDENTIALS_FILE, 
                scopes=scope
            )
            
            # Authorize the clientsheet
            self.client = gspread.authorize(creds)
            
            # Open the spreadsheet
            if GOOGLE_SHEET_ID:
                spreadsheet = self.client.open_by_key(GOOGLE_SHEET_ID)
            else:
                # Create new spreadsheet if no ID provided
                spreadsheet = self.client.create('Lead Generation CRM')
                logger.info(f"Created new spreadsheet: {spreadsheet.title}")
            
            # Get or create the leads sheet
            try:
                self.sheet = spreadsheet.worksheet(CRM_SHEET_NAME)
            except gspread.WorksheetNotFound:
                self.sheet = spreadsheet.add_worksheet(title=CRM_SHEET_NAME, rows=1000, cols=20)
                # Set up headers
                self.sheet.update('A1:J1', [CRM_COLUMNS])
                logger.info(f"Created new worksheet: {CRM_SHEET_NAME}")
                
        except Exception as e:
            logger.error(f"Error setting up Google Sheets: {e}")
            raise
    
    def import_leads_from_csv(self, csv_filename):
        """Import leads from CSV file to Google Sheets"""
        try:
            # Read CSV file
            df = pd.read_csv(csv_filename)
            
            # Ensure all required columns exist
            for col in CRM_COLUMNS:
                if col not in df.columns:
                    df[col] = 'N/A'
            
            # Reorder columns to match CRM_COLUMNS
            df = df[CRM_COLUMNS]
            
            # Convert DataFrame to list of lists
            data = [df.columns.tolist()] + df.values.tolist()
            
            # Clear existing data (except headers)
            self.sheet.clear()
            
            # Update with new data
            self.sheet.update('A1', data)
            
            logger.info(f"Successfully imported {len(df)} leads from {csv_filename}")
            return len(df)
            
        except Exception as e:
            logger.error(f"Error importing leads: {e}")
            return 0
    
    def append_leads(self, leads_data):
        """Append new leads to existing sheet"""
        try:
            if not leads_data:
                logger.warning("No leads data to append")
                return 0
            
            # Convert to DataFrame if it's a list of dictionaries
            if isinstance(leads_data, list):
                df = pd.DataFrame(leads_data)
            else:
                df = leads_data
            
            # Ensure all required columns exist
            for col in CRM_COLUMNS:
                if col not in df.columns:
                    df[col] = 'N/A'
            
            # Reorder columns
            df = df[CRM_COLUMNS]
            
            # Get the next empty row
            next_row = len(self.sheet.get_all_values()) + 1
            
            # Append data
            self.sheet.update(f'A{next_row}', df.values.tolist())
            
            logger.info(f"Successfully appended {len(df)} leads to row {next_row}")
            return len(df)
            
        except Exception as e:
            logger.error(f"Error appending leads: {e}")
            return 0
    
    def update_lead_status(self, company_name, new_status, notes=None):
        """Update the status of a specific lead"""
        try:
            # Find the row with the company name
            all_values = self.sheet.get_all_values()
            
            for i, row in enumerate(all_values[1:], start=2):  # Skip header row
                if row[0] == company_name:  # Company Name is in column A
                    # Update status (column I)
                    self.sheet.update(f'I{i}', new_status)
                    
                    # Update notes if provided (column J)
                    if notes:
                        self.sheet.update(f'J{i}', notes)
                    
                    logger.info(f"Updated status for {company_name} to {new_status}")
                    return True
            
            logger.warning(f"Company {company_name} not found in sheet")
            return False
            
        except Exception as e:
            logger.error(f"Error updating lead status: {e}")
            return False
    
    def get_leads_by_status(self, status):
        """Get all leads with a specific status"""
        try:
            all_values = self.sheet.get_all_values()
            headers = all_values[0]
            
            # Find status column index
            status_col_idx = headers.index('Status') if 'Status' in headers else 8
            
            # Filter leads by status
            filtered_leads = []
            for row in all_values[1:]:
                if len(row) > status_col_idx and row[status_col_idx] == status:
                    lead_dict = dict(zip(headers, row))
                    filtered_leads.append(lead_dict)
            
            logger.info(f"Found {len(filtered_leads)} leads with status '{status}'")
            return filtered_leads
            
        except Exception as e:
            logger.error(f"Error getting leads by status: {e}")
            return []
    
    def get_leads_by_industry(self, industry):
        """Get all leads for a specific industry"""
        try:
            all_values = self.sheet.get_all_values()
            headers = all_values[0]
            
            # Find industry column index
            industry_col_idx = headers.index('Industry') if 'Industry' in headers else 5
            
            # Filter leads by industry
            filtered_leads = []
            for row in all_values[1:]:
                if len(row) > industry_col_idx and row[industry_col_idx] == industry:
                    lead_dict = dict(zip(headers, row))
                    filtered_leads.append(lead_dict)
            
            logger.info(f"Found {len(filtered_leads)} leads for industry '{industry}'")
            return filtered_leads
            
        except Exception as e:
            logger.error(f"Error getting leads by industry: {e}")
            return []
    
    def export_to_csv(self, filename='crm_export.csv'):
        """Export all leads from Google Sheets to CSV"""
        try:
            all_values = self.sheet.get_all_values()
            headers = all_values[0]
            data = all_values[1:]
            
            df = pd.DataFrame(data, columns=headers)
            df.to_csv(filename, index=False)
            
            logger.info(f"Exported {len(data)} leads to {filename}")
            return len(data)
            
        except Exception as e:
            logger.error(f"Error exporting to CSV: {e}")
            return 0
    
    def get_sheet_stats(self):
        """Get statistics about the leads sheet"""
        try:
            all_values = self.sheet.get_all_values()
            headers = all_values[0]
            data = all_values[1:]
            
            if not data:
                return {
                    'total_leads': 0,
                    'status_counts': {},
                    'industry_counts': {},
                    'source_counts': {}
                }
            
            df = pd.DataFrame(data, columns=headers)
            
            stats = {
                'total_leads': len(df),
                'status_counts': df['Status'].value_counts().to_dict() if 'Status' in df.columns else {},
                'industry_counts': df['Industry'].value_counts().to_dict() if 'Industry' in df.columns else {},
                'source_counts': df['Source'].value_counts().to_dict() if 'Source' in df.columns else {}
            }
            
            logger.info(f"Sheet stats: {stats}")
            return stats
            
        except Exception as e:
            logger.error(f"Error getting sheet stats: {e}")
            return {}

if __name__ == "__main__":
    # Test the CRM automation
    crm = CRMAutomation()
    
    # Get sheet statistics
    stats = crm.get_sheet_stats()
    print("CRM Sheet Statistics:")
    print(f"Total leads: {stats['total_leads']}")
    print(f"Status counts: {stats['status_counts']}")
    print(f"Industry counts: {stats['industry_counts']}")
    print(f"Source counts: {stats['source_counts']}") 