#!/bin/bash

# Service Area Cleanup Script
# This script removes duplicate service area files after migration

echo "🧹 Starting cleanup of duplicate service area files..."

# Create backup directory
mkdir -p backup/service-areas-$(date +%Y%m%d)

# Backup files before deletion
echo "📦 Creating backup..."
cp -r frontend/src/pages/ServiceAreas/* backup/service-areas-$(date +%Y%m%d)/

# Count files to be removed
TOTAL_FILES=$(find frontend/src/pages/ServiceAreas -name "*.js" -not -name "*Template*" | wc -l)
echo "📊 Found $TOTAL_FILES service area files to remove"

# Remove duplicate files (keep templates)
echo "🗑️  Removing duplicate files..."
find frontend/src/pages/ServiceAreas -name "*.js" -not -name "*Template*" -delete

echo "✅ Cleanup complete!"
echo "📈 Expected improvements:"
echo "   - Eliminated $TOTAL_FILES duplicate files"
echo "   - Improved Ahrefs health score"
echo "   - Reduced maintenance overhead"
echo "   - Better SEO performance"
