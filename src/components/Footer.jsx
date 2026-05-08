import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-white pt-24 pb-32 lg:pb-12 relative overflow-hidden">
      {/* Background Decor - Islamic Pattern Style */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* About Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="bg-white p-2 rounded-2xl shadow-xl shadow-black/20">
                <img src={logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-cairo font-black text-2xl tracking-tight leading-none text-white">AL-ISHLAH</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400">Soreang Indah</span>
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
                  className={`w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cairo font-bold text-xl mb-10 relative flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500"></span>
              Navigasi
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Tentang Kami', path: '/rishlah' },
                { name: 'Program Masjid', path: '/program' },
                { name: 'Jadwal Sholat', path: '/jadwal' },
                { name: 'Galeri Kegiatan', path: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-emerald-100/60 hover:text-gold-400 transition-all flex items-center group">
                    <span className="w-0 h-0.5 bg-gold-500 mr-0 group-hover:w-4 group-hover:mr-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cairo font-bold text-xl mb-10 relative flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500"></span>
              Hubungi
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 text-gold-400 shadow-inner">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Lokasi</span>
                  <p className="text-emerald-100/60 text-sm leading-relaxed">
                    Komplek Soreang Indah Blok J1, Cingcin, Soreang, Kabupaten Bandung, Jawa Barat 40921
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 text-gold-400">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Telepon</span>
                  <p className="text-emerald-100/60 text-sm font-bold">
                    +62 823-8538-7709
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Donation CTA */}
          <div>
            <h4 className="font-cairo font-bold text-xl mb-10 relative flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500"></span>
              Donasi
            </h4>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] space-y-4">
              <p className="text-sm text-emerald-100/60 leading-relaxed">
                Mari berkontribusi dalam pembangunan peradaban umat melalui Masjid Al-Ishlah.
              </p>
              <Link to="/donasi" className="btn-premium btn-primary w-full py-4 text-sm">
                <FaHeart className="animate-pulse" />
                Donasi Sekarang
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-emerald-100/30 uppercase tracking-[0.2em]">
          <p>&copy; {currentYear} Masjid Al-Ishlah Soreang Indah. Developed with Devotion.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold-400 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

