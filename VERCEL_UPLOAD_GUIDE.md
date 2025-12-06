# How to Upload Large Files to Vercel

Since `shoe2.5.glb` (158MB) and other large files exceed GitHub's 100MB limit, here are the best ways to get them on Vercel:

## Option 1: Use Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Link your project (if not already linked):**
   ```bash
   vercel link
   ```
   This will connect your local project to your Vercel project.

4. **Deploy with large files:**
   ```bash
   vercel --prod
   ```
   This will upload ALL files in your `public/` folder, including the large ones.

## Option 2: Use Vercel Blob Storage (Best for Large Files)

1. **Install Vercel Blob:**
   ```bash
   npm install @vercel/blob
   ```

2. **Upload files via script:**
   Create a script to upload your large files to Vercel Blob Storage, then update your code to reference the blob URLs.

3. **Or use Vercel Dashboard:**
   - Go to your Vercel project dashboard
   - Navigate to Storage → Blob
   - Upload your `.glb` and `.hdr` files
   - Copy the URLs and use them in your code

## Option 3: Use Git LFS (If you want files in Git)

1. **Install Git LFS:**
   ```bash
   brew install git-lfs  # macOS
   ```

2. **Initialize and track large files:**
   ```bash
   git lfs install
   git lfs track "*.glb"
   git lfs track "*.hdr"
   git lfs track "*.exr"
   git add .gitattributes
   git add public/assets/shoe2.5.glb
   git add public/assets/model.glb
   git add public/assets/enviroments/*.hdr
   git add public/assets/enviroments/*.exr
   git commit -m "Add large files with Git LFS"
   git push
   ```

   Note: Vercel supports Git LFS, so files tracked with LFS will be available in your deployment.

## Option 4: Manual Upload via Vercel Dashboard

Unfortunately, Vercel doesn't support drag-and-drop file uploads directly. You need to use one of the methods above.

## Quick Start (Easiest Method)

**Use Vercel CLI:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (this uploads everything including large files)
vercel --prod
```

This will upload all your files including the large `.glb` and `.hdr` files directly to Vercel, bypassing GitHub's size limits.

