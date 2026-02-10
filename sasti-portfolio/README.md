# Sasti Ramanathan A — Mechatronics Engineer Portfolio

Professional portfolio website showcasing robotics, automation, and AI-integrated engineering projects.

Built with **pure HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no dependencies.

## 🎯 Professional Profile

**Name:** Sasti Ramanathan A  
**Degree:** B.E. Mechatronics Engineering (2023–2027)  
**Institution:** Kamaraj College of Engineering and Technology, Virudhunagar  
**CGPA:** 75.6%  
**Specialization:** Robotics | Automation | AI Vision Systems

---

## ✨ Key Features

✅ **Professional Design**
- Engineering-grade deep blue background
- Bluish-white professional typography (Poppins font)
- Multi-layer depth illusion with soft shadows
- Smooth transitions and easing animations

✅ **Responsive & Mobile-First**
- Desktop, tablet, and mobile optimized
- Touch-friendly interactive elements
- Hamburger menu for mobile navigation

✅ **Interactive Elements**
- Project modals with detailed narratives
- Smooth scroll navigation
- Scroll animations (Intersection Observer)
- Hover effects and transitions

✅ **Zero Dependencies**
- Vanilla JavaScript (no frameworks)
- Pure CSS (no Bootstrap/Tailwind)
- Semantic HTML5
- Fast loading and minimal footprint

✅ **Accessibility**
- Keyboard navigation support
- Focus states for all interactive elements
- Semantic HTML structure
- ARIA labels ready

---

## � File Structure

```
sasti-portfolio/
├── index.html           # Main HTML (single-page application)
├── style.css            # All styling (no external frameworks)
├── main.js              # Vanilla JavaScript (no dependencies)
├── content.json         # Portfolio content data
├── README.md            # Project overview
└── DEPLOYMENT.md        # Deployment & setup guide
```

---

## 🚀 Quick Start

### Local Development

1. **Open in VS Code**
   ```bash
   cd sasti-portfolio
   ```

2. **Run with Live Server** (recommended)
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - Visit: `http://localhost:5500`

3. **Or use Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Visit: `http://localhost:8000`

### Deploy to GitHub Pages (FREE)

See **DEPLOYMENT.md** for detailed instructions:
1. Create GitHub account
2. Create repository: `username.github.io`
3. Upload portfolio files
4. Enable GitHub Pages
5. Live at: `https://username.github.io`

---

## 🎨 Customization

### Update Content
- Edit directly in `index.html`
- No build process required
- Changes reflect immediately

### Styling
Edit `:root` CSS variables in `style.css`:
```css
:root {
    --color-bg-primary: #081a2f;        /* Background */
    --color-text-primary: #d6e2f0;      /* Text */
    --color-accent: #5dade2;            /* Buttons, links */
    --font-family-primary: 'Poppins'    /* Font */
    /* ... more variables ... */
}
```

### Add Profile Image
```html
<div class="profile-image-wrapper">
    <img src="profile.jpg" alt="Your Name" 
         style="width:100%; height:100%; object-fit:cover;">
</div>
```

### Update Links
- LinkedIn URL in hero section
- Email address in contact section
- College/company URLs throughout

---

## 🌐 Deployment Options

**GitHub Pages** (Recommended - FREE, HTTPS)
- Perfect for portfolios
- Custom domain support
- Automatic HTTPS

**Netlify** (FREE - Drag & Drop)
- Easiest deployment
- Built-in CDN
- Custom domain available

**Vercel** (FREE - GitHub Integration)
- Fast deployment
- Analytics included
- Custom domain support

**Traditional Hosting**
- Upload via FTP/SFTP
- No special configuration needed
- Works on any web server

See **DEPLOYMENT.md** for step-by-step instructions.

---

## 🎓 Portfolio Sections

### 1. Home/Hero
Professional introduction with:
- Full name and title
- Professional summary
- Profile image placeholder
- LinkedIn & Email links

### 2. Education
University details:
- Degree and specialization
- Institution with clickable link
- CGPA and dates

