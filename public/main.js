// Main JavaScript File for Masjid Al-Ishlah Website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = id('main-navbar');
    
    function id(name) { return document.getElementById(name); }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.display = 'block';
                console.log('Mobile menu shown');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
                console.log('Mobile menu hidden');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.display = 'none';
            }
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = id('dark-mode-toggle');
    const darkModeToggleMobile = id('dark-mode-toggle-mobile');
    const html = document.documentElement;

    function toggleDarkMode() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        console.log('Dark mode:', isDark);
    }

    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
    if (darkModeToggleMobile) darkModeToggleMobile.addEventListener('click', toggleDarkMode);

    // Load saved dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        html.classList.add('dark');
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('main-navbar');
        if (window.scrollY > 50) {
            nav.querySelector('.glass-card-premium').classList.add('py-2');
            nav.querySelector('.glass-card-premium').classList.remove('py-4');
            nav.classList.add('backdrop-blur-xl');
        } else {
            nav.querySelector('.glass-card-premium').classList.add('py-4');
            nav.querySelector('.glass-card-premium').classList.remove('py-2');
            nav.classList.remove('backdrop-blur-xl');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Donation Info Logic (Used in program.html)
function toggleDonationInfo(id) {
    const info = document.getElementById(id);
    if (info) {
        info.classList.toggle('hidden');
        info.classList.toggle('animate-fade-in');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Nomor rekening berhasil disalin!');
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}
