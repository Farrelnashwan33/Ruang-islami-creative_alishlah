// Jadwal Sholat & Kalender Hijriah Script
// Dapat digunakan di semua halaman dengan ID yang berbeda

(function() {
    'use strict';
    
    // Konfigurasi: ID Kota Bandung untuk API
    const KOTA_ID_BANGHASAN = '501'; // Bandung di API banghasan
    const KOTA_ID_MYQURAN = '1101'; // Bandung di API MyQuran
    
    // Format tanggal untuk API
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return { year, month, day };
    }
    
    // Format waktu
    function formatTime(timeString) {
        if (!timeString) return '--:--';
        return timeString;
    }
    
    // Konversi ke Kalender Hijriah menggunakan API
    async function updateHijriahCalendar(pageId = '') {
        const today = new Date();
        const date = formatDate(today);
        const suffix = pageId ? `-${pageId}` : '';
        
        try {
            // Menggunakan API untuk konversi hijriah yang lebih akurat
            const response = await fetch(`https://api.aladhan.com/v1/gToH/${date.day}-${date.month}-${date.year}`);
            
            if (response.ok) {
                const data = await response.json();
                if (data.code === 200 && data.data) {
                    const hijriah = data.data.hijri;
                    displayHijriah(hijriah, today, suffix);
                    return;
                }
            }
        } catch (error) {
            console.log('API hijriah tidak tersedia, menggunakan konversi lokal');
        }
        
        // Fallback: Konversi lokal
        const hijriah = toHijriahLocal(today);
        displayHijriah(hijriah, today, suffix);
    }
    
    // Konversi lokal (fallback)
    function toHijriahLocal(date) {
        const gregorianDate = new Date(date);
        const gregorianYear = gregorianDate.getFullYear();
        const gregorianMonth = gregorianDate.getMonth() + 1;
        const gregorianDay = gregorianDate.getDate();
        
        let jd = gregorianToJulian(gregorianYear, gregorianMonth, gregorianDay);
        let hijriah = julianToHijriah(jd);
        
        return hijriah;
    }
    
    function gregorianToJulian(year, month, day) {
        if (month <= 2) {
            year -= 1;
            month += 12;
        }
        const a = Math.floor(year / 100);
        const b = 2 - a + Math.floor(a / 4);
        return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
    }
    
    function julianToHijriah(jd) {
        jd = Math.floor(jd) + 0.5;
        const wjd = jd - 1948440 + 10632;
        const n = Math.floor((wjd - 1) / 10631);
        const wjd2 = wjd - 10631 * n + 354;
        const j = Math.floor((10985 - wjd2) / 5316);
        const wjd3 = wjd2 - 5316 * Math.floor((10985 - wjd2) / 5316) + 1;
        const m = Math.floor((10985 - wjd3) / 325) - 1;
        const wjd4 = wjd3 - 325 * Math.floor((10985 - wjd3) / 325) - 1;
        const d = wjd4;
        
        const hijriahYear = 30 * n + j - 30;
        const hijriahMonth = m;
        const hijriahDay = Math.floor(d);
        
        const monthNames = {
            '1': 'Muharram', '2': 'Safar', '3': 'Rabi\'ul Awal', '4': 'Rabi\'ul Akhir',
            '5': 'Jumadil Awal', '6': 'Jumadil Akhir', '7': 'Rajab', '8': 'Sya\'ban',
            '9': 'Ramadhan', '10': 'Syawal', '11': 'Dzulqa\'dah', '12': 'Dzulhijjah'
        };
        
        return {
            day: hijriahDay,
            month: hijriahMonth,
            year: hijriahYear,
            monthName: monthNames[String(hijriahMonth)] || 'Unknown',
            full: `${hijriahDay} ${monthNames[String(hijriahMonth)] || 'Unknown'} ${hijriahYear} H`
        };
    }
    
    // Update Kalender Masehi - Langsung tanpa API, sangat cepat
    function updateMasehiCalendar(suffix = '') {
        try {
            const today = new Date();
            const dayElement = document.getElementById(`masehi-day${suffix}`);
            const monthElement = document.getElementById(`masehi-month${suffix}`);
            const yearElement = document.getElementById(`masehi-year${suffix}`);
            const fullElement = document.getElementById(`masehi-full${suffix}`);
            const dateElement = document.getElementById(`masehi-date${suffix}`);
            
            // Jika element tidak ditemukan, coba tanpa suffix (untuk index.html)
            if (!dayElement && suffix) {
                const dayElementNoSuffix = document.getElementById('masehi-day');
                if (dayElementNoSuffix) {
                    suffix = '';
                }
            }
            
            const day = today.getDate();
            const month = today.getMonth();
            const year = today.getFullYear();
            
            const monthNames = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];
            
            const dayNames = [
                'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
            ];
            
            const dayName = dayNames[today.getDay()];
            const monthName = monthNames[month];
            
            const finalSuffix = suffix || '';
            const dayEl = document.getElementById(`masehi-day${finalSuffix}`);
            const monthEl = document.getElementById(`masehi-month${finalSuffix}`);
            const yearEl = document.getElementById(`masehi-year${finalSuffix}`);
            const fullEl = document.getElementById(`masehi-full${finalSuffix}`);
            const dateEl = document.getElementById(`masehi-date${finalSuffix}`);
            
            if (dayEl) dayEl.textContent = day;
            if (monthEl) monthEl.textContent = monthName;
            if (yearEl) yearEl.textContent = year;
            if (fullEl) {
                fullEl.textContent = `${dayName}, ${day} ${monthName} ${year}`;
            }
            if (dateEl) {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                dateEl.textContent = today.toLocaleDateString('id-ID', options);
            }
        } catch (error) {
            console.error('Error updating Masehi calendar:', error);
        }
    }
    
    // Tampilkan Kalender Hijriah
    function displayHijriah(hijriah, date, suffix = '') {
        const dayElement = document.getElementById(`hijriah-day${suffix}`);
        const monthElement = document.getElementById(`hijriah-month${suffix}`);
        const yearElement = document.getElementById(`hijriah-year${suffix}`);
        const fullElement = document.getElementById(`hijriah-full${suffix}`);
        
        // Handle jika hijriah dari API (format berbeda)
        const day = hijriah.day || hijriah.date;
        const month = hijriah.month || hijriah.month?.number;
        const year = hijriah.year || hijriah.year;
        const monthName = hijriah.monthName || hijriah.month?.en || hijriah.month?.ar;
        
        if (dayElement) dayElement.textContent = day || '--';
        if (monthElement) monthElement.textContent = monthName || '--';
        if (yearElement) yearElement.textContent = (year || '--') + ' H';
        if (fullElement) {
            fullElement.textContent = `${day || '--'} ${monthName || '--'} ${year || '--'} H`;
        }
        
        // Update tanggal Masehi
        const dateElement = document.getElementById(`hijriah-date${suffix}`);
        if (dateElement) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = date.toLocaleDateString('id-ID', options);
        }
    }
    
    // Ambil Jadwal Sholat dari API - Mencoba beberapa API
    async function fetchJadwalSholat(pageId = '') {
        const today = new Date();
        const date = formatDate(today);
        const suffix = pageId ? `-${pageId}` : '';
        
        // Coba API 1: Banghasan (Kemenag) - Paling reliable
        try {
            const dateStr = `${date.year}/${date.month}/${date.day}`;
            const response = await fetch(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${KOTA_ID_BANGHASAN}/tanggal/${dateStr}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.jadwal && data.jadwal.data) {
                    const jadwal = data.jadwal.data;
                    displayJadwalSholat({
                        imsak: jadwal.imsak || jadwal.Imsak,
                        subuh: jadwal.subuh || jadwal.Subuh,
                        dzuhur: jadwal.dzuhur || jadwal.Dzuhur,
                        ashar: jadwal.ashar || jadwal.Ashar,
                        maghrib: jadwal.maghrib || jadwal.Maghrib,
                        isya: jadwal.isya || jadwal.Isya
                    }, today, suffix);
                    return;
                }
            }
        } catch (error) {
            console.log('API Banghasan gagal, mencoba API lain...', error);
        }
        
        // Coba API 2: MyQuran
        try {
            const response = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${KOTA_ID_MYQURAN}/${date.year}/${date.month}/${date.day}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.status && data.data && data.data.jadwal) {
                    const jadwal = data.data.jadwal;
                    displayJadwalSholat(jadwal, today, suffix);
                    return;
                }
            }
        } catch (error) {
            console.log('API MyQuran gagal, mencoba API lain...', error);
        }
        
        // Coba API 3: Aladhan (fallback)
        try {
            const response = await fetch(`https://api.aladhan.com/v1/timings/${date.day}-${date.month}-${date.year}?latitude=-6.9175&longitude=107.6191&method=11`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.code === 200 && data.data && data.data.timings) {
                    const timings = data.data.timings;
                    displayJadwalSholat({
                        imsak: timings.Imsak || timings.Fajr,
                        subuh: timings.Fajr,
                        dzuhur: timings.Dhuhr,
                        ashar: timings.Asr,
                        maghrib: timings.Maghrib,
                        isya: timings.Isha
                    }, today, suffix);
                    return;
                }
            }
        } catch (error) {
            console.log('API Aladhan gagal', error);
        }
        
        // Jika semua API gagal
        displayJadwalError(suffix);
    }
    
    // Tampilkan Jadwal Sholat
    function displayJadwalSholat(jadwal, date, suffix = '') {
        const container = document.getElementById(`jadwal-sholat-container${suffix}`);
        const dateElement = document.getElementById(`jadwal-date${suffix}`);
        
        if (!container) return;
        
        // Update tanggal
        if (dateElement) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = date.toLocaleDateString('id-ID', options);
        }
        
        // Normalize waktu sholat (handle berbagai format dari API)
        const normalizeTime = (time) => {
            if (!time) return null;
            // Jika format "HH:MM" langsung return
            if (typeof time === 'string' && time.match(/^\d{1,2}:\d{2}$/)) {
                return time;
            }
            // Jika format lain, coba extract
            const match = String(time).match(/(\d{1,2}):(\d{2})/);
            return match ? `${match[1].padStart(2, '0')}:${match[2]}` : null;
        };
        
        // Daftar waktu sholat dengan normalisasi
        const sholatTimes = [
            { name: 'Imsak', time: normalizeTime(jadwal.imsak || jadwal.Imsak), icon: '🌙' },
            { name: 'Subuh', time: normalizeTime(jadwal.subuh || jadwal.Subuh || jadwal.fajr || jadwal.Fajr), icon: '🌅' },
            { name: 'Dzuhur', time: normalizeTime(jadwal.dzuhur || jadwal.Dzuhur || jadwal.dhuhr || jadwal.Dhuhr), icon: '☀️' },
            { name: 'Ashar', time: normalizeTime(jadwal.ashar || jadwal.Ashar || jadwal.asr || jadwal.Asr), icon: '🌤️' },
            { name: 'Maghrib', time: normalizeTime(jadwal.maghrib || jadwal.Maghrib), icon: '🌆' },
            { name: 'Isya', time: normalizeTime(jadwal.isya || jadwal.Isya || jadwal.isha || jadwal.Isha), icon: '🌃' }
        ];
        
        container.innerHTML = sholatTimes.map(sholat => {
            const time = sholat.time ? formatTime(sholat.time) : '--:--';
            const isNext = sholat.time ? isNextSholat(sholat.time, sholatTimes) : false;
            
            return `
                <div class="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm ${isNext ? 'ring-2 ring-primary-green ring-opacity-50 bg-green-50' : ''}">
                    <div class="flex items-center">
                        <span class="text-2xl mr-3">${sholat.icon}</span>
                        <span class="text-gray-700 font-medium">${sholat.name}</span>
                    </div>
                    <span class="text-primary-green font-bold text-lg ${isNext ? 'text-xl' : ''}">${time}</span>
                </div>
            `;
        }).join('');
    }
    
    // Cek apakah ini waktu sholat berikutnya
    function isNextSholat(sholatTime, sholatTimes) {
        if (!sholatTime) return false;
        
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const currentSholatTime = parseTime(sholatTime);
        
        // Cari waktu sholat berikutnya
        for (let i = 0; i < sholatTimes.length; i++) {
            if (sholatTimes[i].time) {
                const time = parseTime(sholatTimes[i].time);
                if (time > currentTime) {
                    return currentSholatTime === time;
                }
            }
        }
        
        // Jika sudah melewati semua, maka Isya adalah yang berikutnya (besok)
        const lastSholat = sholatTimes[sholatTimes.length - 1];
        if (lastSholat && lastSholat.time) {
            return currentSholatTime === parseTime(lastSholat.time);
        }
        
        return false;
    }
    
    function parseTime(timeString) {
        if (!timeString) return 0;
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    }
    
    // Tampilkan Error
    function displayJadwalError(suffix = '') {
        const container = document.getElementById(`jadwal-sholat-container${suffix}`);
        const dateElement = document.getElementById(`jadwal-date${suffix}`);
        
        if (dateElement) {
            const today = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = today.toLocaleDateString('id-ID', options);
        }
        
        if (container) {
            container.innerHTML = `
                <div class="flex items-center justify-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div class="text-center">
                        <p class="text-yellow-800 font-medium mb-2">⚠️ Gagal memuat jadwal sholat</p>
                        <p class="text-yellow-600 text-sm">Silakan refresh halaman atau coba lagi nanti</p>
                    </div>
                </div>
            `;
        }
    }
    
    // Export functions untuk digunakan di halaman
    window.initJadwalSholat = function(pageId = '') {
        // Format suffix dengan dash jika pageId ada
        const suffix = pageId ? `-${pageId}` : '';
        
        // Update kalender Masehi langsung (tidak perlu API, sangat cepat)
        updateMasehiCalendar(suffix);
        
        // Update kalender Hijriah dan jadwal sholat (perlu API, bisa lebih lama)
        updateHijriahCalendar(pageId);
        fetchJadwalSholat(pageId);
        
        // Update setiap jam untuk jadwal sholat
        setInterval(() => fetchJadwalSholat(pageId), 3600000); // Update setiap 1 jam
        
        // Update kalender Masehi dan Hijriah setiap hari (setelah tengah malam)
        // Cek setiap menit apakah sudah berganti hari
        setInterval(() => {
            const now = new Date();
            const lastUpdate = localStorage.getItem(`lastCalendarUpdate${suffix}`);
            const today = now.toDateString();
            
            // Jika belum pernah update hari ini, atau sudah berganti hari
            if (!lastUpdate || lastUpdate !== today) {
                updateMasehiCalendar(suffix);
                updateHijriahCalendar(pageId);
                localStorage.setItem(`lastCalendarUpdate${suffix}`, today);
            }
        }, 60000); // Cek setiap 1 menit
        
        // Update kalender Masehi setiap menit (untuk memastikan selalu akurat)
        setInterval(() => updateMasehiCalendar(suffix), 60000);
    };
    
    // Auto-initialize untuk index.html (tanpa suffix)
    if (document.getElementById('jadwal-sholat-container') && !document.getElementById('jadwal-sholat-container-gallery')) {
        document.addEventListener('DOMContentLoaded', function() {
            window.initJadwalSholat();
        });
    }
})();

