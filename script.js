document.addEventListener('DOMContentLoaded', function () {
    const kegiatanButton = document.getElementById('kegiatan-button');
    const modal = document.getElementById('kegiatan-modal');
    const closeButton = document.querySelector('.close-button');
    const kegiatanList = document.getElementById('kegiatan-list');

    const kegiatan = [
        { judul: "Kajian Subuh", waktu: "Setiap Ahad, Ba'da Subuh", keterangan: "Hubungi Bapak Wandi (+62 852-2206-8878)" },
        { judul: "Tadabbur Al-Qur'an", waktu: "Setiap Rabu, Ba'da Maghrib", keterangan: "Di ruang utama masjid" },
        { judul: "Tahfidz", waktu: "Setiap Hari Jumat ( Ba'da Maghrib-Selesai)", keterangan: "Untuk umum" }
    ];

    kegiatanButton.addEventListener('click', () => {
        kegiatanList.innerHTML = kegiatan.map(item => `
            <div class="kegiatan-item">
                <h3>${item.judul}</h3>
                <p><strong>Waktu:</strong> ${item.waktu}</p>
                <p>${item.keterangan}</p>
            </div>
        `).join('');
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
});
