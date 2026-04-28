// ============================================
// VISITOR COUNTER - Tracking Pengunjung Online
// ============================================

class VisitorCounter {
    constructor() {
        // Gunakan URL relatif jika di domain yang sama, atau URL lengkap untuk cross-origin
        const currentHost = window.location.hostname;
        const currentProtocol = window.location.protocol;
        const isLocal = currentHost === 'localhost' || currentHost === '127.0.0.1' || currentHost === '';
        
        if (isLocal || currentHost.includes('vercel.app') || currentHost.includes('github.io')) {
            this.apiUrl = '/api/visitors';
        } else {
            // Gunakan URL lengkap untuk production
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
        // Pastikan elemen DOM sudah tersedia
        if (!document.getElementById('visitor-online-count') && !document.getElementById('visitor-online-count-mobile')) {
            // Tunggu sebentar jika elemen belum tersedia
            setTimeout(() => this.init(), 100);
            return;
        }
        
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
        
        // Handle pagehide untuk mobile browsers
        window.addEventListener('pagehide', () => {
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
            } else {
                console.log('Visitor tracking response not OK:', response.status);
                // Fallback: gunakan localStorage untuk counter lokal
                this.updateLocalCounter();
            }
        } catch (error) {
            console.log('Visitor tracking error:', error);
            // Fallback: gunakan localStorage untuk counter lokal
            this.updateLocalCounter();
        }
    }

    unregisterVisitor() {
        try {
            // Menggunakan fetch dengan keepalive untuk memastikan request terkirim meski page ditutup
            // Fallback ke sendBeacon jika fetch tidak support keepalive
            const data = JSON.stringify({
                sessionId: this.sessionId,
                action: 'unregister',
                timestamp: Date.now()
            });
            
            if (navigator.sendBeacon) {
                // sendBeacon dengan Blob untuk set Content-Type
                const blob = new Blob([data], { type: 'application/json' });
                navigator.sendBeacon(this.apiUrl, blob);
            } else {
                // Fallback ke fetch dengan keepalive
                fetch(this.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: data,
                    keepalive: true
                }).catch(() => {
                    // Ignore errors saat unregister
                });
            }
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
                },
                cache: 'no-cache'
            });
            
            if (response.ok) {
                const data = await response.json();
                this.updateDisplay(data.onlineCount || 0);
            } else {
                console.log('Update counter response not OK:', response.status);
                // Fallback: gunakan localStorage
                this.updateLocalCounter();
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

// Initialize visitor counter when DOM is ready
let visitorCounter;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        visitorCounter = new VisitorCounter();
    });
} else {
    visitorCounter = new VisitorCounter();
}

