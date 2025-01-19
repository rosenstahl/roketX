// scripts/generate-favicons.js
import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
  // Ensure logos directory exists
  const outputDir = join(dirname(__dirname), 'public', 'logos');
  await fs.mkdir(outputDir, { recursive: true });

  // Optimized square SVG for favicon
  const faviconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#FFFFFF"/>
    <g transform="translate(10,30) scale(0.012,-0.012)" fill="#000000">
      <path d="M2100 680 l0 -650 145 0 145 0 0 144 0 143 81 73 c44 40 84 69 88 64 4 -5 88 -102 186 -216 l178 -208 165 0 c156 0 164 1 150 18 -8 9 -106 125 -218 257 -112 132 -212 250 -222 261 l-20 22 215 188 215 189 -185 3 -184 2 -215 -190 c-118 -104 -219 -190 -225 -190 -5 0 -9 147 -9 370 l0 370 -145 0 -145 0 0 -650z"/>
    </g>
  </svg>`;

  // Write the optimized SVG file
  const svgPath = join(outputDir, 'favicon.svg');
  await fs.writeFile(svgPath, faviconSvgContent);

  // Generate PNGs in different sizes
  const sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'favicon-64x64.png': 64,
    'apple-touch-icon.png': 180
  };

  // Using the optimized SVG to generate PNGs
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(Buffer.from(faviconSvgContent))
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(join(outputDir, filename));
  }

  // Also generate an ICO file (Windows favicon)
  const icoBuffer = await sharp(Buffer.from(faviconSvgContent))
    .resize(32, 32)
    .toFormat('ico')
    .toBuffer();

  await fs.writeFile(join(outputDir, 'favicon.ico'), icoBuffer);

  console.log('Favicons generated successfully in public/logos/!');
}

generateFavicons().catch(console.error);