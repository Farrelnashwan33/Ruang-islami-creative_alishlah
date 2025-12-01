// Main JavaScript File for Masjid Al-Ishlah Website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            hamburger.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('rotate-45'));
        });
        
        // Close mobile menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('rotate-45'));
            });
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
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Sticky Navbar Effect
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-white');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-white');
                navbar.classList.add('bg-transparent');
            }
        });
    }
    
    // Animate elements on scroll (Simple Intersection Observer)
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Donation Button Handler (Placeholder)
function handleDonation(programName) {
    alert(`Terima kasih! Anda akan diarahkan ke halaman donasi untuk program: ${programName}`);
    // In the future, this can redirect to a payment gateway
    // window.location.href = `/donasi?program=${encodeURIComponent(programName)}`;
}
