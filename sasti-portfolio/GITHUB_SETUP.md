# 🚀 PUSH TO GITHUB & DEPLOY WITH NETLIFY

## 📋 COMPLETE STEP-BY-STEP GUIDE

---

## STEP 1: CREATE GITHUB ACCOUNT (If You Don't Have One)

1. Go to: **https://github.com/signup**
2. Enter your **email**
3. Create **password**
4. Choose username (e.g., `sasti07`)
5. Click **Create account**
6. Verify your email
7. ✅ You now have a GitHub account!

---

## STEP 2: CREATE GITHUB REPOSITORY

1. Go to: **https://github.com/new**
2. **Repository name:** `sasti-portfolio`
3. **Description:** (optional) "Professional Engineering Portfolio"
4. Select: **Public** (so Netlify can see it)
5. **DON'T** check "Add README" (we already have one)
6. Click **Create repository**
7. ✅ You now have an empty GitHub repo!

---

## STEP 3: PUSH YOUR PORTFOLIO TO GITHUB

### Open PowerShell Terminal:

Press **Windows Key + X** → Select **PowerShell (Admin)**

### Or go to your folder:

```bash
cd "C:\Users\Sasti Anandhan . A\OneDrive - Kamaraj College of Engineering and Technology\Documents\ROBOTICS CLUB\trash_classifier_vscode\sasti-portfolio"
```

### Initialize Git:

```bash
git init
```

*(This creates a `.git` folder - don't delete it!)*

### Add All Files:

```bash
git add .
```

*(This stages all your portfolio files)*

### Create First Commit:

```bash
git commit -m "Initial portfolio commit - ready for deployment"
```

### Connect to Your GitHub Repository:

Go back to your GitHub repo page you just created. It shows a URL like:
```
https://github.com/YOUR_USERNAME/sasti-portfolio.git
```

**Copy that URL** and replace `YOUR_USERNAME` in this command:

```bash
git remote add origin https://github.com/YOUR_USERNAME/sasti-portfolio.git
```

### Set Main Branch:

```bash
git branch -M main
```

### Push to GitHub:

```bash
git push -u origin main
```

*(First time it might ask for your GitHub credentials - enter them)*

✅ **Your portfolio is now on GitHub!** 

Verify: Go to **https://github.com/YOUR_USERNAME/sasti-portfolio** in browser - you should see all your files!

---

## STEP 4: DEPLOY FROM GITHUB TO NETLIFY

### In Netlify Dashboard:

1. Go to: **https://app.netlify.com**
2. Login to your Netlify account
3. Click **"Add new site"** button
4. Select **"Import an existing project"**
5. Click **"GitHub"** 
   - It may ask to authorize (click Yes)
6. **Select your repository:** `sasti-portfolio`
7. Configure build settings:
   - **Base directory:** (leave blank)
   - **Build command:** (leave blank)
   - **Publish directory:** `.` (current folder)
8. Click **"Deploy site"**
9. ⏳ Wait 1-2 minutes...
10. ✨ **Your site is LIVE!** 🎉

---

## STEP 5: GET YOUR LIVE URL

In Netlify Dashboard:

1. Find your site
2. You'll see a URL like: `https://[random-name].netlify.app`
3. **Copy this URL** and paste in browser to test
4. ✅ Your portfolio is now LIVE!

---

## STEP 6: CUSTOMIZE SITE NAME (Optional)

1. Click **"Site settings"**
2. Scroll to **"Site name"** section
3. Click **"Change site name"**
4. Enter your name: `sasti-portfolio` or `sasti-ramanathan`
5. Click **Verify**
6. Your new URL: `https://sasti-portfolio.netlify.app`

---

## ✅ TEST YOUR LIVE WEBSITE

Open your Netlify URL and test:

- ✅ Landing animation (text fades in)
- ✅ Introduction section visible
- ✅ Skills displayed
- ✅ Click PROJECTS block
- ✅ Click INTERNSHIPS block
- ✅ Click EDUCATION block
- ✅ Click OTHER EVENTS block
- ✅ Back button works
- ✅ Contact info visible
- ✅ Images load
- ✅ Mobile responsive

---

## 🔄 UPDATE YOUR WEBSITE

Now the magic part! Every time you update your portfolio:

### Make Changes Locally:
- Edit files in your `sasti-portfolio` folder
- Test locally if needed

### Push to GitHub:

```bash
cd sasti-portfolio

git add .
git commit -m "Updated portfolio with new project"
git push origin main
```

### Netlify Automatically Redeploys! ✨

- Netlify detects the push
- Automatically rebuilds your site
- Your live URL updates in 1 minute
- **No manual deployment needed!**

---

## 📝 COMMON GIT COMMANDS

```bash
# Check status of your files
git status

# See commit history
git log

# See all branches
git branch -a

# Make a change and push
git add .
git commit -m "Your message here"
git push origin main

# Pull latest changes (if working on multiple computers)
git pull origin main
```

---

## 🛑 IF GIT ISN'T INSTALLED

1. Go to: **https://git-scm.com/download/win**
2. Download the installer
3. Run it and follow prompts
4. Restart PowerShell
5. Verify: Type `git --version`

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| `git command not found` | Install Git from https://git-scm.com |
| `fatal: not a git repository` | Make sure you're in `sasti-portfolio` folder when running commands |
| `Permission denied` | Check GitHub credentials, may need to create Personal Access Token |
| Files not pushing | Run `git status` to see what's wrong |
| Netlify not updating | Check Netlify deploy logs in dashboard |

---

## 📊 GITHUB FEATURES TO USE

### Branches:
```bash
# Create new branch for experimental changes
git checkout -b new-feature

# Switch back to main
git checkout main
```

### Pull Requests:
- Make changes in a branch
- Create Pull Request on GitHub
- Review changes
- Merge to main

---

## 🎯 YOUR WORKFLOW NOW

```
1. Edit portfolio files locally
        ↓
2. git add . (stage all changes)
        ↓
3. git commit -m "message" (save changes)
        ↓
4. git push origin main (push to GitHub)
        ↓
5. Netlify auto-redeploys ✨
        ↓
6. Your live website updates!
```

---

## ✨ BENEFITS OF GITHUB + NETLIFY

✅ **Version Control** - Track all changes  
✅ **Auto Deploy** - Push = Live update  
✅ **Backup** - Your code is safe on GitHub  
✅ **Collaboration** - Can work with others  
✅ **History** - See all commits  
✅ **Rollback** - Go back to previous version if needed  
✅ **Portfolio** - GitHub shows your work to recruiters  

---

## 🚀 QUICK SUMMARY

```
1. Create GitHub account
2. Create repository: sasti-portfolio
3. Initialize git in your folder
4. Push all files to GitHub
5. Connect GitHub to Netlify
6. Your site is LIVE!
7. Every push = Auto update! ✨
```

---

## 📞 NEXT STEPS

Have you completed these steps yet?

- [ ] Created GitHub account?
- [ ] Created repository?
- [ ] Run git commands to push?
- [ ] Connected to Netlify?
- [ ] Deployed successfully?

Let me know which step you're on and I can help! 🚀
