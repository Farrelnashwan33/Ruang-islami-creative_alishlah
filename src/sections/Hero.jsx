import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { stats } from '../data/dummyData';
import heroBg from '../assets/masjid_hero_cinematic.png'; // Assuming I'll move it or use the absolute path for now

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          className="w-full h-full object-cover"
          alt="Mosque Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/40 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-gold-400 uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Official Website Masjid Al Ishlah
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight font-cairo">
              Pusat <span className="text-gold-400">Dakwah</span> & <br />
              Pendidikan Modern
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50/90 mb-10 font-medium leading-relaxed">
              Menyatukan umat melalui pendidikan kreatif, kegiatan sosial, dan program keagamaan yang bermakna di Soreang Indah.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-white rounded-full font-bold text-lg shadow-xl shadow-gold-500/20 flex items-center justify-center gap-3"
              >
                Lihat Kajian <FaArrowRight />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-900 shadow-lg">
                  <FaPlay className="ml-1" />
                </div>
                Donasi Sekarang
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl premium-shadow"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-emerald-700 mb-1 font-cairo">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
