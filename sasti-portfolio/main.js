/* ============================================
   PROFESSIONAL ENGINEERING PORTFOLIO

































































































































































































































































































































































































**Maintenance Status:** Active**Last Updated:** February 2026**Portfolio Version:** 1.0---- LinkedIn: [Sasti Ramanathan A](https://www.linkedin.com/in/sasti07)- Email: sastiramanathan07@gmail.comFor portfolio updates or questions, use provided contact links:## Contact & Questions---- [ ] Monitor analytics (if available)- [ ] Share portfolio URL- [ ] Deploy to GitHub Pages- [ ] Test on mobile- [ ] Add resume PDF- [ ] Verify all links (LinkedIn, email, URLs)- [ ] Update all personal information- [ ] Replace placeholder profile image## Quick Launch Checklist---- Design: Professional engineering aesthetic- Icons: Inline SVG (free)- Typography: Poppins (Google Fonts)**Credits:**This portfolio is custom-built and free to use/modify. No external frameworks or paid libraries.## License & Attribution---```git pushgit commit -m "Update projects section"git add .```bashUse GitHub to track changes:### Version Control:- Monitor for broken links- Refresh links (LinkedIn, company websites)- Update project descriptions as needed- Keep content current (dates, achievements)### Regular Updates:## Support & Maintenance---- [ ] Search functionality- [ ] PDF resume download- [ ] Language switching- [ ] Dark/Light theme toggle- [ ] Contact form (requires backend)- [ ] Project gallery with lightbox- [ ] Blog section with markdown renderingPotential additions (without breaking vanilla approach):## Future Enhancements---- No sensitive data stored in HTML/CSS/JS- All other hosting options should use HTTPS- GitHub Pages provides HTTPS automatically### Additional Security:- CSP-friendly (Content Security Policy)- No external API dependencies- Static files only- No user input processing- No backend/database✅ **Safe Features:**## Security Considerations---4. Use Open Graph tags for social sharing3. Submit to Google Search Console2. Add `robots.txt` for crawlers1. Add `sitemap.xml` for search engines### To Further Improve:- Fast loading (no external dependencies)- Alt text ready for images- Proper heading hierarchy (H1, H2, H3, H4)- Meta descriptions- Semantic HTML5 tags✅ **Implemented:**## SEO Best Practices---- **Solution:** Works on all modern browsers; older IE may need polyfill- **Check:** Browser supports smooth scroll### Issue: Smooth scroll not working- **Solution:** Clear browser cache (Ctrl+Shift+Delete)- **Check:** CSS file loaded correctly### Issue: Styling looks broken- **Solution:** Press Escape key or click outside modal- **Check:** JavaScript enabled in browser### Issue: Modal won't close- **Solution:** Use modern browser (Chrome 60+, Firefox 55+, Safari 10.1+)- **Check:** Browser compatibility (requires ES6 support)### Issue: Animations not working## Troubleshooting---**Note:** Smooth scroll works on all modern browsers. IE11 not supported.- Mobile Chrome/Firefox/Safari- Safari 14+- Firefox 88+- Chrome/Edge 90+✅ **Tested On:**## Browser Compatibility---3. **Use modern image formats** (WebP with fallback)2. **Minify CSS/JS** for production (optional)1. **Compress images** before adding (use TinyPNG)### Further Optimization:- Lazy animations (using Intersection Observer)- Vanilla JavaScript (no framework overhead)- CSS variables (reduced file size)- Semantic HTML (better SEO)- No external dependencies (faster loading)✅ **Already Optimized:**## Performance Optimization---3. Add JavaScript functionality (if needed)2. Add CSS styling (copy existing section patterns)1. Create new `<section>` in HTML### Add New Sections- `modalSlideUp` - Project modals slide up- `slideInRight` - Hero content slides from right- `slideInUp` - Elements slide up on appearAll animations are in CSS. Key keyframes:### AnimationsAll spacing uses CSS variables (e.g., `--spacing-lg: 4rem`). Adjust in `:root` to resize spacing globally.### Spacing3. Update CSS variable: `--font-family-primary`2. Replace with preferred font from [Google Fonts](https://fonts.google.com)1. Find in `index.html`: `<link href="https://fonts.googleapis.com/..."`Default font is **Poppins** (imported from Google Fonts). To change:### Fonts```}    /* ... more variables ... */    --color-border: #0f2d47;            /* Borders */    --color-accent: #5dade2;            /* Accent (buttons, links) */    --color-text-primary: #d6e2f0;      /* Text */    --color-bg-primary: #081a2f;        /* Background */:root {```cssEdit `:root` variables in `style.css`:### Colors## Customization Guide---3. No additional setup needed (pure HTML/CSS/JS)2. Configure domain DNS to point to server1. Upload files to your web hosting via FTP/SFTP### Option 4: Self-Hosted (Own Server)---6. Custom domain available in settings5. Deploy4. Upload your portfolio folder3. Click **New Project**2. Sign up with GitHub1. Go to [vercel.com](https://vercel.com)### Option 3: Vercel (FREE)---6. Connect custom domain in **Domain settings**5. Your site is live (auto-generated URL)4. Drag and drop your portfolio folder3. Click **Add new site** → **Deploy manually**2. Sign up with GitHub1. Go to [netlify.com](https://netlify.com)### Option 2: Netlify (FREE with Custom Domain)---```https://sasti07.github.io```Example:```https://YOUR_USERNAME.github.io```Your portfolio is now live at:#### Step 5: Access Your Portfolio5. Wait 2-3 minutes for deployment4. Click **Save**   - Branch: **main** | **/ (root)**   - Source: **Deploy from a branch**3. Under "Build and deployment":2. Scroll to **Pages** section1. Go to repository **Settings**#### Step 4: Enable Pages```git push -u origin maingit branch -M main# Push to GitHubgit remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git# Add remotegit commit -m "Initial portfolio commit"# Commitgit add .# Add all filesgit init# Initialize gitcd sasti-portfolio# Navigate to portfolio folder```bash**Method B: Git Command Line**4. Click **Commit changes**3. Select all portfolio files (index.html, style.css, main.js, content.json, DEPLOYMENT.md, README.md)2. Click **Add file** → **Upload files**1. Go to your repository**Method A: Web Upload**#### Step 3: Upload Files4. Click **Create repository**3. Make it **Public**2. Name it: `username.github.io` (replace "username" with your GitHub username)1. Click **New repository**#### Step 2: Create Repository- Sign up (if not already)- Go to [github.com](https://github.com)#### Step 1: Create GitHub Account### 🚀 Option 1: GitHub Pages (Recommended - FREE)## Deployment Options```<a href="your-resume.pdf" class="icon-link" title="Resume (PDF)" target="_blank">```html#### Add Your Resume PDF- Company links: Update Axis Global, VSR, etc.- College link: Update Kamaraj College URL- Email: Update in contact section- LinkedIn: Find and update URL in hero section#### Update Links   ```   </div>       <img src="profile.jpg" alt="Sasti Ramanathan A" style="width:100%; height:100%; object-fit:cover;">   <div class="profile-image-placeholder">   ```html2. In HTML, replace placeholder:1. Place image in portfolio folder (e.g., `profile.jpg`)#### Add Profile Image- Section content: All text is in HTML- Profile image: Replace placeholder with actual image- Hero section: Name, subtitle, descriptionEdit `index.html` directly:#### Update Personal Information### Editing Content   - Right-click index.html → "Open with Live Server"   - Install "Live Server" extension   **Option D: Live Server in VS Code**   ```   npx serve   ```bash   **Option C: Node.js (npx)**   ```   python -m SimpleHTTPServer 8000   ```bash   **Option B: Python 2**   Visit: `http://localhost:8000`   ```   python -m http.server 8000   ```bash   **Option A: Python 3**   2. **Run a local server** (required for proper functionality)   ```   cd sasti-portfolio   ```bash1. **Clone or download the portfolio folder**### Local Development## Setup Instructions```└── README.md            # Project overview├── DEPLOYMENT.md        # This file├── content.json         # Content data (ready for updates)├── main.js              # Vanilla JavaScript (no dependencies)├── style.css            # All styling (no external frameworks)├── index.html           # Main HTML structure (single-page)sasti-portfolio/```## File Structure- **Accessibility** - Keyboard navigation, focus states- **Hover effects** - Depth and scale transformations- **Scroll animations** - Fade-in effects using Intersection Observer- **Smooth scrolling** - Native browser smooth scroll- **Project modals** - Click cards to view detailed narratives- **Mobile-responsive hamburger menu**### ⚙️ Interactive Elements7. **Contact** - Email & LinkedIn links6. **Professional Events** - ISRO expo, hackathons, workshops5. **Internships** - Industrial training experience4. **Conferences & Presentations** - Academic participation3. **Projects** - Interactive project cards with modal details2. **Education** - University details with links1. **Hero/Home** - Professional introduction with portrait### 📄 Sections- Fully responsive (desktop to mobile)- Smooth transitions and easing animations- Multi-layer depth illusion with soft shadows- Bluish-white professional typography (Poppins font)- Deep blue engineering-grade background (#081a2f)### 🎨 Design## Features- Responsive Design (mobile-first approach)- Vanilla JavaScript (no frameworks or dependencies)- CSS3 (modern styling with flexbox/grid)- HTML5 (semantic structure)**Technology Stack:**This is a professional, modern engineering portfolio website for Sasti Ramanathan A — a Mechatronics Engineer specializing in Robotics, Automation, and AI-integrated systems.## Overview   Vanilla JavaScript - No Dependencies
   ============================================ */

