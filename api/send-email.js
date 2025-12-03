// Backend API untuk mengirim email dari form kontak
// Menggunakan Node.js + Express + Nodemailer

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
    },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Error configuring email transporter:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Subject mapping
const subjectMap = {
    'program': 'Program & Kegiatan',
    'donasi': 'Donasi',
    'pendidikan': 'Pendidikan',
    'umum': 'Pertanyaan Umum',
    'lainnya': 'Lainnya'
};

// Send email endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Mohon lengkapi semua field yang wajib diisi.'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Format email tidak valid.'
            });
        }

        const subjectText = subjectMap[subject] || subject;
        const phoneText = phone || 'Tidak diisi';

        // Email template
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #1a6b4a; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                    .info-row { margin: 10px 0; }
                    .label { font-weight: bold; color: #1a6b4a; }
                    .message-box { background-color: white; padding: 15px; border-left: 4px solid #1a6b4a; margin: 15px 0; }
                    .footer { text-align: center; padding: 10px; color: #666; font-size: 12px; margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>Pesan Baru dari Form Kontak</h2>
                        <p>Masjid Al-Ishlah</p>
                    </div>
                    <div class="content">
                        <div class="info-row">
                            <span class="label">Nama:</span> ${name}
                        </div>
                        <div class="info-row">
                            <span class="label">Email:</span> ${email}
                        </div>
                        <div class="info-row">
                            <span class="label">Telepon:</span> ${phoneText}
                        </div>
                        <div class="info-row">
                            <span class="label">Subjek:</span> ${subjectText}
                        </div>
                        <div class="message-box">
                            <strong>Pesan:</strong><br>
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <div class="footer">
                        <p>Pesan ini dikirim dari form kontak website Masjid Al-Ishlah</p>
                        <p>Anda dapat membalas email ini langsung ke: ${email}</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const textContent = `
Pesan Baru dari Form Kontak - Masjid Al-Ishlah

Nama: ${name}
Email: ${email}
Telepon: ${phoneText}
Subjek: ${subjectText}

Pesan:
${message}

---
Pesan ini dikirim dari form kontak website Masjid Al-Ishlah
Anda dapat membalas email ini langsung ke: ${email}
        `;

        // Email options
        const mailOptions = {
            from: `"Masjid Al-Ishlah Website" <${process.env.EMAIL_USER}>`,
            to: [
                process.env.TO_EMAIL_1 || 'alislahsorin.sekre@gmail.com',
                process.env.TO_EMAIL_2 || 'rishlahorganizingofficial@gmail.com'
            ],
            replyTo: email,
            subject: `Pesan Kontak Website - ${subjectText}`,
            text: textContent,
            html: htmlContent,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent successfully:', info.messageId);

        res.json({
            success: true,
            message: 'Email berhasil dikirim',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi nanti.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        service: 'Email API - Masjid Al-Ishlah',
        timestamp: new Date().toISOString()
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Email API server is running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`Send email endpoint: http://localhost:${PORT}/send-email`);
});

module.exports = app;

