# 🎯 DEPLOY TO NETLIFY - Quick Start (3 Steps)

## ⚡ Fastest Way: Drag & Drop (30 seconds, no code)

### Step 1: Open Netlify
- Go to: **https://app.netlify.com**
- Click **"Sign up"** (or login if you have account)
- Sign up with **Email, GitHub, or Google** (free account)

### Step 2: Drag Your Folder
- Open this folder: `sasti-portfolio`
- **Drag the entire folder** onto the Netlify deploy window
- (You'll see a drop zone that says "Drag files to upload")

### Step 3: Wait & Share
- Netlify builds your site (wait 30 seconds)
- ✨ You get a live URL: `https://[random-name].netlify.app/`
- **DONE!** Your portfolio is LIVE! 🎉

**Optional:** Customize the site name:
1. Click "Site settings"
2. Click "Change site name"
3. Pick a custom name: `https://[your-name].netlify.app/`

---

## 🔗 Best Way: GitHub + Netlify (Automatic Updates)

### Step 1: Create GitHub Account
- Go to: **https://github.com/signup**
- Sign up with email
- Verify email

### Step 2: Create Repository
- Click **"New"** (top left)
- Name: `sasti-portfolio`
- Select **Public**
- Click **Create repository**
- Copy the repository URL (looks like: `https://github.com/YOUR_USERNAME/sasti-portfolio.git`)

### Step 3: Upload Files to GitHub
Using **Command Prompt / PowerShell**:

```bash
cd C:\Users\Sasti Anandhan . A\OneDrive - Kamaraj College of Engineering and Technology\Documents\ROBOTICS CLUB\trash_classifier_vscode\sasti-portfolio

git init
git add .
git commit -m "My professional portfolio ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/sasti-portfolio.git
git branch -M main
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your GitHub username)*

### Step 4: Connect GitHub to Netlify
1. Go to: **https://app.netlify.com**
2. Click **"New site from Git"**
3. Click **"GitHub"** (authorize if asked)
4. Select your `sasti-portfolio` repository
5. Netlify auto-fills settings (no changes needed)
6. Click **"Deploy site"**
7. ✨ Your site is LIVE in 1 minute!

**Now the magic happens:**
- Every time you push to GitHub, Netlify automatically redeploys!
- No manual deployment needed 🚀

---

## ✅ Your Portfolio on Netlify Includes:

```
✅ Landing Screen Animation
   "HI! I'M SASTI RAMANATHAN" (fades in smoothly)

✅ Introduction Section  
   Your name + subtitle + professional info

✅ Skills Section
   All your skills in colorful centered badges

✅ Navigation Blocks (4 main sections)
   - PROJECTS (with images)
   - INTERNSHIPS (company details)
   - EDUCATION (degree + certifications)
   - OTHER EVENTS (conferences, hackathons)

✅ Contact Information
   Phone, Email, LinkedIn (in single line)

✅ Mobile Responsive
   Works perfectly on phone, tablet, desktop

✅ Professional Design
   Centered layout, smooth animations, polished look
```

---

## 🌐 Domain Names (Optional)

Want a custom domain like `sastiramanathan.dev`?

1. Buy from: **GoDaddy, Namecheap, Google Domains**, etc. (~$10/year)
2. In Netlify → Domain settings → Add custom domain
3. Update DNS (Netlify provides instructions)
4. **Free HTTPS certificate** automatically! 🔒

---

## 📱 Test Your Live Site

After deployment:
1. Copy your live URL from Netlify
2. Paste in browser
3. Test these things:
   - ✅ Landing animation plays
   - ✅ Click nav blocks (Projects, Internships, Education, Events)
   - ✅ Images load properly
   - ✅ Click "Back to Menu" to go back
   - ✅ Contact links work (phone, email, LinkedIn)
   - ✅ Try on phone (looks good mobile? ✓)
   - ✅ Press Escape key (should go back)

---

## 🎉 You're Done!

Your professional portfolio is now:
- ✅ Live on the internet
- ✅ Accessible 24/7
- ✅ Searchable by Google
- ✅ Shareable via URL
- ✅ Updated automatically (if using GitHub)

**Share your URL:**
- Put it in your resume
- Email to recruiters
- Share on LinkedIn
- Add to social media bio

---

## 💡 Pro Tips

**Update your portfolio:**
```bash
# Edit files in sasti-portfolio folder
# Then push to GitHub:
git add .
git commit -m "Updated portfolio with new project"
git push origin main
# Netlify auto-redeploys! ✨
```

**View deployment logs:**
- Netlify dashboard → Deploys tab
- See build history and any errors

**Set up custom domain:**
- Netlify dashboard → Domain settings
- Add your custom domain
- Update DNS records to point to Netlify
- Wait 24-48 hours for DNS to update

---

## 🆘 Having Issues?

**Can't find deploy button?**
- Clear browser cache (Ctrl+F5)
- Try another browser

**Site looks different than local?**
- Hard refresh (Ctrl+F5)
- Check file paths are correct

**Images not showing?**
- Check `assets/images/` folder has images
- Verify file paths in HTML

**Git command errors?**
- Make sure Git is installed: `git --version`
- Use correct repository URL from GitHub

---

## 📞 Support

- **Netlify Docs:** https://docs.netlify.com/
- **Netlify Help:** https://app.netlify.com/support/
- **GitHub Help:** https://docs.github.com/

---

**🚀 Ready? Start with Step 1 above!**

Which method are you using?
- **Drag & Drop** (easiest) → Go to Step 1
- **GitHub + Netlify** (best) → Go to Step 1
