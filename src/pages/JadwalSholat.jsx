import React, { useState, useEffect } from 'react';
import { Clock, Calendar as CalendarIcon, Moon, Sun, ArrowRight } from 'lucide-react';

const JadwalSholat = () => {
  const [time, setTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState({
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

  // Mock Hijri conversion (In real app, use a library like hijri-converter)
  const getHijriDate = () => {
    return { day: '15', month: 'Ramadhan', year: '1447' };
  };

  const hijri = getHijriDate();

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-20 overflow-hidden bg-slate-50 text-center">
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full md:h-[800px] bg-primary-purple/5 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-3 bg-white/50 backdrop-blur-xl border border-white rounded-2xl shadow-xl mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-purple rounded-full animate-ping"></span>
            <span className="text-[10px] sm:text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Waktu Sholat Soreang</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-deep-purple tracking-tighter leading-tight mb-6 sm:mb-8 uppercase px-2">
            Jadwal <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink">Ibadah</span>
          </h1>
          
          <div className="glass-card-premium inline-flex flex-col items-center p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white shadow-2xl mb-8 sm:mb-12">
            <div className="text-4xl sm:text-6xl md:text-8xl font-black text-deep-purple tracking-tighter mb-2 sm:mb-4 font-mono">
              {time.toLocaleTimeString('id-ID', { hour12: false })}
            </div>
            <div className="text-sm sm:text-xl font-bold text-primary-purple uppercase tracking-widest">
              {formatDate(time)}
            </div>
          </div>
        </div>
      </header>

      {/* Prayer Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {Object.entries(prayerTimes).map(([name, time], i) => (
              <div key={name} className="glass-card-premium p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-xl text-center group hover:-translate-y-2 transition-all">
                <p className="text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">{name}</p>
                <p className="text-2xl sm:text-3xl font-black text-deep-purple tracking-tighter group-hover:text-primary-purple transition-colors">{time}</p>
                <div className="mt-3 sm:mt-4 w-6 sm:w-8 h-1 bg-slate-100 mx-auto rounded-full group-hover:w-10 sm:w-12 group-hover:bg-accent-pink transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendars */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Hijriah */}
            <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 border border-white shadow-2xl relative overflow-hidden group text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-pink rounded-2xl sm:rounded-[2rem] flex items-center justify-center text-white shadow-xl rotate-6 shrink-0">
                  <Moon size={32} sm:size={40} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase tracking-tighter leading-tight">Kalender Hijriah</h3>
                  <p className="text-slate-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Sistem Kalender Islam</p>
                </div>
              </div>
              <div className="text-center bg-white/40 rounded-[2rem] sm:rounded-[3rem] py-12 sm:py-16 border border-white shadow-inner">
                <div className="text-7xl sm:text-9xl font-black text-accent-pink leading-none mb-4 sm:mb-6">{hijri.day}</div>
                <div className="text-2xl sm:text-3xl font-black text-deep-purple uppercase tracking-widest mb-2 sm:mb-4">{hijri.month}</div>
                <div className="text-lg sm:text-xl font-bold text-slate-400 tracking-[0.3em] sm:tracking-[0.5em]">{hijri.year}</div>
              </div>
            </div>

            {/* Masehi */}
            <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 border border-white shadow-2xl relative overflow-hidden group text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-purple rounded-2xl sm:rounded-[2rem] flex items-center justify-center text-white shadow-xl -rotate-6 shrink-0">
                  <Sun size={32} sm:size={40} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase tracking-tighter leading-tight">Kalender Masehi</h3>
                  <p className="text-slate-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Sistem Kalender Global</p>
                </div>
              </div>
              <div className="text-center bg-white/40 rounded-[2rem] sm:rounded-[3rem] py-12 sm:py-16 border border-white shadow-inner">
                <div className="text-7xl sm:text-9xl font-black text-primary-purple leading-none mb-4 sm:mb-6">{time.getDate()}</div>
                <div className="text-2xl sm:text-3xl font-black text-deep-purple uppercase tracking-widest mb-2 sm:mb-4">
                  {time.toLocaleDateString('id-ID', { month: 'long' })}
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-400 tracking-[0.3em] sm:tracking-[0.5em]">{time.getFullYear()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JadwalSholat;
