#!/bin/bash

# Farben für bessere Lesbarkeit
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo "${GREEN}🚀 Starting deployment process...${NC}"

# 1. Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# 2. Install dependencies
echo "Installing dependencies..."
npm install

# 3. Run tests
echo "Running tests..."
npm run test

# Check if tests passed
if [ $? -ne 0 ]; then
    echo "${RED}❌ Tests failed. Aborting deployment.${NC}"
    exit 1
fi

# 4. Build the project
echo "Building project..."
npm run build

# 5. Check build status
if [ $? -ne 0 ]; then
    echo "${RED}❌ Build failed. Aborting deployment.${NC}"
    exit 1
fi

# 6. Deploy to production
echo "Deploying to production..."
# Hier kommt Ihr spezifischer Deploy-Befehl

echo "${GREEN}✅ Deployment completed successfully!${NC}"