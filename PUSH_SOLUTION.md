# Git Push Timeout Solution

The push is failing because large files (76MB+) are still in git history, causing GitHub to timeout.

## Quick Solutions (Try These First)

### Option 1: Use GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Open your repository
3. Commit and push through the GUI - it often handles large pushes better

### Option 2: Retry with Better Network
Sometimes network conditions improve. Try:
```bash
git push origin main
```

### Option 3: Push in Smaller Batches
If you have multiple commits, try pushing them one at a time:
```bash
# See what commits need to be pushed
git log --oneline origin/main..HEAD

# Push commits one by one (if possible)
git push origin <commit-hash>:main
```

## Permanent Solution: Clean Git History

The large files are still in git history. To remove them permanently:

### Option A: Use BFG Repo-Cleaner (Recommended)
```bash
# Install BFG
brew install bfg

# Remove large files from history
bfg --strip-blobs-bigger-than 10M

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (WARNING: This rewrites history)
git push origin main --force
```

### Option B: Use git filter-branch
```bash
# Remove large files from all history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch public/assets/*.glb public/assets/**/*.exr public/assets/enviroments/*.hdr' \
  --prune-empty --tag-name-filter cat -- --all

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (WARNING: This rewrites history)
git push origin main --force
```

## Alternative: Use Vercel Blob Storage

Instead of pushing large files to GitHub:
1. Upload large files to Vercel Blob Storage using the upload script
2. Keep only code in GitHub
3. Reference blob URLs in your code

This is the recommended approach for production deployments.

