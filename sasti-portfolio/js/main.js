/* ============================================
   PROFESSIONAL ENGINEERING PORTFOLIO - Clean JS
   Single-entry point: landing, nav blocks, sections, animations
   ============================================ */

(function () {
    'use strict';

    // Small helpers
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

    // Landing screen logic
    function initLanding() {
        const landingScreen = document.getElementById('landingScreen');
        const mainPortfolio = document.getElementById('mainPortfolio');

        if (!landingScreen) {
            if (mainPortfolio) mainPortfolio.style.display = 'block';
            return;
        }

        // start fade-out after text animation (1.2s)
        setTimeout(() => landingScreen.classList.add('fade-out'), 1200);

        // On animation end, hide landing and reveal main
        landingScreen.addEventListener('animationend', (e) => {
            if (e.animationName && e.animationName.indexOf('landingFadeOut') !== -1) {
                landingScreen.style.display = 'none';
                if (mainPortfolio) mainPortfolio.style.display = 'block';
                const introSection = document.getElementById('introSection');
                const skillsSection = document.getElementById('skillsSection');
                const navBlocks = document.getElementById('navBlocksSection');
                const contactSection = document.getElementById('contactSection');
                if (introSection) introSection.style.display = 'block';
                if (skillsSection) skillsSection.style.display = 'block';
                if (navBlocks) navBlocks.style.display = 'flex';
                if (contactSection) contactSection.style.display = 'block';
            }
        });

        // Fallback: ensure reveal at 1.8s
        setTimeout(() => {
            if (landingScreen && landingScreen.style.display !== 'none') landingScreen.style.display = 'none';
            if (mainPortfolio) mainPortfolio.style.display = 'block';
            const introSection = document.getElementById('introSection');
            const skillsSection = document.getElementById('skillsSection');
            const navBlocks = document.getElementById('navBlocksSection');
            const contactSection = document.getElementById('contactSection');
            if (introSection && introSection.style.display !== 'block') introSection.style.display = 'block';
            if (skillsSection && skillsSection.style.display !== 'block') skillsSection.style.display = 'block';
            if (navBlocks && navBlocks.style.display !== 'flex') navBlocks.style.display = 'flex';
            if (contactSection && contactSection.style.display !== 'block') contactSection.style.display = 'block';
        }, 1800);
    }

    // Navigation blocks behaviour
    function initNavBlocks() {
        document.querySelectorAll('.nav-block').forEach(block => {
            block.addEventListener('click', function () {
                const sectionName = this.getAttribute('data-section');
                showSection(sectionName);
            });
        });
    }

    function showSection(sectionName) {
        if (!sectionName) return;
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Hide intro, skills, nav blocks, and contact when viewing section
        const introSection = document.getElementById('introSection');
        const skillsSection = document.getElementById('skillsSection');
        const contactSection = document.getElementById('contactSection');
        const navBlocks = document.getElementById('navBlocksSection');
        
        if (introSection) introSection.style.display = 'none';
        if (skillsSection) skillsSection.style.display = 'none';
        if (contactSection) contactSection.style.display = 'none';
        if (navBlocks) navBlocks.style.display = 'none';

        const sectionId = sectionName + 'Section';
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'flex';
            // trigger transition
            requestAnimationFrame(() => selectedSection.classList.add('active'));
            selectedSection.scrollIntoView({ behavior: 'smooth' });
        }

        addBackButton();
    }

    function goBack() {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        const introSection = document.getElementById('introSection');
        const skillsSection = document.getElementById('skillsSection');
        const navBlocks = document.getElementById('navBlocksSection');
        const contactSection = document.getElementById('contactSection');
        
        if (introSection) introSection.style.display = 'block';
        if (skillsSection) skillsSection.style.display = 'block';
        if (navBlocks) navBlocks.style.display = 'flex';
        if (contactSection) contactSection.style.display = 'block';

        const backBtn = document.querySelector('.back-button');
        if (backBtn) backBtn.remove();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function addBackButton() {
        if (document.querySelector('.back-button')) return;
        const backBtn = document.createElement('button');
        backBtn.className = 'back-button';
        backBtn.textContent = '← Back to Menu';
        backBtn.addEventListener('click', goBack);
        document.body.appendChild(backBtn);
        // style via CSS class (already has .back-button rules)
    }

    // Mobile nav (if present)
    function initMobileNav() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (!hamburger || !navMenu) return;
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Smooth anchor scroll for in-page links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || !document.querySelector(href)) return;
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            });
        });
    }

    // Intersection observer for subtle reveal
    function initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

        document.querySelectorAll('.section, .project-item, .event-item, .internship-item, .education-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(18px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }

    // Init on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        initLanding();
        initNavBlocks();
        initMobileNav();
        initSmoothScroll();
        initObserver();

        // accessibility helpers
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') goBack();
        });
    });

})();
