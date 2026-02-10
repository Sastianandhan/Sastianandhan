# Professional Engineering Portfolio - Deployment & Setup Guide

## Overview
This is a professional engineering portfolio for Sasti Ramanathan A — a Mechatronics Engineer specializing in Robotics, Automation, and AI-integrated systems.

**Technology Stack:**
- HTML5 (semantic structure)
- CSS3 (modern styling with flexbox/grid)
- Vanilla JavaScript (no frameworks or dependencies)
- Responsive Design (mobile-first approach)

## ⚡ Quick Start

### Local Development

```bash
# Navigate to portfolio directory
cd sasti-portfolio

# Option 1: Python 3
python -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Live Server in VS Code
# Right-click index.html → "Open with Live Server"
```

Then visit: `http://localhost:8000` (or check terminal for exact URL)

## 🚀 Deploy to GitHub Pages (FREE)

### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up if you don't have an account

### Step 2: Create Repository
1. Click **New repository**
2. Name it: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME)
3. Make it **Public**
4. Click **Create repository**

### Step 3: Upload Files
**Option A: Web Upload**
1. Click **Add file** → **Upload files**
2. Drag and drop all portfolio files
3. Click **Commit changes**

**Option B: Git Command Line**
```bash
cd sasti-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

### Step 4: Enable Pages
1. Go to **Settings**
2. Scroll to **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** | **/ (root)**
5. Click **Save**

### Step 5: Access Your Portfolio
After 2-3 minutes, visit:
```
https://YOUR_USERNAME.github.io
```

---

## 🎨 Customization

### 1. Update Personal Information
Edit `index.html` directly:
- Hero section: Name, subtitle, description
- Education: Degree, college, dates
- All text content is directly in HTML

### 2. Add Profile Image
Place image in portfolio folder, then update:
```html
<div class="profile-image-placeholder">
    <img src="your-photo.jpg" alt="Your Name" 
         style="width:100%; height:100%; object-fit:cover;">
</div>
```

### 3. Update Links
Find and update:
- LinkedIn URL
- Email address
- Company/college websites
- Resume PDF link

### 4. Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-bg-primary: #081a2f;        /* Background */
    --color-text-primary: #d6e2f0;      /* Text */
    --color-accent: #5dade2;            /* Buttons, links */
}
```

---

## 📁 Portfolio Files

```
sasti-portfolio/
├── index.html           # Main website (single page)
├── style.css            # All styling
├── main.js              # JavaScript functionality
├── content.json         # Optional data storage
├── README.md            # Project information
└── DEPLOYMENT.md        # This file
```

---

## 🎯 Before Deploying

- [ ] Replace profile image placeholder
- [ ] Update name, title, and summary
- [ ] Verify all links work
- [ ] Check mobile view
- [ ] Test project modals
- [ ] Add resume PDF (optional)

---

## 📞 Contact

**Portfolio Owner:**
- Email: sastiramanathan07@gmail.com
- LinkedIn: [Sasti Ramanathan A](https://www.linkedin.com/in/sasti07)

---

**Version:** 1.0 | **Status:** Ready to Deploy
