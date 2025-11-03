# GitHub Pages Setup - Quick Guide

## ⚠️ IMPORTANT: Enable GitHub Pages First!

The workflow won't run until you enable GitHub Pages in your repository settings.

---

## 📋 Step-by-Step Setup

### Step 1: Enable GitHub Pages (REQUIRED)

1. Go to your repository settings:
   ```
   https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/settings/pages
   ```

2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** (not "Deploy from branch")
   - This enables the workflow to deploy

3. Click **Save** (if there's a save button)

### Step 2: Verify Workflow Permissions

1. Go to repository settings → Actions → General:
   ```
   https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/settings/actions
   ```

2. Scroll to **"Workflow permissions"**:
   - Select: **"Read and write permissions"** ✅
   - Check: **"Allow GitHub Actions to create and approve pull requests"** ✅

3. Click **Save**

### Step 3: Trigger the Workflow

The workflow should auto-trigger now. If not:

1. Go to Actions tab:
   ```
   https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/actions
   ```

2. Click on **"Deploy Next.js to GitHub Pages"** workflow

3. Click **"Run workflow"** button (top right)

4. Select **"main"** branch

5. Click **"Run workflow"** to start

---

## 🔍 Troubleshooting

### Workflow not appearing in Actions tab?

**Check:**
- Is the `.github/workflows/nextjs.yml` file in the repository?
- Go to: https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/tree/main/.github/workflows
- File should be there ✅

**Fix:**
- Workflow file is already pushed
- Just need to enable GitHub Pages (Step 1 above)

### "GitHub Pages is not configured" error?

**You must enable GitHub Pages first:**
1. Settings → Pages
2. Source: **GitHub Actions**
3. This is the KEY step!

### Build fails?

**Check build logs:**
1. Actions tab → Click failed workflow
2. Click "build" job
3. Expand "Build with Next.js" step
4. Read the error

**Common fixes:**
- Node version issue → Workflow uses Node 20 ✅
- Missing dependencies → Already handled ✅
- Static export error → Already fixed with `generateStaticParams()` ✅

---

## ✅ Verification Checklist

After setup, verify:

- [ ] GitHub Pages enabled (Settings → Pages → Source: GitHub Actions)
- [ ] Workflow permissions set (Settings → Actions → Read and write)
- [ ] Workflow triggered (Actions tab shows active/completed run)
- [ ] Build succeeded (Green checkmark in Actions)
- [ ] Site deployed (Blue checkmark for "deploy" step)
- [ ] Site accessible at: https://aga9leaps.github.io/marcus2v2-fyniq-processor-dashboard/

---

## 🌐 Expected Result

After successful deployment:

**URL:** https://aga9leaps.github.io/marcus2v2-fyniq-processor-dashboard/

**You should see:**
- Login page with FynIQ logo
- Demo credentials box showing:
  - Email: processor@fyniq.com
  - Password: demo123
- Clean, professional design

---

## 🆘 Still Not Working?

### Alternative 1: Manual Deploy with gh-pages

```bash
cd /home/aga/marcus2-v2-beta/projects/processor_dashboard

# Build
DEPLOY_TARGET=github-pages npm run build

# Install gh-pages
npm install -g gh-pages

# Deploy
gh-pages -d out
```

### Alternative 2: Use Vercel (Easiest!)

1. Go to: https://vercel.com
2. Click "Import Project"
3. Connect GitHub repo: `marcus2v2-fyniq-processor-dashboard`
4. Vercel auto-detects Next.js
5. Click "Deploy"
6. Done! Live in 2 minutes

**Vercel advantages:**
- Automatic deployments on push
- Preview URLs for every commit
- Better performance than GitHub Pages
- Custom domain support

---

## 📞 Need Help?

**Check these links:**
1. **Workflow runs:** https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/actions
2. **Repository settings:** https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/settings
3. **GitHub Pages docs:** https://docs.github.com/en/pages/getting-started-with-github-pages

---

**The #1 issue is usually:** GitHub Pages not enabled in settings!

**Go enable it now:** https://github.com/aga9leaps/marcus2v2-fyniq-processor-dashboard/settings/pages

**Select "GitHub Actions" as the source!** ✅
