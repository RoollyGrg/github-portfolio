# Portfolio Deployment Guide

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag and drop the `dist` folder from this project onto Netlify's deploy area
3. Your portfolio will be live instantly with a URL like: `https://your-portfolio-name.netlify.app`
4. Copy this URL and use it in your Word document submission

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project" and import your GitHub repository (or upload the `dist` folder)
3. Deploy - you'll get a URL like: `https://your-portfolio-name.vercel.app`
4. Copy this URL for your submission

### Option 3: GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select the `dist` folder as the source
4. Your portfolio will be at: `https://yourusername.github.io/repository-name`
5. Copy this URL for your submission

### Option 4: Google Sites

1. Go to [sites.google.com](https://sites.google.com)
2. Create a new site
3. Use the "Embed" option to embed your portfolio
4. Or upload the built files using Google Sites' file upload feature

## Before Deploying

1. **Update GitHub Link**: Edit `src/components/WorkSamples.jsx` and replace `https://github.com/yourusername` with your actual GitHub profile URL

2. **Add Your Information**: 
   - Update education details in `src/components/Education.jsx`
   - Add your actual project descriptions
   - Include your certificates, transcripts, and recommendations

3. **Build the Project**:
   ```bash
   npm run build
   ```

4. **Test Locally** (optional):
   ```bash
   npm run preview
   ```

## After Deployment

1. Test your portfolio URL to ensure it works
2. Verify all links are working
3. Check that all 4 sections are visible and accessible
4. Update the Word document with your actual portfolio URL
5. Submit to D2L

## Important Notes

- Make sure your portfolio is publicly accessible (no login required)
- Test the navigation menu - all jump links should work
- Verify all sections load properly on mobile devices
- Double-check that your GitHub link and any other external links work

