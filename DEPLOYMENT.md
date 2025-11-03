# Deployment Guide - GitHub Pages

## ✅ Status: Ready for GitHub Pages

The repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

---

## 🚀 GitHub Pages Deployment Steps

### 1. Enable GitHub Pages (One-Time Setup)

1. Go to: **https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/settings/pages**

2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
   - Click **Save**

3. That's it! The workflow will trigger automatically.

---

### 2. Automatic Deployment

Every time you push to `main` branch:
1. GitHub Actions automatically runs
2. Builds the Next.js static site
3. Deploys to GitHub Pages
4. Your site will be live at:
   ```
   https://aga9leaps.github.io/marcus2v2-fyniq-processor-dashboard/
   ```

---

### 3. Check Deployment Status

**View Workflow Progress:**
- Go to: **https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/actions**
- Click on the latest workflow run
- Watch the build and deploy steps

**Build Status Badge:**
You can add this to README.md:
```markdown
![Deploy](https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/actions/workflows/nextjs.yml/badge.svg)
```

---

## 📋 What's Configured

✅ **Workflow File:** `.github/workflows/nextjs.yml`
- Runs on every push to `main`
- Builds with `DEPLOY_TARGET=github-pages`
- Exports static site to `./out`
- Deploys to GitHub Pages

✅ **Next.js Config:** `next.config.js`
- Static export enabled
- Base path: `/marcus2v2-fyniq-processor-dashboard`
- Images unoptimized (required for static)

✅ **Static Params:** `app/dashboard/loans/[id]/page.tsx`
- `generateStaticParams()` added
- Pre-renders all 5 loan detail pages

✅ **No Jekyll:** `.nojekyll` file
- Prevents Jekyll processing
- Ensures proper asset loading

---

## 🔧 Manual Deploy (If Needed)

If automatic deployment doesn't work, you can deploy manually:

```bash
# 1. Build static site locally
npm run build:github-pages

# 2. Install GitHub Pages CLI
npm install -g gh-pages

# 3. Deploy ./out folder
gh-pages -d out -b gh-pages
```

---

## 🌐 Access Your Site

Once deployed, your dashboard will be available at:

**URL:** https://aga9leaps.github.io/marcus2v2-fyniq-processor-dashboard/

**Login:**
- Email: `processor@fyniq.com`
- Password: `demo123`
- (Any credentials work - it's a mockup)

---

## 🐛 Troubleshooting

### Build fails in GitHub Actions?

**Check the workflow log:**
1. Go to Actions tab
2. Click failed workflow
3. Expand "Build with Next.js" step
4. Read error message

**Common issues:**
- Missing `generateStaticParams()` → Already fixed ✅
- Node version mismatch → Workflow uses Node 20 ✅
- Missing dependencies → Workflow runs `npm ci` ✅

### Pages not loading correctly?

**Check base path:**
- All links use Next.js `<Link>` component ✅
- Images use Next.js `<Image>` with `unoptimized` ✅
- API routes disabled (static export only) ✅

### 404 errors on refresh?

This is normal for client-side routing on GitHub Pages:
- Root URL works: `https://...github.io/processor-dashboard/`
- Direct deep links may 404 (limitation of static hosting)
- Users should navigate from root

---

## 📦 What Gets Deployed

The `./out` folder contains:
```
out/
├── index.html                    # Root → redirects to /login
├── login.html                    # Login page
├── dashboard.html                # Dashboard page
├── dashboard/
│   ├── calendar.html            # Calendar page
│   ├── analytics.html           # Analytics page
│   └── loans/
│       ├── LOAN-001.html        # Pre-rendered loan pages
│       ├── LOAN-002.html
│       └── ...
├── _next/                        # Next.js assets
└── screenshots/                  # Screenshot images
```

---

## ✅ Checklist

- [x] Workflow file created (`.github/workflows/nextjs.yml`)
- [x] Next.js config for static export
- [x] `generateStaticParams()` added for dynamic routes
- [x] `.nojekyll` file present
- [x] Code pushed to GitHub
- [ ] **GitHub Pages enabled in repo settings** ← Do this now!
- [ ] Wait for first deployment (~2-3 minutes)
- [ ] Test live site

---

## 🎯 Next Steps

1. **Enable GitHub Pages** (see step 1 above)
2. Wait for workflow to complete
3. Visit your live site!
4. Share the URL for demos

**Your dashboard will be live in ~3 minutes!** 🚀
