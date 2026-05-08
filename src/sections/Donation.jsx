import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaWallet, FaChartLine } from 'react-icons/fa';

const Donation = () => {
  const currentDonation = 75000000;
  const targetDonation = 100000000;
  const percentage = (currentDonation / targetDonation) * 100;

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="donasi">
      <div className="container-custom">
        <div className="bg-emerald-950 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Background Decor - Islamic Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="donation-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" />
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#donation-pattern)" />
            </svg>
          </div>
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-px bg-gold-500"></span>
                  <span className="text-gold-400 font-black text-xs uppercase tracking-[0.3em]">Program Infaq & Shodaqoh</span>
                </div>
                <h2 className="text-white mb-8 font-cairo">
                  Mari Investasi <span className="text-gold-400">Akhirat</span> <br />
                  Melalui Masjid Kita
                </h2>
                <p className="text-emerald-100/60 text-lg mb-12 leading-relaxed font-medium">
                  Setiap rupiah yang Anda infaqkan akan menjadi saksi kebaikan di akhirat kelak. Mari dukung program renovasi dan operasional dakwah Masjid Al-Ishlah.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 shadow-inner">
                    <div className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2">Terkumpul</div>
                    <div className="text-3xl font-black text-white font-cairo">Rp {currentDonation.toLocaleString('id-ID')}</div>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 shadow-inner">
                    <div className="text-gold-400 text-[10px] font-black uppercase tracking-widest mb-2">Target Dana</div>
                    <div className="text-3xl font-black text-white font-cairo">Rp {targetDonation.toLocaleString('id-ID')}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <button className="btn-premium btn-primary w-full sm:w-auto px-12 py-5 text-lg">
                    <FaWallet className="text-gold-400" />
                    Infaq Sekarang
                  </button>
                  <div className="flex -space-x-3 items-center">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-emerald-900 shadow-xl" alt="donator" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-[10px] font-black text-white border-2 border-emerald-900">+2k</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-3xl p-10 md:p-14 rounded-[3.5rem] border border-white/20 shadow-2xl relative overflow-hidden"
              >
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <h4 className="text-white font-black text-2xl mb-2 font-cairo tracking-tight">Status Pembangunan</h4>
                    <p className="text-emerald-200/60 text-sm font-bold">Renovasi Aula & Fasilitas Pendidikan</p>
                  </div>
                  <div className="text-gold-400 text-4xl font-black font-cairo">{percentage}%</div>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-6 bg-white/10 rounded-full mb-12 overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="absolute h-full bg-gradient-to-r from-gold-600 via-gold-400 to-white relative"
                  >
                    <motion.div 
                      animate={{ x: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-0 right-0 w-20 h-full bg-white/30 blur-md"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: "Donatur Aktif", value: "2,451+", icon: <FaChartLine className="text-emerald-400" /> },
                    { label: "Program Berhasil", value: "12 Program", icon: <FaHeart className="text-pink-400" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-xl">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-white font-black text-xl font-cairo">{item.value}</div>
                        <div className="text-[10px] font-black text-emerald-300/40 uppercase tracking-[0.2em]">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
