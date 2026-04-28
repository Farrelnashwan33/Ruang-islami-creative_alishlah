// Main JavaScript File for Masjid Al-Ishlah Website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = id('main-navbar');
    
    function id(name) { return document.getElementById(name); }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Add a slight delay for animation if needed
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('animate-fade-in-up');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
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
