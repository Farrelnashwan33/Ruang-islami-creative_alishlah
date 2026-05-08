import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaFeather, FaHeart, FaUsers, FaGift, FaLanguages, FaArrowRight } from 'react-icons/fa';
import { programs } from '../data/dummyData';

const iconMap = {
  BookOpen: <FaBookOpen />,
  Feather: <FaFeather />,
  Heart: <FaHeart />,
  Users: <FaUsers />,
  Gift: <FaGift />,
  Languages: <FaLanguages />
};

const Programs = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Islamic Patterns (SVG) */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-900">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-700 font-bold tracking-widest uppercase mb-4 block">Layanan & Kegiatan</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight font-cairo">
              Program <span className="text-gradient">Unggulan</span> Kami
            </h2>
            <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 hover:border-emerald-200 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100%] -mr-16 -mt-16 group-hover:bg-emerald-100 transition-colors"></div>
              
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-emerald-700/20 group-hover:scale-110 transition-transform relative z-10">
                {iconMap[program.icon]}
              </div>

              <span className="inline-block px-3 py-1 bg-gold-100 text-gold-600 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 relative z-10">
                {program.category}
              </span>

              <h3 className="text-2xl font-black text-slate-900 mb-4 font-cairo group-hover:text-emerald-700 transition-colors relative z-10">
                {program.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-8 relative z-10">
                {program.desc}
              </p>

              <button className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all relative z-10">
                Selengkapnya <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-premium border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
            Lihat Semua Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
