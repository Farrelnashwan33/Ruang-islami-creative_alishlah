import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome, HiCalendar, HiHeart, HiCollection, HiChat } from 'react-icons/hi';

const MobileBottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'Jadwal', path: '/jadwal', icon: HiCalendar },
    { name: 'Donasi', path: '/donasi', icon: HiHeart, special: true },
    { name: 'Program', path: '/program', icon: HiCollection },
    { name: 'Kontak', path: '/kontak', icon: HiChat },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-[100]">
      <div className="bg-emerald-950/90 backdrop-blur-xl border border-white/10 rounded-[2rem] px-6 py-3 flex justify-between items-center shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          if (item.special) {
            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative -mt-12 bg-gold-500 text-white p-4 rounded-full shadow-xl shadow-gold-500/40 transform transition-transform active:scale-90"
              >
                <Icon size={28} />
              </Link>
            );
          }
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive(item.path) ? 'text-gold-400' : 'text-emerald-300/70'
              }`}
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="relative"
              >
                <Icon size={24} />
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full"
                  />
                )}
              </motion.div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
