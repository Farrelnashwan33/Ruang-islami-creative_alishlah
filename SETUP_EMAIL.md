# Panduan Setup Email untuk Form Kontak

Form kontak di `kontak.html` telah dikonfigurasi untuk mengirim email ke:
- alislahsorin.sekre@gmail.com
- rishlahorganizingofficial@gmail.com

## Opsi 1: Menggunakan EmailJS (Recommended - Paling Mudah)

### Langkah-langkah Setup:

1. **Daftar di EmailJS**
   - Kunjungi https://www.emailjs.com/
   - Buat akun gratis (gratis hingga 200 email/bulan)

2. **Setup Email Service**
   - Masuk ke Dashboard → Email Services
   - Klik "Add New Service"
   - Pilih Gmail (atau email provider lainnya)
   - Ikuti instruksi untuk menghubungkan akun email Anda
   - Catat **Service ID** yang diberikan

3. **Buat Email Template**
   - Masuk ke Email Templates → Create New Template
   - Buat template pertama untuk `alislahsorin.sekre@gmail.com`:
     - **To Email**: `alislahsorin.sekre@gmail.com`
     - **Subject**: `Pesan Kontak Website - {{subject}}`
     - **Content** (gunakan template di bawah)
   - Buat template kedua untuk `rishlahorganizingofficial@gmail.com`:
     - **To Email**: `rishlahorganizingofficial@gmail.com`
     - **Subject**: `Pesan Kontak Website - {{subject}}`
     - **Content** (gunakan template di bawah)
   - Catat **Template ID** masing-masing template

4. **Template Email yang Disarankan:**
```
Nama Pengirim: {{from_name}}
Email: {{from_email}}
Telepon: {{phone}}

Subjek: {{subject}}

Pesan:
{{message}}

---
Pesan ini dikirim dari form kontak website Masjid Al-Ishlah
Reply-To: {{reply_to}}
```

5. **Update Konfigurasi di kontak.html**
   - Buka file `kontak.html`
   - Cari bagian `EMAILJS_CONFIG` (sekitar baris 390)
   - Ganti nilai-nilai berikut:
     ```javascript
     const EMAILJS_CONFIG = {
         PUBLIC_KEY: "YOUR_PUBLIC_KEY", // Dapatkan dari Account → General → Public Key
         SERVICE_ID: "YOUR_SERVICE_ID", // Service ID dari Email Services
         TEMPLATE_ID_1: "YOUR_TEMPLATE_ID_1", // Template ID untuk email pertama
         TEMPLATE_ID_2: "YOUR_TEMPLATE_ID_2"  // Template ID untuk email kedua
     };
     ```

6. **Test Form Kontak**
   - Buka `kontak.html` di browser
   - Isi form dan kirim pesan test
   - Cek email Anda untuk memastikan email terkirim

---

## Opsi 2: Menggunakan Backend API Sendiri

Jika Anda lebih suka menggunakan backend API sendiri, gunakan file `api/send-email.js` yang telah disediakan.

### Langkah-langkah:

1. **Setup Backend Server**
   - Install Node.js dan npm
   - Install dependencies:
     ```bash
     npm install express nodemailer cors dotenv
     ```

2. **Setup Environment Variables**
   - Buat file `.env` di folder `api/`:
     ```
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     TO_EMAIL_1=alislahsorin.sekre@gmail.com
     TO_EMAIL_2=rishlahorganizingofficial@gmail.com
     PORT=3000
     ```

3. **Jalankan Server**
   ```bash
     cd api
     node send-email.js
   ```

4. **Update kontak.html**
   - Uncomment bagian backend API di `kontak.html`
   - Ganti `YOUR_API_ENDPOINT` dengan URL backend Anda (contoh: `http://localhost:3000/send-email`)

---

## Catatan Penting

- EmailJS adalah solusi paling mudah karena tidak memerlukan backend server
- Untuk Gmail, Anda perlu menggunakan "App Password" (bukan password biasa)
- Pastikan kedua email tujuan sudah dikonfigurasi dengan benar
- Test form setelah setup untuk memastikan email terkirim dengan baik

---

## Troubleshooting

### Email tidak terkirim?
1. Pastikan semua konfigurasi (Public Key, Service ID, Template ID) sudah benar
2. Cek console browser (F12) untuk melihat error
3. Pastikan email service di EmailJS sudah terhubung dengan benar
4. Cek spam folder di email tujuan

### Template tidak ditemukan?
- Pastikan Template ID sudah benar
- Pastikan template sudah diaktifkan (Published) di EmailJS

---

Untuk bantuan lebih lanjut, kunjungi:
- Dokumentasi EmailJS: https://www.emailjs.com/docs/
- Email Support: alislahsorin.sekre@gmail.com

