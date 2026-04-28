/**
 * Jadwal Sholat & Kalender JS for Masjid Al-Ishlah
 * API Source: api.myquran.com (Kemenag Data)
 */

document.addEventListener('DOMContentLoaded', () => {
    const KOTA_ID = '1201'; // Kabupaten Bandung
    const prayerTimesGrid = document.getElementById('prayer-times-grid');
    const realTimeClock = document.getElementById('real-time-clock');
    const currentDateMasehi = document.getElementById('current-date-masehi');
    const masehiDay = document.getElementById('masehi-day');
    const masehiMonth = document.getElementById('masehi-month');
    const masehiYear = document.getElementById('masehi-year');
    const hijriDay = document.getElementById('hijri-day');
    const hijriMonth = document.getElementById('hijri-month');
    const hijriYear = document.getElementById('hijri-year');

    // Update Clock
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        realTimeClock.textContent = `${h}:${m}:${s}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Fetch Prayer Times
    async function fetchPrayerTimes() {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');

        try {
            const response = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${KOTA_ID}/${y}/${m}/${d}`);
            const data = await response.json();

            if (data.status) {
                const jadwal = data.data.jadwal;
                displayPrayerTimes(jadwal);
                updateMasehiCalendar(jadwal.tanggal);
            } else {
                prayerTimesGrid.innerHTML = '<p class="col-span-full text-center text-red-500 font-bold">Gagal memuat jadwal sholat.</p>';
            }
        } catch (error) {
            console.error('Error fetching prayer times:', error);
            prayerTimesGrid.innerHTML = '<p class="col-span-full text-center text-red-500 font-bold">Terjadi kesalahan koneksi.</p>';
        }
    }

    function displayPrayerTimes(jadwal) {
        const times = [
            { name: 'Imsak', time: jadwal.imsak, icon: '🌙' },
            { name: 'Subuh', time: jadwal.subuh, icon: '🌅' },
            { name: 'Dzuhur', time: jadwal.dzuhur, icon: '☀️' },
            { name: 'Ashar', time: jadwal.ashar, icon: '🌤️' },
            { name: 'Maghrib', time: jadwal.maghrib, icon: '🌆' },
            { name: 'Isya', time: jadwal.isya, icon: '🌑' }
        ];

        prayerTimesGrid.innerHTML = '';
        times.forEach(item => {
            const card = document.createElement('div');
            card.className = 'glass-card-premium rounded-[2.5rem] p-8 border border-white shadow-xl flex flex-col items-center justify-center group hover:-translate-y-2 transition-all duration-500';
            card.innerHTML = `
                <div class="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">${item.icon}</div>
                <h4 class="font-bold text-slate-400 uppercase tracking-widest text-xs mb-2">${item.name}</h4>
                <div class="text-3xl font-black text-deep-purple tracking-tight">${item.time}</div>
            `;
            prayerTimesGrid.appendChild(card);
        });
    }

    function updateMasehiCalendar(tanggal) {
        // Format: "Selasa, 28/04/2026"
        const parts = tanggal.split(', ');
        const dateParts = parts[1].split('/');
        
        currentDateMasehi.textContent = tanggal;
        masehiDay.textContent = dateParts[0];
        
        const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        masehiMonth.textContent = monthNames[parseInt(dateParts[1]) - 1];
        masehiYear.textContent = dateParts[2];
    }

    // Hijri Calendar using Aladhan API (More reliable for Hijri)
    async function fetchHijriDate() {
        try {
            const now = new Date();
            const d = String(now.getDate()).padStart(2, '0');
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const y = now.getFullYear();

            const response = await fetch(`https://api.aladhan.com/v1/gToH/${d}-${m}-${y}`);
            const data = await response.json();

            if (data.code === 200) {
                const hijri = data.data.hijri;
                hijriDay.textContent = hijri.day;
                
                const hijriMonthsIndo = {
                    'Al-Muharram': 'Muharram',
                    'Safar': 'Safar',
                    'Rabi\' al-awwal': 'Rabiul Awal',
                    'Rabi\' ath-thani': 'Rabiul Akhir',
                    'Jumada al-ula': 'Jumadil Awal',
                    'Jumada al-akhirah': 'Jumadil Akhir',
                    'Rajab': 'Rajab',
                    'Sha\'ban': 'Sya\'ban',
                    'Ramadan': 'Ramadhan',
                    'Shawwal': 'Syawal',
                    'Dhu al-Qi\'dah': 'Dzulqa\'dah',
                    'Dhu al-Hijjah': 'Dzulhijjah'
                };
                
                hijriMonth.textContent = hijriMonthsIndo[hijri.month.en] || hijri.month.en;
                hijriYear.textContent = hijri.year + ' H';
            }
        } catch (error) {
            console.error('Error fetching Hijri date:', error);
        }
    }

    fetchPrayerTimes();
    fetchHijriDate();
});
