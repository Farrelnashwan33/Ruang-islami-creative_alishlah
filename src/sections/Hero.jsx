import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { statistics } from '../data/dummyData';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src={heroBg} 
          className="w-full h-full object-cover"
          alt="Mosque Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-white"></div>
      </div>

      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <span className="inline-block px-6 py-2 mb-8 text-[11px] font-black tracking-[0.3em] text-gold-300 uppercase bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              Official Website Masjid Al Ishlah
            </span>
            <h1 className="text-white mb-10 tracking-tight leading-[1.1] max-w-5xl mx-auto">
              Membangun <span className="text-gold-400">Peradaban</span> <br />
              Melalui Dakwah Modern
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50/80 mb-12 font-medium leading-relaxed">
              Pusat kegiatan umat yang memadukan nilai keislaman dengan inovasi digital untuk kemaslahatan masyarakat Soreang Indah.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-primary w-full sm:w-auto px-12 py-5 text-lg"
              >
                Lihat Kajian <FaArrowRight className="text-sm" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium w-full sm:w-auto px-12 py-5 text-lg bg-white/5 backdrop-blur-xl text-white border border-white/20 hover:bg-white/10"
              >
                Donasi Sekarang
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-24 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white/90 backdrop-blur-2xl p-10 md:p-12 rounded-[3.5rem] shadow-2xl premium-shadow border border-white/40"
          >
            {statistics.map((stat, i) => (
              <div key={i} className="text-center relative group">
                {i < statistics.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-12 bg-slate-200 -translate-y-1/2"></div>
                )}
                <div className="text-4xl md:text-5xl font-black text-emerald-700 mb-2 font-cairo transition-transform group-hover:scale-110 duration-300">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Ornaments */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 left-10 w-24 h-24 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/3 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
      />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-emerald-700 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
