import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaWallet, FaChartLine } from 'react-icons/fa';

const Donation = () => {
  const currentDonation = 75000000;
  const targetDonation = 100000000;
  const percentage = (currentDonation / targetDonation) * 100;

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" id="donasi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[4rem] p-8 md:p-16 relative overflow-hidden shadow-2xl premium-shadow">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-gold-400 font-bold text-sm mb-6 border border-white/10">
                <FaHandHoldingHeart /> Program Infaq & Shodaqoh
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-cairo">
                Mari Berbagi <span className="text-gold-400">Kebaikan</span> <br />
                Untuk Rumah Allah
              </h2>
              <p className="text-emerald-100/70 text-lg mb-8 leading-relaxed">
                Setiap rupiah yang Anda infaqkan akan menjadi amal jariyah yang terus mengalir pahalanya. Mari bersama membangun fasilitas dakwah yang lebih baik.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-emerald-300 text-sm font-bold uppercase mb-2">Terkumpul</div>
                  <div className="text-2xl font-black text-white font-cairo">Rp {currentDonation.toLocaleString()}</div>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-gold-400 text-sm font-bold uppercase mb-2">Target</div>
                  <div className="text-2xl font-black text-white font-cairo">Rp {targetDonation.toLocaleString()}</div>
                </div>
              </div>

              <button className="btn-premium bg-gold-500 text-white w-full sm:w-auto shadow-xl shadow-gold-500/30 flex items-center justify-center gap-3 text-lg">
                <FaWallet /> Infaq Sekarang
              </button>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20"
              >
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Progress Donasi</h4>
                    <p className="text-emerald-200/60 text-sm">Renovasi Aula & Fasilitas Pendidikan</p>
                  </div>
                  <div className="text-gold-400 text-3xl font-black font-cairo">{percentage}%</div>
                </div>

                {/* Progress Bar */}
                <div className="h-4 bg-white/10 rounded-full mb-10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-gold-600 to-gold-400 relative"
                  >
                    <div className="absolute top-0 right-0 w-2 h-full bg-white animate-pulse"></div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Donasi Terverifikasi", value: "1,240+", icon: <FaChartLine className="text-emerald-400" /> },
                    { label: "Program Berjalan", value: "8 Aktif", icon: <FaHeart className="text-pink-400" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white font-bold">{item.value}</div>
                        <div className="text-emerald-300/60 text-xs uppercase tracking-widest">{item.label}</div>
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
