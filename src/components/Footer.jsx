import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-deep-purple text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-purple/5 -skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/5 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* About Section */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-4 mb-8 group">
              <img src={logo} alt="Logo Masjid Al-Ishlah" className="h-16 w-16 p-2 bg-white rounded-2xl" />
              <span className="font-heading font-black text-2xl tracking-tighter uppercase">AL-ISHLAH</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              Membangun peradaban umat melalui pendidikan berkualitas dan dakwah yang mencerahkan bagi seluruh lapisan masyarakat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-primary-purple rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Facebook size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-accent-pink rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Instagram size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Twitter size={20} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-8 relative inline-block">
              Navigasi Cepat
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-purple rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['Beranda', 'Program', 'Galeri', 'Kontak', 'Rislah'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Beranda' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors flex items-center font-medium group">
                    <span className="w-2 h-2 bg-primary-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-8 relative inline-block">
              Program Utama
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent-pink rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['Zakat & Infaq', 'Sosial Keumatan', 'Pendidikan Formal', 'Dakwah Digital'].map((item) => (
                <li key={item}>
                  <Link to="/program" className="text-slate-400 hover:text-white transition-colors font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-8 relative inline-block">
              Alamat Kami
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-purple rounded-full"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-slate-400">
                <MapPin size={20} className="text-primary-purple shrink-0" />
                <span className="font-medium text-sm">Masjid Al-Ishlah</span>
              </div>
              <div className="flex items-start space-x-4 text-slate-400">
                <MapPin size={20} className="text-primary-purple mt-1 shrink-0" />
                <span className="font-medium text-sm">Komplek Soreang Indah Blok J1, Cingcin, Soreang, Kabupaten Bandung, Jawa Barat 40921</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-400">
                <Clock size={20} className="text-primary-purple shrink-0" />
                <span className="font-medium text-sm">Senin - Minggu: 24 Jam</span>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-slate-500 text-sm">"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold">
            &copy; 2025 Masjid Al-Ishlah. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-8 text-sm font-bold">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
