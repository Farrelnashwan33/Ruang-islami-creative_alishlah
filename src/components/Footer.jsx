import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* About Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="bg-white p-2 rounded-2xl">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-cairo font-black text-2xl tracking-tight leading-none text-white">AL-ISHLAH</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">Masjid Modern</span>
              </div>
            </Link>
            <p className="text-emerald-100/60 leading-relaxed font-medium">
              Menjadi pusat peradaban umat yang modern, kreatif, dan inspiratif. Melayani dengan hati untuk kemaslahatan jamaah dan masyarakat sekitar.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <FaFacebook />, link: "#", color: "hover:bg-blue-600" },
                { icon: <FaInstagram />, link: "#", color: "hover:bg-pink-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:bg-blue-400" },
                { icon: <FaYoutube />, link: "#", color: "hover:bg-red-600" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className={`w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cairo font-bold text-xl mb-8 relative inline-block">
              Navigasi Cepat
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Tentang Kami', path: '/rishlah' },
                { name: 'Program Masjid', path: '/program' },
                { name: 'Jadwal Sholat', path: '/jadwal' },
                { name: 'Galeri Kegiatan', path: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-emerald-100/60 hover:text-gold-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cairo font-bold text-xl mb-8 relative inline-block">
              Hubungi Kami
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold-500 rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-gold-400">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-emerald-100/60 text-sm leading-relaxed">
                  Komplek Soreang Indah Blok J1, Cingcin, Soreang, Kabupaten Bandung, Jawa Barat 40921
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-gold-400">
                  <FaPhoneAlt />
                </div>
                <p className="text-emerald-100/60 text-sm">
                  +62 823-8538-7709
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-gold-400">
                  <FaClock />
                </div>
                <p className="text-emerald-100/60 text-sm">
                  Buka 24 Jam untuk Ibadah
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter / Maps */}
          <div>
            <h4 className="font-cairo font-bold text-xl mb-8 relative inline-block">
              Lokasi Masjid
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold-500 rounded-full"></span>
            </h4>
            <div className="rounded-2xl overflow-hidden h-48 border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.839201019071!2d107.53726117442147!3d-7.028179068853127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ec3a19fd2d63%3A0xc728ef3ee5aadc99!2sAl%20-%20Ishlah!5e0!3m2!1sid!2sid!4v1765711925347!5m2!1sid!2sid" 
                className="w-full h-full border-0" 
                allowFullScreen="" loading="lazy" title="Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-emerald-100/40">
          <p>&copy; {currentYear} Masjid Al-Ishlah Soreang Indah. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold-400 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

