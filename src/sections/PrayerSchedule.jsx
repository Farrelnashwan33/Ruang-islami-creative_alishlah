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
    { name: "Fajr", time: "04:38", active: false },
    { name: "Sunrise", time: "05:54", active: false },
    { name: "Dhuhr", time: "11:54", active: true },
    { name: "Asr", time: "15:15", active: false },
    { name: "Maghrib", time: "17:51", active: false },
    { name: "Isha", time: "19:03", active: false },
  ];

  return (
    <section className="section-padding bg-emerald-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[60px] border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Time & Location */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-gold-400 font-bold text-sm mb-6 border border-white/10">
              <FaMapMarkerAlt /> Soreang, Bandung
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-cairo">
              Jadwal <span className="text-gold-400">Sholat</span>
            </h2>
            <p className="text-emerald-100/70 text-lg mb-8">
              Waktu sholat otomatis diperbarui berdasarkan lokasi Anda saat ini di Indonesia.
            </p>
            
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 inline-block">
              <div className="flex items-center gap-4 text-white mb-2">
                <FaClock className="text-gold-400 text-3xl" />
                <span className="text-4xl font-black font-cairo">
                  {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                </span>
              </div>
              <div className="flex items-center gap-4 text-emerald-200">
                <FaCalendarAlt />
                <span className="font-medium">
                  {currentTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Schedule Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {schedule.map((sholat, idx) => (
              <motion.div
                key={sholat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-6 rounded-[2rem] border transition-all duration-500 overflow-hidden group ${
                  sholat.active 
                    ? 'bg-gold-500 border-gold-400 shadow-2xl shadow-gold-500/40' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {sholat.active && (
                  <div className="absolute top-0 right-0 p-2 bg-white/20 rounded-bl-xl text-[10px] font-bold text-white uppercase tracking-tighter">
                    Sedang Berlangsung
                  </div>
                )}
                <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${sholat.active ? 'text-white/80' : 'text-emerald-300'}`}>
                  {sholat.name}
                </h4>
                <div className={`text-3xl font-black font-cairo ${sholat.active ? 'text-white' : 'text-white/90'}`}>
                  {sholat.time}
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 opacity-10 rotate-45 group-hover:rotate-90 transition-transform">
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
