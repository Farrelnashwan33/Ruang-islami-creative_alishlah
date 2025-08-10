// 🚧 Website Sedang Dalam Pengembangan - COMING SOON 🚧
console.log("🚧 Website Portofolio Sedang Dalam Pengembangan - COMING SOON 🚧");

// Kalau mau juga ada alert pop-up:
alert("🚧 Website Portofolio Sedang Dalam Pengembangan - COMING SOON 🚧");

document.addEventListener('DOMContentLoaded', function() {
    // --- Data Kegiatan ---
    const kegiatan = [
        {
            judul: "Kajian Subuh",
            tanggal: "Setiap Ahad, Ba'da Subuh",
            keterangan: "Untuk informasi kajian lebih lanjut hubungi bapa wandi (+62 852-2206-8878)."
        },
        {
            judul: "Kajian Tadabbur Al-Quran",
            tanggal: "Setiap Rabu, Ba'da Isya",
            keterangan: "Bersama Ustadz Halim Abu Muhammad, Tadabbur Al-Quran "
        },
        {
            judul: " Program Jumat Berkah",
            tanggal: "Setiap Jumat, Ba'da Shalat Jumat",
            keterangan: "Untuk informasi Donasi lebih lanjut hubungi ibu oka (+6285221733602)."
        },
        {
            judul: "Tahfidz Qur'an",
            tanggal: "Setiap Jumat, Pukul Ba'da Maghrib-selesai",
            keterangan: "Bersama Ustadz Turmuzi Albatangi "
        }
    ];

    // --- Fungsionalitas Modal Info Kegiatan ---
    const modal = document.getElementById('kegiatan-modal');
    const btn = document.getElementById('kegiatan-button');
    const span = document.getElementsByClassName('close-button')[0];
    const kegiatanListDiv = document.getElementById('kegiatan-list');

    // Mengisi daftar kegiatan ke dalam modal
    let content = '';
    kegiatan.forEach(item => {
        content += `
            <div class="kegiatan-item">
                <h3>${item.judul}</h3>
                <p><strong>Kapan:</strong> ${item.tanggal}</p>
                <p>${item.keterangan}</p>
            </div>
        `;
    });
    kegiatanListDiv.innerHTML = content;

    // Saat tombol 'Info Kegiatan' diklik, tampilkan modal
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // Saat tombol 'x' diklik, sembunyikan modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Saat mengklik di luar area modal, sembunyikan juga
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
