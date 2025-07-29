#!/usr/bin/env node
// Post-build script for Netcup deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('🔧 Running post-build setup for Netcup...');

try {
  // 1. Create fonts symlink
  const distPath = path.join(projectRoot, 'dist');
  const fontsSymlink = path.join(distPath, 'fonts');
  const fontsTarget = path.join(distPath, 'assets', '.OTF');
  
  // Remove existing symlink if it exists
  if (fs.existsSync(fontsSymlink)) {
    fs.unlinkSync(fontsSymlink);
  }
  
  // Create new symlink
  if (fs.existsSync(fontsTarget)) {
    fs.symlinkSync('assets/.OTF', fontsSymlink);
    console.log('✅ Fonts symlink created: dist/fonts -> assets/.OTF');
  }
  
  // 2. Copy missing static assets
  const publicPath = path.join(projectRoot, 'public');
  
  // Copy manifest.json
  const manifestSrc = path.join(publicPath, 'manifest.json');
  const manifestDest = path.join(distPath, 'manifest.json');
  if (fs.existsSync(manifestSrc) && !fs.existsSync(manifestDest)) {
    fs.copyFileSync(manifestSrc, manifestDest);
    console.log('✅ Manifest.json copied to dist/');
  }
  
  // Copy images directory
  const imagesSrc = path.join(publicPath, 'images');
  const imagesDest = path.join(distPath, 'images');
  if (fs.existsSync(imagesSrc) && !fs.existsSync(imagesDest)) {
    fs.cpSync(imagesSrc, imagesDest, { recursive: true });
    console.log('✅ Images directory copied to dist/');
  }
  
  // Copy favicon.ico
  const faviconSrc = path.join(publicPath, 'favicon.ico');
  const faviconDest = path.join(distPath, 'favicon.ico');
  if (fs.existsSync(faviconSrc) && !fs.existsSync(faviconDest)) {
    fs.copyFileSync(faviconSrc, faviconDest);
    console.log('✅ Favicon.ico copied to dist/');
  }
  
  // 3. Verify build integrity
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Check if webpack assets are included
    const hasWebpackAssets = indexContent.includes('/assets/js/') && indexContent.includes('/assets/css/');
    
    // Check if old development script is removed
    const hasOldScript = indexContent.includes('/src/main.jsx');
    
    if (hasWebpackAssets && !hasOldScript) {
      console.log('✅ Build verification passed - webpack assets included, dev script removed');
    } else {
      console.warn('⚠️  Build verification failed:');
      if (!hasWebpackAssets) console.warn('   - Missing webpack assets');
      if (hasOldScript) console.warn('   - Development script still present');
    }
  }
  
  console.log('🎉 Post-build setup completed successfully!');
  
} catch (error) {
  console.error('❌ Post-build setup failed:', error.message);
  process.exit(1);
}