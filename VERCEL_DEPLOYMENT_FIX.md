# Fix Vercel Deployment - Missing Model File

The `shoe25-v1.glb` file is not deployed because it was removed from git (too large). Here's how to fix it:

## Solution: Upload to Vercel Blob Storage

### Step 1: Upload the file to Blob Storage

Run this command in your terminal:

```bash
cd /Users/zarruk/Documents/divatude
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_TCCVStp4Hk6DkZOP_t14TMuME1aXzFOutv4rIv8a0RCHsa6" node upload-to-blob.js
```

This will upload `shoe25-v1.glb` and save the URL to `blob-urls.json`.

### Step 2: Set Environment Variable in Vercel

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project: `configurator-2-0`
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `VITE_MODEL_URL`
   - **Value**: (The blob URL from `blob-urls.json`, e.g., `https://[your-blob-url].public.blob.vercel-storage.com/assets/shoe25-v1.glb`)
   - **Environment**: Production, Preview, Development (select all)
5. Click **Save**
6. **Redeploy** your application

### Step 3: Verify

After redeploying, the app should load the model from the blob storage URL.

## Alternative: Add File Back to Git (Not Recommended)

If the file is under 100MB, you could add it back:

```bash
git add public/assets/shoe25-v1.glb
git commit -m "Add shoe25-v1.glb model file"
git push origin main
```

But this is not recommended as it may cause push timeouts again.


