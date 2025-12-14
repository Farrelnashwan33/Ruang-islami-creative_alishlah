// ============================================
// VISITOR COUNTER - Tracking Pengunjung Online
// ============================================

class VisitorCounter {
    constructor() {
        // Gunakan URL relatif jika di domain yang sama, atau URL lengkap untuk cross-origin
        const currentHost = window.location.hostname;
        if (currentHost.includes('vercel.app') || currentHost.includes('localhost')) {
            this.apiUrl = '/api/visitors';
        } else {
            this.apiUrl = 'https://ruang-islami-creative-alishlah.vercel.app/api/visitors';
        }
        this.sessionId = this.getOrCreateSessionId();
        this.isOnline = true;
        this.updateInterval = 30000; // Update setiap 30 detik
        this.heartbeatInterval = null;
        this.init();
    }

    getOrCreateSessionId() {
        let sessionId = localStorage.getItem('visitor-session-id');
        if (!sessionId) {
            sessionId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('visitor-session-id', sessionId);
        }
        return sessionId;
    }

    async init() {
        // Register visitor saat pertama kali
        await this.registerVisitor();
        
        // Start heartbeat untuk maintain status online
        this.startHeartbeat();
        
        // Update counter setiap beberapa detik
        this.updateCounter();
        setInterval(() => this.updateCounter(), this.updateInterval);
        
        // Handle page visibility (untuk detect tab aktif/tidak)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.isOnline = false;
            } else {
                this.isOnline = true;
                this.registerVisitor();
            }
        });
        
        // Handle beforeunload (saat user tutup tab)
        window.addEventListener('beforeunload', () => {
            this.unregisterVisitor();
        });
    }

    async registerVisitor() {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sessionId: this.sessionId,
                    action: 'register',
                    timestamp: Date.now(),
                    page: window.location.pathname,
                    userAgent: navigator.userAgent
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                this.updateDisplay(data.onlineCount || 0);
            }
        } catch (error) {
            console.log('Visitor tracking error:', error);
            // Fallback: gunakan localStorage untuk counter lokal
            this.updateLocalCounter();
        }
    }

    async unregisterVisitor() {
        try {
            // Menggunakan sendBeacon untuk memastikan request terkirim meski page ditutup
            navigator.sendBeacon(this.apiUrl, JSON.stringify({
                sessionId: this.sessionId,
                action: 'unregister',
                timestamp: Date.now()
            }));
        } catch (error) {
            console.log('Unregister error:', error);
        }
    }

    startHeartbeat() {
        // Kirim heartbeat setiap 30 detik untuk maintain status online
        this.heartbeatInterval = setInterval(() => {
            if (this.isOnline && !document.hidden) {
                this.registerVisitor();
            }
        }, this.updateInterval);
    }

    async updateCounter() {
        try {
            const response = await fetch(`${this.apiUrl}?action=getCount`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                this.updateDisplay(data.onlineCount || 0);
            }
        } catch (error) {
            console.log('Update counter error:', error);
            // Fallback: gunakan localStorage
            this.updateLocalCounter();
        }
    }

    updateDisplay(count) {
        const counterElement = document.getElementById('visitor-online-count');
        const counterElementMobile = document.getElementById('visitor-online-count-mobile');
        
        if (counterElement) {
            counterElement.textContent = count;
            
            // Add animation
            counterElement.classList.add('animate-pulse');
            setTimeout(() => {
                counterElement.classList.remove('animate-pulse');
            }, 500);
        }
        
        if (counterElementMobile) {
            counterElementMobile.textContent = count;
            
            // Add animation
            counterElementMobile.classList.add('animate-pulse');
            setTimeout(() => {
                counterElementMobile.classList.remove('animate-pulse');
            }, 500);
        }
    }

    updateLocalCounter() {
        // Fallback: simpan counter di localStorage
        let localCount = parseInt(localStorage.getItem('visitor-local-count') || '1');
        this.updateDisplay(localCount);
    }
}

// Export untuk digunakan di halaman lain jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisitorCounter;
}
}

// Initialize visitor counter when DOM is ready
let visitorCounter;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        visitorCounter = new VisitorCounter();
    });
} else {
    visitorCounter = new VisitorCounter();
}