### 3. Projects (Interactive)
Three featured projects with:
- Project cards with previews
- Click to open detailed modals
- Technologies used
- Project status and role

### 4. Conferences & Presentations
Academic participation:
- IIT Madras international conference
- Technical presentations
- Links to institutions

### 5. Internships
Industrial experience:
- Company details with links
- Work description and skills
- Duration and location

### 6. Professional Events
Key achievements:
- ISRO Space Expo 2024
- Hackathon participation
- Community involvement

### 7. Contact
Easy connection:
- Email link
- LinkedIn profile
- Resume PDF (optional)

---

## ♿ Accessibility Features

✅ **Semantic HTML**
- Proper heading hierarchy
- Nav elements structured correctly
- Section landmarks

✅ **Keyboard Navigation**
- Tab through all interactive elements
- Escape to close modals
- Enter to activate buttons

✅ **Visual Support**
- High contrast ratios
- Focus indicators
- Readable font sizes

✅ **Screen Reader Ready**
- ARIA labels available
- Semantic markup
- Alt text structure

---

## 📊 Browser Compatibility

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

📝 **Note:** IE11 not supported (legacy browser)

---

## ⚡ Performance

**Page Load:**
- No external dependencies
- Single-page application
- Minimal CSS (~20KB)
- Minimal JavaScript (~10KB)
- Fast animations (Intersection Observer)

**SEO Optimized:**
- Semantic HTML5
- Meta descriptions
- Proper heading structure
- Fast loading times

---

## 🔒 Security

✅ **Built-in Security:**
- Static site (no server vulnerabilities)
- No backend (no database risks)
- No external API calls (minimal attack surface)
- HTTPS on GitHub Pages

---

## 📝 Content Management

All content is directly in HTML. To update:

1. Open `index.html`
2. Find the section you want to edit
3. Update text content
4. Save and refresh browser

No build process required!

---

## 🎯 Next Steps

1. **Clone/Download** the portfolio folder
2. **Customize** with your information
3. **Add profile image** (replace placeholder)
4. **Test locally** with Live Server
5. **Deploy to GitHub Pages** (or your preferred host)
6. **Share** your portfolio URL

---

## 📞 Support & Resources

**Deployment Help:**
- See `DEPLOYMENT.md` for detailed instructions
- GitHub Pages: [github.com/pages](https://pages.github.com/)
- Netlify: [netlify.com](https://netlify.com)
- Vercel: [vercel.com](https://vercel.com)

**Customization:**
- Google Fonts: [fonts.google.com](https://fonts.google.com)
- Color Picker: [coolors.co](https://coolors.co)
- Image Compression: [tinypng.com](https://tinypng.com)

---

## 📄 License

This portfolio template is free to use and modify. Built with vanilla technologies.

---

**Status:** ✅ Live & Ready  
**Version:** 1.0  
**Last Updated:** February 2026  
**Framework-free:** Pure HTML/CSS/JavaScript


To modify the 3D background in `main.js`:

- **Opacity**: Adjust the `opacity` value in `createDepthPlanes()`
- **Color**: Change `0x5dade2` (cyan-blue) in material color property
- **Wireframe**: Change `wireframe: true/false` in material properties
- **Animation Speed**: Modify the multiplier in the `animate()` function
- **Plane Count**: Add or remove plane objects in the `planes` array

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Notes

- The Three.js scene renders at 60 FPS on most modern devices
- Wireframe depth planes are GPU-accelerated
- GSAP animations use requestAnimationFrame for smooth performance
- Scroll events are throttled via ScrollTrigger

## Dependencies

All dependencies are loaded via CDN (no npm installation required):

- **Three.js** (r128): 3D graphics
- **GSAP 3.12.2**: Animation library
- **ScrollTrigger Plugin**: Scroll-based animations

## License

Created for Sasti Ramanathan A. All rights reserved.

## Support

For issues or questions, contact: sastiramanathan07@gmail.com
