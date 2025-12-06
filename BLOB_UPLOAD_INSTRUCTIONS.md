# Upload Large Files to Vercel Blob Storage

## Quick Steps

1. **Install the package:**
   ```bash
   npm install @vercel/blob
   ```

2. **Run the upload script:**
   ```bash
   BLOB_READ_WRITE_TOKEN="vercel_blob_rw_TCCVStp4Hk6DkZOP_t14TMuME1aXzFOutv4rIv8a0RCHsa6" node upload-to-blob.js
   ```

   Or use the npm script:
   ```bash
   BLOB_READ_WRITE_TOKEN="vercel_blob_rw_TCCVStp4Hk6DkZOP_t14TMuME1aXzFOutv4rIv8a0RCHsa6" npm run upload-blob
   ```

3. **The script will:**
   - Upload `shoe2.5.glb` (158MB)
   - Upload `model.glb` (if exists)
   - Upload `Jewelry-HDRI-black-contrast.hdr`
   - Save all URLs to `blob-urls.json`

4. **After upload, update your code:**
   - The URLs will be in `blob-urls.json`
   - Update `Canvas.jsx` to use these blob URLs instead of local paths
   - Or set them as environment variables in Vercel dashboard

## Alternative: Manual Upload via Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to **Storage** → **Blob**
3. Click **Upload** and select your large files
4. Copy the URLs and use them in your code

## Update Code to Use Blob URLs

After uploading, you'll need to update `Canvas.jsx` to use the blob URLs. The script will output the URLs, or you can find them in `blob-urls.json`.

