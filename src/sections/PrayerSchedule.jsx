import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const PrayerSchedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    { name: "Subuh", time: "04:38", active: false },
    { name: "Terbit", time: "05:54", active: false },
    { name: "Dzuhur", time: "11:54", active: true },
    { name: "Ashar", time: "15:15", active: false },
    { name: "Maghrib", time: "17:51", active: false },
    { name: "Isya", time: "19:03", active: false },
  ];

  return (
    <section className="section-padding bg-emerald-950 relative overflow-hidden">
      {/* Background Decor - Large Subtle Dome Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-square bg-emerald-700/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          {/* Left Side: Time & Location */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-gold-500"></span>
              <span className="text-gold-400 font-black text-xs uppercase tracking-[0.3em]">Waktu Ibadah</span>
            </div>
            <h2 className="text-white mb-8 font-cairo">
              Jadwal <span className="text-gold-400">Sholat</span> & Ibadah
            </h2>
            <p className="text-emerald-100/60 text-lg mb-12 leading-relaxed font-medium">
              Waktu sholat untuk wilayah Soreang dan sekitarnya. Mari jaga sholat di awal waktu untuk keberkahan hidup.
            </p>
            
            <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex items-center gap-8 mb-8">
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl shadow-gold-500/30">
                  <FaClock />
                </div>
                <div>
                  <span className="text-4xl md:text-5xl font-black font-cairo text-white tracking-tighter">
                    {currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <span className="text-xl font-bold text-gold-400 ml-2">: {currentTime.getSeconds().toString().padStart(2, '0')}</span>
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-3 text-emerald-100/80 font-bold uppercase tracking-widest text-[10px]">
                  <FaCalendarAlt className="text-gold-400" />
                  <span>{currentTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100/80 font-bold uppercase tracking-widest text-[10px]">
                  <FaMapMarkerAlt className="text-gold-400" />
                  <span>Soreang Indah, Kabupaten Bandung</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Schedule Grid */}
          <div className="w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {schedule.map((sholat, idx) => (
              <motion.div
                key={sholat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden group flex flex-col items-center text-center ${
                  sholat.active 
                    ? 'bg-gold-500 border-gold-400 shadow-2xl shadow-gold-500/40 transform scale-105 z-20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {sholat.active && (
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"
                  />
                )}
                <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${sholat.active ? 'text-white' : 'text-emerald-300'}`}>
                  {sholat.name}
                </h4>
                <div className={`text-3xl md:text-4xl font-black font-cairo ${sholat.active ? 'text-white' : 'text-white/90'}`}>
                  {sholat.time}
                </div>
                
                <div className={`mt-4 w-8 h-1 rounded-full transition-all ${sholat.active ? 'bg-white' : 'bg-white/10 group-hover:bg-emerald-500/40'}`}></div>

                {/* Islamic SVG Pattern Decor */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 opacity-5 rotate-12 group-hover:rotate-45 transition-transform pointer-events-none">
                  <svg viewBox="0 0 100 100" className="fill-white">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerSchedule;
