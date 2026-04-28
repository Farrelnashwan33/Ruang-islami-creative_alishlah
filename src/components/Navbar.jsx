import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Program', path: '/program' },
    { name: 'Jadwal', path: '/jadwal' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/kontak' },
    { name: 'Rislah', path: '/rishlah' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="glass-card-premium rounded-[2.5rem] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-purple/20 blur-lg rounded-full group-hover:bg-primary-purple/40 transition-all"></div>
            <img src={logo} alt="Logo Masjid Al-Ishlah" className="h-16 w-16 md:h-20 md:w-20 object-contain relative z-10 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl md:text-3xl text-deep-purple tracking-tighter leading-none">AL-ISHLAH</span>
            <span className="text-xs font-black text-primary-purple tracking-[0.3em] uppercase">Masjid Jami</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-6 py-2 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary-purple/10 text-primary-purple'
                  : 'text-slate-600 hover:text-primary-purple hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-6 bg-slate-200 mx-4"></div>
          <Link
            to="/program#donasi"
            className="px-8 py-3 bg-gradient-to-r from-primary-purple to-accent-pink text-white rounded-2xl text-sm font-black shadow-lg shadow-primary-purple/25 hover:shadow-primary-purple/40 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider flex items-center gap-2"
          >
            <Heart size={16} />
            Donasi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-deep-purple" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 mx-auto max-w-[90%] glass-card-premium rounded-[2.5rem] p-8 border border-white/20 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-black transition-all ${
                  isActive(link.path)
                    ? 'text-primary-purple bg-primary-purple/10 py-4 rounded-2xl'
                    : 'text-slate-700 hover:text-primary-purple py-3'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <Link
              to="/program#donasi"
              onClick={() => setIsOpen(false)}
              className="px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-pink text-white rounded-3xl font-black uppercase tracking-widest text-sm shadow-lg shadow-primary-purple/25"
            >
              Donasi Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
