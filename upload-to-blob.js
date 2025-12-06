import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "vercel_blob_rw_TCCVStp4Hk6DkZOP_t14TMuME1aXzFOutv4rIv8a0RCHsa6";

// Files to upload
const filesToUpload = [
  'public/assets/shoe25-v1.glb',
  'public/assets/model.glb',
  'public/assets/enviroments/Jewelry-HDRI-black-contrast.hdr',
];

async function uploadFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return null;
    }

    const fileBuffer = fs.readFileSync(fullPath);
    const fileName = path.basename(filePath);
    const blobPath = filePath.replace('public/', ''); // Remove 'public/' prefix for blob path

    console.log(`📤 Uploading ${fileName}...`);
    
    const blob = await put(blobPath, fileBuffer, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
    });

    console.log(`✅ Uploaded: ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`❌ Error uploading ${filePath}:`, error.message);
    return null;
  }
}

async function uploadAll() {
  console.log('🚀 Starting upload to Vercel Blob Storage...\n');
  
  const urls = {};
  
  for (const filePath of filesToUpload) {
    const url = await uploadFile(filePath);
    if (url) {
      const key = filePath.replace('public/assets/', '');
      urls[key] = url;
    }
    console.log(''); // Empty line for readability
  }

  console.log('\n📋 Upload Summary:');
  console.log('==================');
  console.log(JSON.stringify(urls, null, 2));
  
  console.log('\n💡 Next steps:');
  console.log('1. Copy the URLs above');
  console.log('2. Update your code to use these URLs instead of local paths');
  console.log('3. Or set them as environment variables in Vercel');
  
  // Save URLs to a file for easy reference
  fs.writeFileSync(
    path.join(__dirname, 'blob-urls.json'),
    JSON.stringify(urls, null, 2)
  );
  console.log('\n✅ URLs saved to blob-urls.json');
}

uploadAll().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

