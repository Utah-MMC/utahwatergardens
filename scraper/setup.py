#!/usr/bin/env python3
"""
Utah Water Gardens Lead Generation System - Setup Script
This script sets up the complete lead generation system for first-time users.
"""

import os
import sys
import subprocess
import json
from pathlib import Path

def check_python_version():
    """Check if Python version is compatible"""
    if sys.version_info < (3, 8):
        print("❌ Error: Python 3.8 or higher is required")
        print(f"Current version: {sys.version}")
        sys.exit(1)
    print(f"✅ Python version {sys.version.split()[0]} is compatible")

def install_dependencies():
    """Install required Python packages"""
    print("📦 Installing dependencies...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Dependencies installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing dependencies: {e}")
        sys.exit(1)

def create_config_file():
    """Create default configuration file"""
    config = {
        "database_path": "leads.db",
        "email_config": {
            "smtp_server": "smtp.gmail.com",
            "smtp_port": 587,
            "username": "your-email@gmail.com",
            "password": "your-app-password",
            "from_name": "Utah Water Gardens"
        },
        "scraping_settings": {
            "max_leads_per_source": 50,
            "delay_between_requests": 2,
            "timeout": 10
        },
        "lead_scoring": {
            "high_value_keywords": [
                "koi pond",
                "water feature", 
                "pond maintenance",
                "pond installation",
                "waterfall"
            ],
            "medium_value_keywords": [
                "pond",
                "water garden",
                "fountain",
                "aquascape"
            ],
            "location_bonus": [
                "Salt Lake City",
                "West Jordan", 
                "Sandy",
                "Ogden",
                "Provo",
                "Utah"
            ]
        }
    }
    
    with open("config.json", "w") as f:
        json.dump(config, f, indent=2)
    print("✅ Configuration file created: config.json")

def create_directories():
    """Create necessary directories"""
    directories = ["lead_analytics", "logs", "exports"]
    for directory in directories:
        Path(directory).mkdir(exist_ok=True)
    print("✅ Directories created")

def test_imports():
    """Test that all modules can be imported"""
    print("🧪 Testing imports...")
    try:
        import requests
        import pandas
        import numpy
        import matplotlib
        import seaborn
        import sklearn
        from bs4 import BeautifulSoup
        print("✅ All dependencies imported successfully")
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("Please run: pip install -r requirements.txt")
        sys.exit(1)

def run_initial_test():
    """Run a quick test of the system"""
    print("🚀 Running initial system test...")
    try:
        from main_lead_generator import UtahWaterGardensLeadGenerator
        generator = UtahWaterGardensLeadGenerator()
        stats = generator.get_quick_stats()
        print("✅ System initialized successfully")
        print(f"📊 Database status: {stats.get('total_leads', 0)} leads")
    except Exception as e:
        print(f"⚠️  System test warning: {e}")
        print("This is normal for first-time setup")

def main():
    """Main setup function"""
    print("=" * 60)
    print("🚀 Utah Water Gardens Lead Generation System Setup")
    print("=" * 60)
    
    # Check Python version
    check_python_version()
    
    # Install dependencies
    install_dependencies()
    
    # Test imports
    test_imports()
    
    # Create directories
    create_directories()
    
    # Create config file
    create_config_file()
    
    # Run initial test
    run_initial_test()
    
    print("\n" + "=" * 60)
    print("✅ Setup completed successfully!")
    print("=" * 60)
    print("\n📋 Next steps:")
    print("1. Edit config.json with your email settings")
    print("2. Run: python main_lead_generator.py --mode full")
    print("3. Check the README.md for detailed usage instructions")
    print("\n🎯 Your lead generation system is ready to go!")

if __name__ == "__main__":
    main() 