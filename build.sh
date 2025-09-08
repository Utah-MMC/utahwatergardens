#!/bin/bash
set -e

echo "Starting build process..."

# Navigate to frontend directory
cd frontend

echo "Installing dependencies..."
npm install

echo "Setting permissions on node_modules/.bin..."
chmod -R +x node_modules/.bin/

echo "Building React app..."
npm run build

echo "Build completed successfully!"
