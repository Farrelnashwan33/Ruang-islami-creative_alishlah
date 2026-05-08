import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaFeather, FaHeart, FaUsers, FaArrowRight } from 'react-icons/fa';
import { FiBookOpen, FiFeather, FiHeart, FiUsers } from 'react-icons/fi';
import { programs } from '../data/dummyData';

const iconMap = {
  FiBookOpen: <FiBookOpen />,
  FiFeather: <FiFeather />,
  FiHeart: <FiHeart />,
  FiUsers: <FiUsers />,
};

const Programs = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-4">Layanan & Kegiatan</span>
            <h2 className="text-slate-900 font-cairo mb-6">
              Program <span className="text-gradient">Khidmat</span> Umat
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-gold-500 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-emerald-100 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-700 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                  {iconMap[program.icon]}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-gold-600 uppercase tracking-widest bg-gold-50 px-3 py-1 rounded-full">
                    {program.category}
                  </span>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    {program.time}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 font-cairo group-hover:text-emerald-700 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {program.description}
                </p>

                <button className="flex items-center gap-2 text-emerald-700 font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                  Detail Program <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="btn-premium btn-outline px-12 py-5 text-sm">
            Lihat Semua Jadwal Kegiatan
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
