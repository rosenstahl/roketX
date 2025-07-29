#!/usr/bin/env node
// Netcup-specific setup script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('🌐 Setting up RoketX for Netcup hosting...');

try {
  // 1. Ensure scripts directory exists
  const scriptsDir = path.join(projectRoot, 'scripts');
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
    console.log('✅ Scripts directory created');
  }
  
  // 2. Create .env file if it doesn't exist
  const envPath = path.join(projectRoot, '.env');
  if (!fs.existsSync(envPath)) {
    const envContent = `# Netcup Production Environment
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://roketx.de,https://www.roketx.de
`;
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env file created with Netcup defaults');
  }
  
  // 3. Ensure dist directory exists
  const distDir = path.join(projectRoot, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log('✅ Dist directory created');
  }
  
  // 4. Create deployment info file
  const deployInfoPath = path.join(projectRoot, 'DEPLOYMENT.md');
  const deployInfo = `# RoketX Netcup Deployment Guide

## Plesk Panel Setup

### 1. Node.js Configuration
- **Application Root**: \`/httpdocs/roketx.de\`
- **Document Root**: \`/httpdocs/roketx.de\`  
- **Startup File**: \`server.js\`
- **Node.js Version**: 21.x
- **Application Mode**: production

### 2. Build Process
1. Run: \`npm install\`
2. Run: \`npm run build:netcup\`
3. Restart App in Plesk Panel

### 3. Troubleshooting
- Check server logs in Plesk Panel
- Verify dist/ folder contains webpack assets
- Ensure fonts symlink exists: \`dist/fonts -> assets/.OTF\`

## Files Structure
\`\`\`
/httpdocs/roketx.de/
├── server.js          # Main application file
├── package.json       # Dependencies & scripts
├── dist/              # Built assets (auto-generated)
│   ├── index.html     # React app entry
│   ├── assets/        # Webpack bundles
│   └── fonts/         # Symlink to assets/.OTF
├── src/               # React source code
└── public/            # Static assets
\`\`\`

Generated: ${new Date().toISOString()}
`;
  
  fs.writeFileSync(deployInfoPath, deployInfo);
  console.log('✅ Deployment guide created');
  
  console.log('🎉 Netcup setup completed successfully!');
  console.log('📖 Read DEPLOYMENT.md for deployment instructions');
  
} catch (error) {
  console.error('❌ Netcup setup failed:', error.message);
  process.exit(1);
}