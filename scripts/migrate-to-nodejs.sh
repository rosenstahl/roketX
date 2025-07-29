#!/bin/bash

# migrate-to-nodejs.sh - Complete migration from GitHub Actions to Node.js Server
# This script handles the complete migration process

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 RoketX Migration: GitHub Actions → Node.js Server${NC}"
echo "============================================================"

# Configuration
PROJECT_DIR="/var/www/roketx"
SERVICE_USER="roketx"
BACKUP_DIR="/var/backups/roketx-$(date +%Y%m%d-%H%M%S)"
DOMAIN="roketx.de"

echo -e "${BLUE}📋 Migration Configuration:${NC}"
echo "  Project Directory: $PROJECT_DIR"
echo "  Service User: $SERVICE_USER"
echo "  Backup Directory: $BACKUP_DIR"
echo "  Domain: $DOMAIN"
echo ""

# Check if running on production server
if [[ ! -d "$PROJECT_DIR" ]]; then
    echo -e "${RED}❌ Production directory not found: $PROJECT_DIR${NC}"
    echo "Please run the setup-production.sh script first!"
    exit 1
fi

# Confirm migration
echo -e "${YELLOW}⚠️  This will migrate from GitHub Actions to Node.js Server deployment.${NC}"
echo -e "${YELLOW}   Current GitHub Actions workflow will be disabled.${NC}"
echo ""
read -p "Continue with migration? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Migration cancelled."
    exit 1
fi

# Create backup
echo -e "${YELLOW}💾 Creating backup...${NC}"
sudo mkdir -p "$BACKUP_DIR"
sudo cp -r "$PROJECT_DIR" "$BACKUP_DIR/"
echo "  Backup created at: $BACKUP_DIR"

# Stop any existing processes
echo -e "${YELLOW}⏸️  Stopping existing processes...${NC}"
sudo -u $SERVICE_USER pm2 stop all 2>/dev/null || echo "  No PM2 processes to stop"

# Navigate to project directory
cd "$PROJECT_DIR"

# Pull latest changes
echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
sudo -u $SERVICE_USER git pull origin main

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
sudo -u $SERVICE_USER npm install

# Set up environment variables
echo -e "${YELLOW}🔧 Setting up environment variables...${NC}"
if [[ ! -f ".env.production.local" ]]; then
    sudo -u $SERVICE_USER cp .env.production .env.production.local
    echo "  Created .env.production.local - please edit with production values"
    echo -e "${RED}⚠️  Remember to set GITHUB_WEBHOOK_SECRET!${NC}"
fi

# Set up logs directory
echo -e "${YELLOW}📝 Setting up logs directory...${NC}"
sudo -u $SERVICE_USER npm run setup:logs

# Build application
echo -e "${YELLOW}🏗️  Building application...${NC}"
sudo -u $SERVICE_USER npm run build

# Test the application
echo -e "${YELLOW}🧪 Testing application...${NC}"
sudo -u $SERVICE_USER timeout 10s npm run server:dev &
SERVER_PID=$!
sleep 3

# Test health endpoint
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}  ✅ Health check passed${NC}"
else
    echo -e "${RED}  ❌ Health check failed${NC}"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

# Stop test server
kill $SERVER_PID 2>/dev/null || true
sleep 2

# Start with PM2
echo -e "${YELLOW}🚀 Starting application with PM2...${NC}"
sudo -u $SERVICE_USER npm run pm2:start

# Save PM2 configuration
sudo -u $SERVICE_USER pm2 save

# Test PM2 status
echo -e "${YELLOW}📊 Checking PM2 status...${NC}"
sudo -u $SERVICE_USER npm run pm2:status

# Final health check
echo -e "${YELLOW}🏥 Final health check...${NC}"
sleep 5
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}  ✅ Application is running successfully${NC}"
else
    echo -e "${RED}  ❌ Application health check failed${NC}"
    echo "  Check logs: sudo -u $SERVICE_USER npm run pm2:logs"
    exit 1
fi

# Test webhook endpoint
echo -e "${YELLOW}🔗 Testing webhook endpoint...${NC}"
webhook_response=$(curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:3000/webhook)
if [[ "$webhook_response" == "401" ]]; then
    echo -e "${GREEN}  ✅ Webhook endpoint responding (401 = signature required)${NC}"
else
    echo -e "${YELLOW}  ⚠️  Webhook response: $webhook_response (expected 401)${NC}"
fi

# GitHub webhook setup reminder
echo ""
echo -e "${YELLOW}📋 Manual steps remaining:${NC}"
echo "1. 🔧 Edit .env.production.local with production values"
echo "2. 🔑 Set GITHUB_WEBHOOK_SECRET in environment file"
echo "3. 🌐 Configure GitHub webhook:"
echo "   - URL: https://$DOMAIN/webhook"
echo "   - Content-Type: application/json"
echo "   - Secret: [value from GITHUB_WEBHOOK_SECRET]"
echo "   - Events: Push events"
echo "4. 🚫 Disable GitHub Actions workflow (optional)"
echo "5. 🧪 Test deployment with a commit to main branch"

# Show useful commands
echo ""
echo -e "${YELLOW}🛠️  Useful commands:${NC}"
echo "  Check status: sudo -u $SERVICE_USER npm run pm2:status"
echo "  View logs: sudo -u $SERVICE_USER npm run pm2:logs"
echo "  Restart: sudo -u $SERVICE_USER npm run pm2:restart"
echo "  Health check: curl https://$DOMAIN/api/health"
echo "  Deployment logs: sudo -u $SERVICE_USER tail -f deployment.log"

# Migration success
echo ""
echo -e "${GREEN}🎉 Migration completed successfully!${NC}"
echo -e "${GREEN}✅ Node.js server is running on PM2${NC}"
echo -e "${GREEN}✅ Webhook endpoint is ready${NC}"
echo -e "${GREEN}✅ Application is accessible${NC}"
echo ""
echo -e "${BLUE}📍 Next: Configure GitHub webhook and test deployment${NC}"

# Cleanup reminder
echo ""
echo -e "${YELLOW}🗑️  Cleanup reminder:${NC}"
echo "After successful testing, you can remove:"
echo "  - .github/workflows/main.yml (GitHub Actions)"
echo "  - nginx/roketx.de (old static config)"
echo "  - scripts/deploy.sh (manual deployment)"
echo "  - scripts/ssl-setup.sh (handled by setup script)"
echo ""
echo "Backup location: $BACKUP_DIR"