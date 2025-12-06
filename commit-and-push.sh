#!/bin/bash
cd /Users/zarruk/Documents/divatude

echo "Checking git status..."
git status

echo ""
echo "Adding changed files..."
git add src/components/Canvas.jsx upload-to-blob.js

echo ""
echo "Committing changes..."
git commit -m "Update model to use shoe25-v1.glb

- Change default model from shoe2.5.glb to shoe25-v1.glb
- Update upload script to include shoe25-v1.glb for blob storage"

echo ""
echo "Pushing to remote..."
git push

echo ""
echo "Done!"

