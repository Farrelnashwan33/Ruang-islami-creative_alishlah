// Main JavaScript File for Masjid Al-Ishlah Website

// Dark Mode Toggle Functionality - Initialize immediately to prevent flash
(function() {
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    // Apply theme immediately
    if (isDark) {
        html.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark');
    } else {
        html.removeAttribute('data-theme');
        document.body.classList.remove('dark');
    }
})();

// Dark Mode Toggle Functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
    const html = document.documentElement;
    
    // Apply theme
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const isDarkMode = currentTheme === 'dark';
        applyTheme(!isDarkMode);
    }
    
    // Add event listeners
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches);
        }
    });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode first
    initDarkMode();
    
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    let isMenuOpen = false;
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Open menu
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('mobile-menu-enter');
                hamburger.classList.add('hamburger-active');
                hamburger.setAttribute('aria-expanded', 'true');
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = 'hidden';
            } else {
                // Close menu
                mobileMenu.classList.remove('mobile-menu-enter');
                mobileMenu.classList.add('mobile-menu-exit');
                hamburger.classList.remove('hamburger-active');
                hamburger.setAttribute('aria-expanded', 'false');
                
                // Allow body scroll when menu is closed
                document.body.style.overflow = '';
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('mobile-menu-exit');
                }, 300);
            }
        });
        
        // Close mobile menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (isMenuOpen) {
                    isMenuOpen = false;
                    mobileMenu.classList.remove('mobile-menu-enter');
                    mobileMenu.classList.add('mobile-menu-exit');
                    hamburger.classList.remove('hamburger-active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                    
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('mobile-menu-exit');
                    }, 300);
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (isMenuOpen && 
                !mobileMenu.contains(event.target) && 
                !hamburger.contains(event.target)) {
                isMenuOpen = false;
                mobileMenu.classList.remove('mobile-menu-enter');
                mobileMenu.classList.add('mobile-menu-exit');
                hamburger.classList.remove('hamburger-active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('mobile-menu-exit');
                }, 300);
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Enhanced Sticky Navbar Effect with smooth transition
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        const navLinks = navbar.querySelectorAll('.nav-link');
        
        function updateNavbar(scrollY) {
            if (scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
                navbar.classList.remove('bg-transparent');
                
                // Update text colors for better contrast on scrolled navbar
                navLinks.forEach(link => {
                    if (link.href.includes('index.html')) {
                        link.classList.remove('text-white');
                        link.classList.add('text-primary-green');
                        link.classList.remove('hover:bg-white/10');
                        link.classList.add('hover:bg-green-50');
                    } else {
                        link.classList.remove('text-white');
                        link.classList.add('text-gray-700');
                        link.classList.remove('hover:bg-white/10', 'hover:text-white');
                        link.classList.add('hover:bg-green-50', 'hover:text-primary-green');
                    }
                });
            } else {
                navbar.classList.remove('navbar-scrolled');
                navbar.classList.add('bg-transparent');
                
                // Reset text colors for transparent navbar
                navLinks.forEach(link => {
                    if (link.href.includes('index.html')) {
                        link.classList.remove('text-white');
                        link.classList.add('text-primary-green');
                        link.classList.remove('hover:bg-white/10');
                        link.classList.add('hover:bg-green-50');
                    } else {
                        link.classList.remove('text-gray-700', 'hover:bg-green-50', 'hover:text-primary-green');
                        link.classList.add('text-white', 'hover:bg-white/10', 'hover:text-white');
                    }
                });
            }
        }
        
        // Initial check
        updateNavbar(window.pageYOffset || document.documentElement.scrollTop);
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            updateNavbar(currentScroll);
        }, { passive: true });
    }
    
    // Animate elements on scroll (Enhanced Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, article, .hover-lift').forEach(element => {
        observer.observe(element);
    });
    
    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Donation Button Handler (Placeholder)
function handleDonation(programName) {
    // Smooth redirect to donation page
    window.location.href = `program.html#${encodeURIComponent(programName.toLowerCase().replace(/\s+/g, '-'))}`;
}
