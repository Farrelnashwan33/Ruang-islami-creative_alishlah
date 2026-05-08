import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaMoon, FaSun, FaMapMarkerAlt } from 'react-icons/fa';

const JadwalSholat = () => {
  const [time, setTime] = useState(new Date());
  const [prayerTimes] = useState({
    Subuh: '04:42',
    Terbit: '05:58',
    Dzuhur: '11:58',
    Ashar: '15:18',
    Maghrib: '17:58',
    Isya: '19:08'
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getHijriDate = () => {
    return { day: '15', month: 'Ramadhan', year: '1447' };
  };

  const hijri = getHijriDate();

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-20 overflow-hidden bg-emerald-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-emerald-800 opacity-95"></div>
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-xl mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-ping"></span>
              <span className="text-xs font-black text-emerald-100 uppercase tracking-[0.3em]">Waktu Sholat Soreang</span>
            </div>
            <h1 className="font-cairo font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight mb-12 uppercase">
              Jadwal <span className="text-gold-400">Ibadah</span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-2xl inline-flex flex-col items-center p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl mb-12">
              <div className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 font-cairo">
                {time.toLocaleTimeString('id-ID', { hour12: false })}
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gold-400 uppercase tracking-widest">
                {formatDate(time)}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Prayer Grid */}
      <section className="py-16 sm:py-24 bg-white relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(prayerTimes).map(([name, prayerTime], idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl premium-shadow text-center group hover:-translate-y-2 transition-all"
              >
                <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-4">{name}</p>
                <p className="text-3xl font-black text-emerald-900 font-cairo group-hover:text-emerald-700 transition-colors">{prayerTime}</p>
                <div className="mt-4 w-8 h-1 bg-emerald-50 mx-auto rounded-full group-hover:w-12 group-hover:bg-gold-500 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendars */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        {/* Islamic Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full fill-emerald-900" viewBox="0 0 100 100">
            <pattern id="pattern-islamic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 L20 10 L10 20 L0 10 Z" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-islamic)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Hijriah */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              className="bg-emerald-900 rounded-[4rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-gold-500 rounded-[2rem] flex items-center justify-center text-white shadow-xl rotate-6 group-hover:rotate-12 transition-transform shrink-0">
                  <FaMoon className="text-4xl" />
                </div>
                <div>
                  <h3 className="font-cairo font-black text-3xl text-white uppercase tracking-tight leading-tight">Kalender Hijriah</h3>
                  <p className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Sistem Kalender Islam</p>
                </div>
              </div>
              <div className="text-center bg-white/5 rounded-[3rem] py-16 border border-white/10 shadow-inner">
                <div className="text-8xl md:text-9xl font-black text-gold-400 leading-none mb-6 font-cairo">{hijri.day}</div>
                <div className="text-3xl font-black text-white uppercase tracking-widest mb-4 font-cairo">{hijri.month}</div>
                <div className="text-xl font-bold text-emerald-300/60 tracking-[0.5em]">{hijri.year}</div>
              </div>
            </motion.div>

            {/* Masehi */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-10 md:p-16 text-slate-900 shadow-2xl border border-slate-100 relative overflow-hidden group"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-emerald-700 rounded-[2rem] flex items-center justify-center text-white shadow-xl -rotate-6 group-hover:-rotate-12 transition-transform shrink-0">
                  <FaSun className="text-4xl" />
                </div>
                <div>
                  <h3 className="font-cairo font-black text-3xl text-emerald-900 uppercase tracking-tight leading-tight">Kalender Masehi</h3>
                  <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Sistem Kalender Global</p>
                </div>
              </div>
              <div className="text-center bg-slate-50 rounded-[3rem] py-16 border border-slate-100 shadow-inner">
                <div className="text-8xl md:text-9xl font-black text-emerald-700 leading-none mb-6 font-cairo">{time.getDate()}</div>
                <div className="text-3xl font-black text-emerald-900 uppercase tracking-widest mb-4 font-cairo">
                  {time.toLocaleDateString('id-ID', { month: 'long' })}
                </div>
                <div className="text-xl font-bold text-slate-400 tracking-[0.5em]">{time.getFullYear()}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JadwalSholat;

