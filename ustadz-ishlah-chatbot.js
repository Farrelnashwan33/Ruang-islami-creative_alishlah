// ============================================
// USTADZ ISHLAH - Asisten Virtual Masjid Al-Ishlah
// ============================================

class UstadzIshlahChatbot {
    constructor() {
        this.isOpen = false;
        this.hasShownWelcome = false;
        this.messages = [];
        this.soundEnabled = true; // Default enabled
        this.ttsEnabled = true; // Text-to-speech enabled
        this.synth = window.speechSynthesis;
        this.voicesLoaded = false;
        this.voices = [];
        this.audioContext = null;
        this.userInteracted = false;
        this.init();
    }

    init() {
        // Load sound preference from localStorage
        const savedSoundPref = localStorage.getItem('chatbot-sound-enabled');
        if (savedSoundPref !== null) {
            this.soundEnabled = savedSoundPref === 'true';
            this.ttsEnabled = this.soundEnabled;
        }
        
        this.createChatbotHTML();
        this.attachEventListeners();
        this.setupAutoWelcome();
        this.updateSoundIcon();
        
        // Initialize audio context on user interaction
        this.setupAudioContext();
        
        // Load voices for TTS
        this.loadVoices();
        
        // Listen for voices loaded event
        if (this.synth) {
            if (this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = () => {
                    this.loadVoices();
                };
            }
        }
        
        // Mark user interaction for mobile browsers
        document.addEventListener('click', () => {
            this.userInteracted = true;
            this.setupAudioContext();
        }, { once: true });
        
        document.addEventListener('touchstart', () => {
            this.userInteracted = true;
            this.setupAudioContext();
        }, { once: true });
    }

