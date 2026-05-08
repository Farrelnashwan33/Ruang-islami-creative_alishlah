import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/rishlah' },
    { name: 'Program', path: '/program' },
    { name: 'Jadwal', path: '/jadwal' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={logo} 
              alt="Logo Masjid Al-Ishlah" 
              className="h-12 w-12 md:h-14 md:w-14 object-contain relative z-10" 
            />
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-cairo font-black text-xl md:text-2xl tracking-tight leading-none transition-colors duration-500 ${scrolled ? 'text-emerald-900' : 'text-white'}`}>
              AL-ISHLAH
            </span>
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>
              Soreang Indah
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-5 py-2 text-sm font-bold tracking-wide transition-all duration-300 group ${
                scrolled 
                  ? isActive(link.path) ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-900'
                  : isActive(link.path) ? 'text-gold-400' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <motion.div 
                layoutId="navUnderline"
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full ${
                  isActive(link.path) 
                    ? (scrolled ? 'bg-emerald-600 w-1/2' : 'bg-gold-500 w-1/2') 
                    : 'w-0'
                } transition-all duration-300`}
              />
            </Link>
          ))}
          
          <Link
            to="/donasi"
            className={`ml-4 btn-premium ${
              scrolled 
                ? 'btn-primary text-sm' 
                : 'bg-white text-emerald-900 hover:bg-gold-500 hover:text-white text-sm shadow-xl'
            }`}
          >
            <FaHeart className="text-xs" />
            Donasi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className={`lg:hidden p-3 rounded-2xl transition-all ${
            scrolled ? 'text-emerald-900 bg-emerald-50' : 'text-white bg-white/10 backdrop-blur-md'
          }`}
          onClick={() => setIsOpen(true)}
        >
          <HiMenuAlt3 size={24} />
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[400px] z-[110] bg-white shadow-2xl flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-slate-50">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Logo" className="h-10 w-10" />
                  <div className="flex flex-col">
                    <span className="font-cairo font-black text-xl text-emerald-900">AL-ISHLAH</span>
                    <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">Mobile Menu</span>
                  </div>
                </div>
                <button 
                  className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:text-emerald-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <HiX size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-3">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={link.name}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between py-5 px-8 rounded-3xl text-lg font-bold transition-all ${
                        isActive(link.path)
                          ? 'bg-emerald-700 text-white shadow-xl shadow-emerald-700/20'
                          : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                      }`}
                    >
                      {link.name}
                      <div className={`w-2 h-2 rounded-full transition-all ${isActive(link.path) ? 'bg-gold-400' : 'bg-transparent group-hover:bg-emerald-300'}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 border-t border-slate-50">
                <Link
                  to="/donasi"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-premium btn-primary py-5 text-lg"
                >
                  <FaHeart />
                  Donasi Sekarang
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

