# Video Assets

## Missing Video Files

The following video files are not included in the Git repository due to size constraints:

- `hero-background.mp4` (27MB) - Background video for hero section

## Deployment Instructions

### For Production Deployment:

1. **Upload video files separately to your server:**
   ```bash
   scp public/videos/hero-background.mp4 user@server:/var/www/roketx/public/videos/
   ```

2. **Or use CDN for better performance:**
   - Upload videos to AWS S3, Cloudinary, or similar CDN
   - Update video references in components to use CDN URLs
   - Example: `src/components/sections/Hero.jsx`

3. **Alternative: Use a placeholder:**
   - Video is automatically hidden if file doesn't exist
   - Hero section will work without video background
   - Consider using a static image as fallback

## Video Specifications

- **Format:** MP4 (H.264)
- **Recommended Size:** < 10MB for web optimization
- **Dimensions:** 1920x1080 or smaller
- **Duration:** Loop-friendly (seamless start/end)

## File Locations

After deployment, ensure videos are available at:
- `https://your-domain.com/videos/hero-background.mp4`

The React component will automatically load the video from the public directory.