    setupAudioContext() {
        // Initialize audio context on user interaction (required for mobile)
        if (!this.audioContext && (window.AudioContext || window.webkitAudioContext)) {
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                // Resume audio context if suspended (mobile browsers)
                if (this.audioContext.state === 'suspended') {
                    this.audioContext.resume();
                }
            } catch (e) {
                console.log('AudioContext initialization failed:', e);
            }
        }
    }

    loadVoices() {
        if (!this.synth) return;
        
        // Get voices with retry mechanism for mobile
        const getVoices = () => {
            const voices = this.synth.getVoices();
            if (voices && voices.length > 0) {
                this.voices = voices;
                this.voicesLoaded = true;
                return true;
            }
            return false;
        };
        
        // Try to get voices immediately
        if (getVoices()) {
            return;
        }
        
        // If voices not available, wait a bit and try again (for mobile)
        setTimeout(() => {
            if (getVoices()) {
                return;
            }
            // Last retry after 1 second
            setTimeout(() => {
                getVoices();
            }, 1000);
        }, 100);
    }

    updateSoundIcon() {
        const soundOnIcon = document.getElementById('sound-on-icon');
        const soundOffIcon = document.getElementById('sound-off-icon');
        
        if (soundOnIcon && soundOffIcon) {
            if (this.soundEnabled) {
                soundOnIcon.classList.remove('hidden');
                soundOffIcon.classList.add('hidden');
            } else {
                soundOnIcon.classList.add('hidden');
                soundOffIcon.classList.remove('hidden');
            }
        }
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <!-- Chatbot Widget -->
            <div id="ustadz-ishlah-chatbot" class="fixed bottom-6 right-6 z-50">
                <!-- Chat Button -->
                <button id="chatbot-toggle" class="w-16 h-16 bg-primary-green rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-green-dark transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-green/50 overflow-hidden relative">
                    <img id="chat-icon" src="dokum/ustadz ishlah.jpg" alt="Ustadz Ishlah" class="w-full h-full object-cover rounded-full">
                    <svg id="close-icon" class="w-8 h-8 text-white hidden absolute z-10 bg-primary-green-dark rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <!-- Chat Window -->
                <div id="chatbot-window" class="hidden absolute bottom-20 right-0 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border-2 border-primary-green/20">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-primary-green to-primary-green-dark rounded-t-2xl p-4 flex items-center gap-3">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                            <img src="dokum/ustadz ishlah.jpg" alt="Ustadz Ishlah" class="w-full h-full object-cover rounded-full">
                        </div>
                        <div class="flex-1">
                            <h3 class="text-white font-bold text-lg">Ustadz Ishlah</h3>
                            <p class="text-green-100 text-xs">Asisten Virtual Masjid Al-Ishlah</p>
                        </div>
                        <!-- Sound Toggle Button -->
                        <button id="sound-toggle" onclick="chatbot.toggleSound()" class="p-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none" title="Toggle Suara">
                            <svg id="sound-on-icon" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                            </svg>
                            <svg id="sound-off-icon" class="w-5 h-5 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M7 10l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Messages Container -->
                    <div id="chatbot-messages" class="flex-1 overflow-y-auto p-4 space-y-4 bg-cream">
                        <!-- Messages will be inserted here -->
                    </div>

                    <!-- Quick Actions -->
                    <div id="quick-actions" class="px-4 pb-2 border-t border-gray-200 bg-white">
                        <div class="flex gap-2 pt-2">
                            <button onclick="chatbot.sendQuickMessage('program')" class="flex-1 px-3 py-2 bg-primary-green text-white text-sm rounded-lg hover:bg-primary-green-dark transition-colors">
                                📋 Program
                            </button>
                            <button onclick="chatbot.sendQuickMessage('rishlah')" class="flex-1 px-3 py-2 bg-accent-gold text-white text-sm rounded-lg hover:bg-accent-gold-light transition-colors">
                                🌟 Tentang Rislah
                            </button>
                        </div>
                    </div>

                    <!-- Input Area -->
                    <div class="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                        <div class="flex gap-2">
                            <input 
                                type="text" 
                                id="chatbot-input" 
                                placeholder="Tulis pesan Anda..." 
                                class="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                                onkeypress="if(event.key === 'Enter') chatbot.sendMessage()"
                            >
                            <button onclick="chatbot.sendMessage()" class="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('chatbot-toggle');
        const chatWindow = document.getElementById('chatbot-window');
        const chatIcon = document.getElementById('chat-icon');
        const closeIcon = document.getElementById('close-icon');

        toggleBtn.addEventListener('click', () => {
            this.userInteracted = true;
            this.setupAudioContext();
            this.toggleChat();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatWindow = document.getElementById('chatbot-window');
        const chatIcon = document.getElementById('chat-icon');
        const closeIcon = document.getElementById('close-icon');

        if (this.isOpen) {
            chatWindow.classList.remove('hidden');
            if (chatIcon) chatIcon.classList.add('hidden');
            if (closeIcon) closeIcon.classList.remove('hidden');
            this.playSound('open');
            
            if (!this.hasShownWelcome) {
                this.showWelcomeMessage();
                this.hasShownWelcome = true;
            }
        } else {
            chatWindow.classList.add('hidden');
            if (chatIcon) chatIcon.classList.remove('hidden');
            if (closeIcon) closeIcon.classList.add('hidden');
            this.playSound('close');
            this.stopSpeaking(); // Stop TTS jika chat ditutup
        }
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        this.ttsEnabled = this.soundEnabled;
        
        const soundOnIcon = document.getElementById('sound-on-icon');
        const soundOffIcon = document.getElementById('sound-off-icon');
        
        if (this.soundEnabled) {
            soundOnIcon.classList.remove('hidden');
            soundOffIcon.classList.add('hidden');
            this.playSound('notification');
        } else {
            soundOnIcon.classList.add('hidden');
            soundOffIcon.classList.remove('hidden');
            this.stopSpeaking();
        }
        
        // Simpan preferensi ke localStorage
        localStorage.setItem('chatbot-sound-enabled', this.soundEnabled);
    }

    playSound(type = 'notification') {
        if (!this.soundEnabled) return;
        
        // Ensure audio context is initialized
        if (!this.audioContext) {
            this.setupAudioContext();
        }
        
        if (!this.audioContext) return;
        
        try {
            // Resume audio context if suspended (mobile browsers)
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume().then(() => {
                    this.playSoundInternal(type);
                }).catch(e => {
                    console.log('AudioContext resume failed:', e);
                });
            } else {
                this.playSoundInternal(type);
            }
        } catch (e) {
            console.log('Audio not supported:', e);
        }
    }

    playSoundInternal(type = 'notification') {
        if (!this.audioContext) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Different sounds for different actions
            switch(type) {
                case 'open':
                    oscillator.frequency.value = 400;
                    oscillator.type = 'sine';
                    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.2);
                    break;
                case 'close':
                    oscillator.frequency.value = 300;
                    oscillator.type = 'sine';
                    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.15);
                    break;
                case 'send':
                    oscillator.frequency.value = 500;
                    oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
                    break;
                case 'notification':
                default:
                    oscillator.frequency.value = 600;
                    oscillator.type = 'sine';
                    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
                    oscillator.start(this.audioContext.currentTime);
                    oscillator.stop(this.audioContext.currentTime + 0.15);
                    break;
            }
        } catch (e) {
            console.log('Audio not supported:', e);
        }
    }

    speakText(text) {
        if (!this.ttsEnabled || !this.synth) return;
        
        // For mobile browsers, ensure user has interacted first
        if (!this.userInteracted) {
            // Wait for user interaction
            const checkInteraction = setInterval(() => {
                if (this.userInteracted) {
                    clearInterval(checkInteraction);
                    this.speakText(text);
                }
            }, 100);
            // Timeout after 5 seconds
            setTimeout(() => clearInterval(checkInteraction), 5000);
            return;
        }
        
        // Stop any ongoing speech
        this.stopSpeaking();
        
        // Clean text from markdown and HTML
        let cleanText = text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
            .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
            .replace(/\*([^*]+)\*/g, '$1') // Remove italic
            .replace(/<[^>]+>/g, '') // Remove HTML tags
            .replace(/🔗/g, '')
            .replace(/📋/g, '')
            .replace(/📚/g, '')
            .replace(/🤝/g, '')
            .replace(/🏗️/g, '')
            .replace(/🌙/g, '')
            .replace(/📖/g, '')
            .replace(/➕/g, '')
            .replace(/🌟/g, '')
            .replace(/🌱/g, '')
            .replace(/👥/g, '')
            .replace(/📞/g, '')
            .replace(/📷/g, '')
            .replace(/🏠/g, '')
            .replace(/\n/g, '. ') // Replace newlines with periods
            .trim();
        
        if (!cleanText) return;
        
        // Ensure voices are loaded (especially for mobile)
        if (!this.voicesLoaded || this.voices.length === 0) {
            this.loadVoices();
            // If voices still not loaded, wait a bit and retry
            if (!this.voicesLoaded || this.voices.length === 0) {
                setTimeout(() => {
                    this.speakText(text);
                }, 500);
                return;
            }
        }
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'id-ID'; // Indonesian language
        utterance.rate = 1.0; // Normal speech rate (adjusted for mobile compatibility)
        utterance.pitch = 0.7; // Much lower pitch for male voice (0.5-2.0 range, lower = more masculine)
        utterance.volume = 1.0; // Full volume
        
        // Add error handlers
        utterance.onerror = (event) => {
            console.log('TTS Error:', event.error);
        };
        
        utterance.onend = () => {
            // Speech finished
        };
        
        // Get all available voices (use cached voices)
        const voices = this.voices.length > 0 ? this.voices : this.synth.getVoices();
        
        // List of known male voice names (common across browsers)
        const maleVoiceNames = [
            'david', 'daniel', 'james', 'thomas', 'alex', 'mark', 'paul', 'george',
            'male', 'pria', 'laki', 'laki-laki', 'mas', 'pak', 'bapak',
            'google indonesian male', 'microsoft zira', 'microsoft mark',
            'google bahasa indonesia male', 'indonesian male'
        ];
        
        // List of known female voice names to avoid
        const femaleVoiceNames = [
            'zira', 'hazel', 'susan', 'linda', 'karen', 'samantha', 'victoria',
            'female', 'perempuan', 'wanita', 'ibu', 'mbak', 'kak',
            'google indonesian female', 'microsoft zira', 'google bahasa indonesia female',
            'indonesian female', 'aria', 'eva', 'ivona', 'amy', 'nicole'
        ];
        
        let selectedVoice = null;
        
        // Strategy 1: Find Indonesian male voice explicitly
        selectedVoice = voices.find(voice => {
            const name = voice.name.toLowerCase();
            const lang = voice.lang.toLowerCase();
            const isIndonesian = lang.includes('id') || lang.includes('indonesia');
            const isMale = maleVoiceNames.some(maleName => name.includes(maleName));
            const isNotFemale = !femaleVoiceNames.some(femaleName => name.includes(femaleName));
            return isIndonesian && (isMale || isNotFemale);
        });
        
        // Strategy 2: Find any male voice (prefer Indonesian but accept others)
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => {
                const name = voice.name.toLowerCase();
                const isMale = maleVoiceNames.some(maleName => name.includes(maleName));
                const isNotFemale = !femaleVoiceNames.some(femaleName => name.includes(femaleName));
                return isMale && isNotFemale;
            });
        }
        
        // Strategy 3: Find Indonesian voice that's not explicitly female
        if (!selectedVoice) {
            const indonesianVoices = voices.filter(voice => {
                const lang = voice.lang.toLowerCase();
                return lang.includes('id') || lang.includes('indonesia');
            });
            
            if (indonesianVoices.length > 0) {
                selectedVoice = indonesianVoices.find(voice => {
                    const name = voice.name.toLowerCase();
                    return !femaleVoiceNames.some(femaleName => name.includes(femaleName));
                });
                
                // If still not found, take first Indonesian voice and we'll adjust pitch
                if (!selectedVoice && indonesianVoices.length > 0) {
                    selectedVoice = indonesianVoices[0];
                }
            }
        }
        
        // Strategy 4: Find any voice that's not female (last resort)
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => {
                const name = voice.name.toLowerCase();
                return !femaleVoiceNames.some(femaleName => name.includes(femaleName));
            });
        }
        
        // Apply the selected voice
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            // If we couldn't find a clear male voice, lower the pitch even more
            if (femaleVoiceNames.some(femaleName => selectedVoice.name.toLowerCase().includes(femaleName))) {
                utterance.pitch = 0.5; // Very low pitch to make it sound more masculine
            }
        } else {
            // If no voice found, use default but with very low pitch
            utterance.pitch = 0.5;
        }
        
        this.synth.speak(utterance);
    }

    stopSpeaking() {
        if (this.synth && this.synth.speaking) {
            this.synth.cancel();
        }
    }

    setupAutoWelcome() {
        // Auto-trigger welcome message setelah 5 detik
        setTimeout(() => {
            if (!this.hasShownWelcome && !this.isOpen) {
                this.showAutoWelcome();
            }
        }, 5000);
    }

    showAutoWelcome() {
        // Play notification sound
        this.playSound('notification');
        
        // Tampilkan notifikasi bubble
        const notification = document.createElement('div');
        notification.id = 'chatbot-notification';
        notification.className = 'fixed bottom-24 right-6 bg-primary-green text-white p-4 rounded-lg shadow-2xl max-w-xs z-50';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        notification.innerHTML = `
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <p class="font-semibold mb-2">Assalamualaikum Warahmatullahi Wabarakatuh!</p>
                    <p class="text-sm mb-3">Saya Ustadz Ishlah. Website ini adalah Ruang Islami Kreatif Al-Ishlah. Saya siap memandu jama'ah. Silakan pilih menu yang ingin Anda kunjungi atau tanyakan:</p>
                    <div class="flex flex-col gap-2">
                        <button onclick="chatbot.openChatAndSend('program')" class="w-full px-3 py-1.5 bg-white text-primary-green text-xs rounded-lg hover:bg-green-50 font-semibold transition-colors text-left">
                            1. 📋 Program (Cara Donasi Zakat/Infak)
                        </button>
                        <button onclick="chatbot.openChatAndSend('rishlah')" class="w-full px-3 py-1.5 bg-white text-primary-green text-xs rounded-lg hover:bg-green-50 font-semibold transition-colors text-left">
                            2. 🌟 Tentang Rislah (Kegiatan Remaja Masjid)
                        </button>
                        <button onclick="chatbot.openChatAndSend('kontak')" class="w-full px-3 py-1.5 bg-white text-primary-green text-xs rounded-lg hover:bg-green-50 font-semibold transition-colors text-left">
                            3. 📞 Kontak Pengurus
                        </button>
                    </div>
                </div>
                <button onclick="document.getElementById('chatbot-notification').remove()" class="text-white/80 hover:text-white">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;
        document.body.appendChild(notification);
        
        // Trigger smooth fade-in animation
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        // Auto-hide setelah 10 detik
        setTimeout(() => {
            const notif = document.getElementById('chatbot-notification');
            if (notif) {
                notif.style.opacity = '0';
                notif.style.transition = 'opacity 0.3s';
                setTimeout(() => notif.remove(), 300);
            }
        }, 10000);
    }

    openChatAndSend(topic) {
        this.userInteracted = true;
        this.setupAudioContext();
        const notif = document.getElementById('chatbot-notification');
        if (notif) notif.remove();
        
        this.toggleChat();
        setTimeout(() => {
            this.sendQuickMessage(topic);
        }, 300);
    }

    showWelcomeMessage() {
        const welcomeMsg = {
            type: 'bot',
            text: "Assalamualaikum Warahmatullahi Wabarakatuh. 👋\n\nSaya Ustadz Ishlah, pemandu digital Masjid Al-Ishlah. Website ini adalah Ruang Islami Kreatif Al-Ishlah. Saya siap memandu jama'ah untuk menemukan informasi tentang Program, Rislah, Galeri, dan Kontak.\n\nSilakan tanyakan apa yang Anda butuhkan, atau klik tombol di bawah untuk akses cepat!",
            timestamp: new Date()
        };
        this.addMessage(welcomeMsg);
        
        // Speak welcome message
        setTimeout(() => {
            this.speakText(welcomeMsg.text);
        }, 500);
    }

    sendQuickMessage(topic) {
        this.userInteracted = true;
        this.setupAudioContext();
        const topics = {
            'program': 'Saya ingin tahu tentang program donasi',
            'rishlah': 'Rislah'
        };
        
        if (topics[topic]) {
            this.playSound('send');
            this.addMessage({ type: 'user', text: topics[topic], timestamp: new Date() });
            setTimeout(() => this.processMessage(topics[topic]), 500);
        }
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (message) {
            this.userInteracted = true;
            this.setupAudioContext();
            this.addMessage({ type: 'user', text: message, timestamp: new Date() });
            this.playSound('send');
            input.value = '';
            setTimeout(() => this.processMessage(message), 500);
        }
    }

    processMessage(userMessage) {
        const message = userMessage.toLowerCase();
        let response = this.getResponse(message);
        this.addMessage({ type: 'bot', text: response, timestamp: new Date() });
        
        // Speak the response
        setTimeout(() => {
            this.speakText(response);
        }, 300);
    }

    getResponse(message) {
        // Cek pertanyaan tentang program/kegiatan jamaah
        const programKeywords = ['jamaah apa', 'program apa', 'kegiatan apa', 'ada program', 'ada kegiatan', 'kegiatan jamaah', 'program jamaah', 'apa saja program', 'apa saja kegiatan'];
        const isProgramQuestion = programKeywords.some(keyword => message.includes(keyword));
        
        if (isProgramQuestion) {
            return this.getProgramListResponse();
        }
        
        // Knowledge Base Mapping
        const responses = {
            // Program & Donasi
            'program': {
                text: "Alhamdulillah, Masjid Al-Ishlah memiliki berbagai program donasi yang dapat Anda dukung:\n\n📋 **Program Utama:**\n• Bidang ZIS (Zakat, Infaq, Shodaqoh)\n• Program Sosial Keumatan\n• Pembangunan & Pemeliharaan Masjid\n• Kegiatan Bulan Ramadhan\n\n**Bagaimana Cara Berdonasi?**\nDi halaman Program, Anda akan menemukan:\n• Kategori donasi yang tersedia\n• Nomor rekening untuk transfer\n• Form untuk memilih kategori donasi\n• Informasi lengkap cara berdonasi\n\nSilakan kunjungi halaman Program untuk informasi lengkap dan cara berdonasi.",
                link: { text: "Lihat Program & Cara Donasi", url: "program.html" }
            },
            'donasi': {
                text: "Untuk berdonasi, Anda dapat mengunjungi halaman Program kami. Di sana terdapat informasi lengkap tentang:\n• Kategori donasi yang tersedia\n• Nomor rekening untuk transfer\n• Cara melakukan donasi\n\nSilakan klik link di bawah untuk mengakses halaman donasi.",
                link: { text: "Halaman Donasi", url: "program.html" }
            },
            'zakat': {
                text: "Masjid Al-Ishlah mengelola zakat melalui Bidang ZIS yang mencakup:\n• Zakat Penghasilan\n• Zakat Fitrah\n• Donatur Shodaqoh Rutin\n\nInformasi lengkap dan rekening donasi dapat Anda temukan di halaman Program.",
                link: { text: "Lihat Program ZIS", url: "program.html" }
            },
            'beras perelek': {
                text: "Program Beras Perelek adalah bagian dari Program Sosial Keumatan Masjid Al-Ishlah. Program ini membantu masyarakat yang membutuhkan.\n\nUntuk informasi detail dan cara berdonasi, silakan kunjungi halaman Program kami.",
                link: { text: "Lihat Program Sosial", url: "program.html" }
            },
            'jumat berkah': {
                text: "Jumat Berkah adalah program rutin Masjid Al-Ishlah yang dilaksanakan setiap hari Jumat. Program ini merupakan bagian dari Program Sosial Keumatan.\n\nInformasi lebih lanjut dapat Anda temukan di halaman Program.",
                link: { text: "Lihat Program", url: "program.html" }
            },
            
            // Rislah
            'rishlah': {
                text: "Rislah adalah **Remaja Islam Al-Ishlah**, organisasi remaja masjid yang aktif mengadakan berbagai kegiatan untuk remaja dan pemuda. Berikut adalah program kerja Rislah:\n\n🌟 **Program Kerja Rislah:**\n\n🌱 **1. Go Green**\nProgram peduli lingkungan yang mengajak remaja untuk menjaga dan melestarikan lingkungan sekitar melalui kegiatan penghijauan, kebersihan, dan edukasi lingkungan.\n\n📖 **2. Sirah Nabawiyah**\nProgram pembelajaran sejarah kehidupan Nabi Muhammad SAW untuk menanamkan nilai-nilai akhlak mulia dan teladan yang baik dalam kehidupan sehari-hari.\n\n🌙 **3. Cahaya Ramadhan**\nProgram khusus bulan Ramadhan yang meliputi tadarus Al-Quran, buka puasa bersama, kajian Ramadhan, dan berbagai kegiatan ibadah untuk mengisi bulan suci dengan amal kebaikan.\n\n👥 **4. Rishlah Youth Day**\nProgram rutin yang diselenggarakan setiap 2 bulan sekali, meliputi:\n• **Sharing Section** - Sesi berbagi pengalaman, motivasi, dan inspirasi antar remaja\n• **Pelatihan Keremajaan** - Pelatihan keterampilan dan pengembangan diri untuk remaja\n\nUntuk informasi lengkap tentang program kerja Rislah dan cara bergabung, silakan kunjungi halaman Rislah kami.",
                link: { text: "Lihat Program Rislah", url: "rishlah.html" }
            },
            'tahfidz': {
                text: "Program Tahfidz Al-Qur'an adalah salah satu program unggulan Masjid Al-Ishlah untuk menghafalkan Al-Qur'an.\n\nInformasi lengkap tentang program Tahfidz, jadwal, dan pendaftaran dapat Anda temukan di halaman Program.",
                link: { text: "Lihat Program Tahfidz", url: "program.html" }
            },
            'kajian': {
                text: "Masjid Al-Ishlah rutin menyelenggarakan kajian keislaman. Informasi tentang jadwal kajian dan topik pembahasan dapat Anda temukan di halaman Program.",
                link: { text: "Lihat Program Kajian", url: "program.html" }
            },
            'rislah': {
                text: "Rislah adalah **Remaja Islam Al-Ishlah**, organisasi remaja masjid yang aktif mengadakan berbagai kegiatan untuk remaja dan pemuda. Berikut adalah program kerja Rislah:\n\n🌟 **Program Kerja Rislah:**\n\n🌱 **1. Go Green**\nProgram peduli lingkungan yang mengajak remaja untuk menjaga dan melestarikan lingkungan sekitar melalui kegiatan penghijauan, kebersihan, dan edukasi lingkungan.\n\n📖 **2. Sirah Nabawiyah**\nProgram pembelajaran sejarah kehidupan Nabi Muhammad SAW untuk menanamkan nilai-nilai akhlak mulia dan teladan yang baik dalam kehidupan sehari-hari.\n\n🌙 **3. Cahaya Ramadhan**\nProgram khusus bulan Ramadhan yang meliputi tadarus Al-Quran, buka puasa bersama, kajian Ramadhan, dan berbagai kegiatan ibadah untuk mengisi bulan suci dengan amal kebaikan.\n\n👥 **4. Rishlah Youth Day**\nProgram rutin yang diselenggarakan setiap 2 bulan sekali, meliputi:\n• **Sharing Section** - Sesi berbagi pengalaman, motivasi, dan inspirasi antar remaja\n• **Pelatihan Keremajaan** - Pelatihan keterampilan dan pengembangan diri untuk remaja\n\nUntuk informasi lengkap tentang program kerja Rislah dan cara bergabung, silakan kunjungi halaman Rislah kami.",
                link: { text: "Lihat Program Rislah", url: "rishlah.html" }
            },
            'remaja': {
                text: "Untuk informasi tentang kegiatan remaja dan pemuda, silakan kunjungi halaman Rislah (Remaja Islam Masjid Al-Ishlah).",
                link: { text: "Lihat Rislah", url: "rishlah.html" }
            },
            
            // Kontak
            'kontak': {
                text: "Untuk menghubungi pengurus Masjid Al-Ishlah, Anda dapat mengunjungi halaman Kontak kami. Di sana terdapat informasi lengkap:\n• Alamat fisik masjid\n• Nomor telepon/WhatsApp\n• Email sekretariat DKM\n\nHalaman Kontak menyediakan informasi untuk pertanyaan mendalam dan komunikasi langsung dengan pengurus DKM.",
                link: { text: "Lihat Kontak Pengurus", url: "kontak.html" }
            },
            'alamat': {
                text: "Masjid Al-Ishlah berada di Soreang, Bandung, Indonesia. Untuk alamat lengkap dan informasi kontak, silakan kunjungi halaman Kontak kami.",
                link: { text: "Lihat Alamat & Kontak", url: "kontak.html" }
            },
            'telepon': {
                text: "Informasi nomor telepon dan kontak sekretariat DKM dapat Anda temukan di halaman Kontak kami.",
                link: { text: "Lihat Kontak", url: "kontak.html" }
            },
            
            // Galeri
            'galeri': {
                text: "Galeri adalah tempat dokumentasi visual seluruh kegiatan masjid. Di halaman Galeri, Anda dapat melihat foto dan video berbagai kegiatan Masjid Al-Ishlah untuk transparansi dan memori.",
                link: { text: "Lihat Galeri", url: "gallery.html" }
            },
            'beranda': {
                text: "Beranda adalah halaman utama website yang berisi sekilas pandang Masjid Al-Ishlah dan semua program unggulan. Di halaman Beranda, Anda dapat melihat ringkasan informasi tentang masjid dan akses cepat ke berbagai menu.",
                link: { text: "Kembali ke Beranda", url: "index.html" }
            },
            'foto': {
                text: "Dokumentasi kegiatan dan foto-foto Masjid Al-Ishlah dapat Anda lihat di halaman Galeri.",
                link: { text: "Lihat Galeri", url: "gallery.html" }
            },
            
            // Default
            'default': {
                text: "Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail, silakan pilih salah satu menu utama:\n\n• **Program** - Cara Donasi Zakat/Infak\n• **Rislah** - Kegiatan Remaja Masjid\n• **Galeri** - Dokumentasi Visual Kegiatan\n• **Kontak** - Hubungi Pengurus DKM\n• **Beranda** - Halaman Utama\n\nJika pertanyaan Anda di luar 4 menu utama dan Rislah, silakan hubungi langsung sekretariat DKM melalui halaman Kontak untuk pertanyaan yang lebih spesifik.",
                link: null
            }
        };

        // Cari response yang sesuai
        for (const [key, value] of Object.entries(responses)) {
            if (key !== 'default' && message.includes(key)) {
                let responseText = value.text;
                if (value.link) {
                    responseText += `\n\n🔗 [${value.link.text}](${value.link.url})`;
                }
                return responseText;
            }
        }

        // Jika tidak ditemukan, gunakan default
        return responses.default.text;
    }

    getProgramListResponse() {
        const programList = `Alhamdulillah, Masjid Al-Ishlah memiliki berbagai program dan kegiatan yang dapat diikuti jamaah. Berikut adalah daftar lengkapnya:

📋 **1. Bidang ZIS (Zakat, Infaq, dan Shodaqoh)**
   • Zakat Penghasilan
   • Zakat Fitrah
   • Donatur Shodaqoh Rutin

🤝 **2. Program Sosial Keumatan**
   • Beras Perelek
   • Beras Bersubsidi untuk jemaah
   • Beras Gratis untuk jemaah
   • Sembako bagi jemaah yang sakit
   • Konsultasi masalah rumah tangga
   • Konsultasi bagi waris (Fara'id)

🏗️ **3. Pembangunan dan Pemeliharaan Gedung Masjid**
   • Penambahan fasilitas
   • Memelihara fasilitas yang ada

🌙 **4. Kegiatan Bulan Ramadhan**
   • Berbagai kegiatan ibadah dan sosial di bulan suci Ramadhan

📖 **5. Pengajian Majelis Ta'lim Al-Ishlah (Rutin)**
   • Pengajian rutin untuk jamaah

➕ **6. Program Tambahan**
   • Konsultansi Masalah Rumah Tangga
   • Tabungan Fasilitator Qurban (untuk memfasilitasi jamaah yang hendak berqurban dengan cara menabung)
   • KPJ (Kelompok Pemulasaran Husnul Khotimah Al-Ishlah)
     - Pemulasaran Jenazah
     - Iuran Kematian
     - Santunan bagi Ahli Waris

Setelah melihat semua program di atas, jika Anda ingin berdonasi untuk mendukung program-program tersebut, silakan kunjungi halaman Informasi Donasi kami untuk mendapatkan detail rekening dan cara berdonasi.`;

        return programList + `\n\n🔗 [Lihat Informasi Donasi & Rekening](program.html)`;
    }

    addMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = `max-w-[80%] rounded-2xl p-3 ${
            message.type === 'user' 
                ? 'bg-primary-green text-white' 
                : 'bg-white text-gray-800 shadow-sm border border-gray-200'
        }`;
        
        // Format text dengan link detection
        let text = message.text;
        text = text.replace(/\n/g, '<br>');
        
        // Convert markdown links to HTML
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            return `<a href="${url}" class="underline font-semibold hover:opacity-80" target="_blank">${linkText}</a>`;
        });
        
        messageContent.innerHTML = `<p class="text-sm leading-relaxed">${text}</p>`;
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is ready
let chatbot;
document.addEventListener('DOMContentLoaded', () => {
    chatbot = new UstadzIshlahChatbot();
});

