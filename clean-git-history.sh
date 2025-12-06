#!/bin/bash
# Script to clean large files from git history

cd /Users/zarruk/Documents/divatude

echo "⚠️  WARNING: This will rewrite git history!"
echo "Make sure you have a backup and no one else is working on this repo."
echo ""
read -p "Continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Aborted."
    exit 1
fi

echo ""
echo "Removing large files from git history..."

# Remove large files from all commits
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch \
    public/assets/render.glb \
    public/assets/shoe.glb \
    public/assets/shoe2.5.glb \
    public/assets/shoe25-v1.glb \
    public/assets/**/*.exr \
    public/assets/enviroments/*.hdr \
    public/assets/materials/*.exr' \
  --prune-empty --tag-name-filter cat -- --all

echo ""
echo "Cleaning up..."
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo ""
echo "✅ Done! Repository size should be much smaller now."
echo ""
echo "To push, you'll need to force push:"
echo "  git push origin main --force"
echo ""
echo "⚠️  WARNING: Force push rewrites remote history!"

