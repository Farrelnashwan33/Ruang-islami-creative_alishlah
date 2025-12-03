# Email API Backend untuk Form Kontak

Backend API sederhana untuk mengirim email dari form kontak website Masjid Al-Ishlah.

## Instalasi

1. **Install Node.js** (jika belum ada)
   - Download dari https://nodejs.org/
   - Versi minimal: Node.js 14.x atau lebih baru

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   - Copy file `.env.example` menjadi `.env`
   - Edit file `.env` dan isi dengan konfigurasi email Anda:
     ```
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     TO_EMAIL_1=alislahsorin.sekre@gmail.com
     TO_EMAIL_2=rishlahorganizingofficial@gmail.com
     PORT=3000
     ```

4. **Setup Gmail App Password** (jika menggunakan Gmail)
   - Buka https://myaccount.google.com/security
   - Aktifkan "2-Step Verification" jika belum
   - Buat "App Password":
     - Klik "App passwords"
     - Pilih "Mail" dan "Other (Custom name)"
     - Masukkan nama: "Masjid Al-Ishlah API"
     - Copy password yang diberikan
   - Gunakan password ini di `EMAIL_PASS` di file `.env`

## Menjalankan Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## API Endpoints

### POST /send-email
Mengirim email dari form kontak

**Request Body:**
```json
{
  "name": "Nama Pengirim",
  "email": "email@example.com",
  "phone": "081234567890",
  "subject": "program",
  "message": "Isi pesan"
}
```

**Response Success:**
```json
{
  "success": true,
  "message": "Email berhasil dikirim",
  "messageId": "..."
}
```

**Response Error:**
```json
{
  "success": false,
  "message": "Error message"
}
```

### GET /health
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "service": "Email API - Masjid Al-Ishlah",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

## Deployment

### Menggunakan Heroku

1. Install Heroku CLI
2. Login ke Heroku:
   ```bash
   heroku login
   ```
3. Buat aplikasi:
   ```bash
   heroku create masjid-al-ishlah-email-api
   ```
4. Set environment variables:
   ```bash
   heroku config:set EMAIL_HOST=smtp.gmail.com
   heroku config:set EMAIL_PORT=587
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set TO_EMAIL_1=alislahsorin.sekre@gmail.com
   heroku config:set TO_EMAIL_2=rishlahorganizingofficial@gmail.com
   ```
5. Deploy:
   ```bash
   git push heroku main
   ```

### Menggunakan Vercel / Netlify Functions

Lihat dokumentasi masing-masing platform untuk deployment serverless functions.

## Troubleshooting

### Email tidak terkirim
- Pastikan `EMAIL_PASS` menggunakan App Password (bukan password biasa)
- Cek apakah 2-Step Verification sudah diaktifkan
- Pastikan email provider mengizinkan aplikasi pihak ketiga

### Error: Invalid login
- Pastikan username dan password benar
- Untuk Gmail, gunakan App Password bukan password biasa
- Pastikan "Less secure app access" diaktifkan (jika masih tersedia)

### CORS Error
- Pastikan backend sudah dikonfigurasi untuk mengizinkan origin website Anda
- Check CORS configuration di `send-email.js`

## Keamanan

- Jangan commit file `.env` ke repository
- Gunakan environment variables untuk sensitive data
- Pastikan API endpoint dilindungi (misal dengan rate limiting)
- Pertimbangkan untuk menambahkan authentication token

## Support

Untuk bantuan, hubungi:
- Email: alislahsorin.sekre@gmail.com

