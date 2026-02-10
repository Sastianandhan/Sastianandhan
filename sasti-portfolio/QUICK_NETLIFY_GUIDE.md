# 🚀 Host Your Portfolio on Netlify (You Already Have Account)

## ⚡ METHOD 1: DRAG & DROP (Easiest - 1 Minute)

### Step 1: Open Netlify Dashboard
- Go to: **https://app.netlify.com/**
- Login with your email/password
- Click on **"Add new site"** button (top right)

### Step 2: Drag & Drop Your Folder
1. Open File Explorer on your computer
2. Navigate to: `sasti-portfolio` folder
3. **Drag the entire `sasti-portfolio` folder** onto the Netlify deploy area
   - You'll see a drop zone that says "Drag and drop a folder here"
   - Release to upload

### Step 3: Wait for Deployment
- Netlify processes your files (30-60 seconds)
- You'll see a progress bar
- Once complete, you get a **LIVE URL** ✨

### Step 4: Get Your Live Website
- Netlify shows: `https://[random-name].netlify.app`
- **DONE!** Your site is LIVE! 🎉
- Copy this URL and share it

---

## 🎯 CUSTOMIZE YOUR DOMAIN NAME

The default name is random (e.g., `quiet-pebble-123.netlify.app`). 

Change it to something better:

1. In Netlify Dashboard, find your site
2. Click **"Site settings"** button
3. Scroll to **"Change site name"**
4. Enter your custom name: e.g., `sasti-portfolio` or `sasti-ramanathan`
5. Click **Verify**
6. Your new URL: `https://sasti-portfolio.netlify.app` ✅

---

## 🔄 METHOD 2: GITHUB + NETLIFY (Auto Updates - Recommended)

If you want automatic deployments when you update files:

### Step 1: Push to GitHub

In your PowerShell terminal:

```bash
cd C:\Users\Sasti Anandhan . A\OneDrive - Kamaraj College of Engineering and Technology\Documents\ROBOTICS CLUB\trash_classifier_vscode\sasti-portfolio

git init
git add .
git commit -m "Portfolio ready for Netlify deployment"
```

Now go to **https://github.com/new** and:
- Name: `sasti-portfolio`
- Select **Public**
- Click **Create repository**
- Copy the URL (looks like: `https://github.com/YOUR_USERNAME/sasti-portfolio.git`)

Back in PowerShell:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sasti-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect GitHub to Netlify

1. Go to **https://app.netlify.com/**
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"GitHub"** (authorize if asked)
4. Select your `sasti-portfolio` repository
5. Netlify auto-fills settings (no changes needed)
6. Click **"Deploy site"**

**Done!** Your site is LIVE ✨

**Bonus:** Now every time you push to GitHub, Netlify automatically redeploys! 🔄

---

## ✅ TEST YOUR LIVE WEBSITE

After deployment (using either method):

1. Open your Netlify URL in browser
2. Test everything:
   - ✅ Landing animation plays
   - ✅ Landing text appears: "HI! I'M SASTI RAMANATHAN"
   - ✅ Landing fades out after 1.2 seconds
   - ✅ Your name and skills appear
   - ✅ Click each block: PROJECTS, INTERNSHIPS, EDUCATION, OTHER EVENTS
   - ✅ Images load properly
   - ✅ "Back to Menu" button works
   - ✅ Contact info visible (phone, email, LinkedIn)
   - ✅ All text is centered and aligned
   - ✅ Test on mobile (use phone or inspect with F12)

---

## 🌐 ADD CUSTOM DOMAIN (Optional)

Want your own domain like `sastiramanathan.dev`?

### Buy a Domain:
- **GoDaddy, Namecheap, Google Domains, etc.** (~$10/year)

### Connect to Netlify:
1. In Netlify → Your site → **Domain settings**
2. Click **Add custom domain**
3. Enter your domain (e.g., `sastiramanathan.dev`)
4. Follow Netlify's DNS instructions
5. Wait 24-48 hours for DNS to update
6. **Free HTTPS certificate** auto-created! 🔒

---

## 📝 UPDATE YOUR WEBSITE LATER

### If using Drag & Drop:
- Make changes to files locally
- Drag the updated `sasti-portfolio` folder to Netlify again
- Site updates in 1 minute

### If using GitHub:
```bash
cd sasti-portfolio

# Edit files locally, then:
git add .
git commit -m "Updated portfolio with new projects"
git push origin main

# Netlify auto-redeploys! ✨
```

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Site is blank | Hard refresh: **Ctrl+F5** or **Cmd+Shift+R** |
| Images not showing | Check `assets/images/` folder was uploaded |
| Layout looks wrong | Clear cache and reload |
| Site not updating | Check Netlify deploy logs in dashboard |
| Animation not playing | Open DevTools (F12) → Console to check for errors |

---

## 📊 MONITOR YOUR WEBSITE

In Netlify Dashboard:

1. **Deploys tab** - See all deployments and history
2. **Analytics tab** - View visitor stats
3. **Domain settings** - Manage custom domains
4. **Build settings** - Configure deployment rules

---

## 🎯 SHARE YOUR PORTFOLIO

Once live, share your URL:
- **LinkedIn:** Add to profile headline
- **Resume:** Include website link
- **Email:** Send to recruiters
- **GitHub:** Link in bio
- **Social Media:** Add to bio

---

## ✨ SUMMARY

**Your portfolio includes (now LIVE):**
- Landing animation
- Introduction section
- Skills section
- 4 main navigation blocks
- Project details with images
- Internship experience
- Education & certifications
- Events & conferences
- Contact information
- Mobile responsive design

---

## 🚀 START HERE:

### Option A (Easiest - 1 minute):
1. Go to https://app.netlify.com
2. Click "Add new site"
3. Drag `sasti-portfolio` folder
4. Wait 30 seconds
5. Get your live URL ✨

### Option B (Best - Auto updates):
1. Push to GitHub (see Step 1 above)
2. Go to https://app.netlify.com
3. Click "Import existing project"
4. Select GitHub repo
5. Deploy ✨
6. Every push = auto-redeploy 🔄

---

**NEXT STEP:** Choose Option A or B above and deploy NOW! 🎉**

Your portfolio is ready. Let's get it live! 🚀