/* ============================================
   NAVIGATION & MOBILE MENU
   ============================================ */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
});



/* ============================================
   SMOOTH SCROLL NAVIGATION
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignore empty or non-existent anchors
        if (href === '#' || !document.querySelector(href)) return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop - 100; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});



/* ============================================
   PROJECT MODAL FUNCTIONALITY
   ============================================ */

function openProjectModal(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function() {
        const modal = this.closest('.modal');
        const modalId = modal.id.replace('modal-', '');
        closeProjectModal(modalId);
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            const modalId = modal.id.replace('modal-', '');
            closeProjectModal(modalId);
        });
    }
});



/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.section, .project-card, .event-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});



/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
        if (!navbar.classList.contains('scrolled')) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
        }
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});

/* ============================================
   ACTIVE NAV LINK HIGHLIGHTING
   ============================================ */

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

/* ============================================
   INTERACTIVE ELEMENTS
   ============================================ */

// Add hover effects to interactive elements
const projectBtns = document.querySelectorAll('.project-btn');
projectBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Icon link animations
const iconLinks = document.querySelectorAll('.icon-link, .contact-method');
iconLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

/* ============================================
   INITIALIZATION & PAGE LOAD
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize page
    console.log('Professional Engineering Portfolio loaded');
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'slideInRight 0.8s ease-out forwards';
    }
    
    // Add animation to profile image
    const profileImage = document.querySelector('.profile-image-wrapper');
    if (profileImage) {
        profileImage.style.animation = 'slideInUp 0.8s ease-out forwards';
        profileImage.style.animationDelay = '0.2s';
    }
});

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for optimized event handling
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ============================================
   RESPONSIVE BEHAVIOR
   ============================================ */

// Handle window resize
const handleResize = debounce(() => {
    // Adjust layout if needed
    const isMobile = window.innerWidth < 768;
    document.body.classList.toggle('mobile', isMobile);
}, 250);

window.addEventListener('resize', handleResize);

// Initial check
handleResize();

/* ============================================
   ACCESSIBILITY
   ============================================ */

// Ensure all interactive elements are keyboard accessible
document.addEventListener('keydown', (e) => {
    // Skip to main content (accessibility)
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
