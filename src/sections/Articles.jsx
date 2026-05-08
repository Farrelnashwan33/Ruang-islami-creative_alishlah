import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { articles } from '../data/dummyData';

const Articles = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-emerald-700"></span>
              <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em]">Wawasan Islami</span>
            </div>
            <h2 className="text-slate-900 font-cairo">
              Artikel & <span className="text-gradient">Hikmah</span>
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium btn-primary px-10 py-5 text-xs"
          >
            Jelajahi Seluruh Artikel
            <FaChevronRight className="text-[10px]" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-slate-50/50 rounded-[3rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-emerald-100 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 px-5 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-emerald-700 text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {article.category}
                </div>
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <FaCalendarAlt className="text-gold-500" /> {article.date}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 font-cairo group-hover:text-emerald-700 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {article.excerpt}
                </p>
                
                <div className="pt-8 border-t border-slate-100">
                  <button className="flex items-center gap-3 text-emerald-700 font-black uppercase tracking-[0.2em] text-[10px] group-hover:gap-5 transition-all">
                    Lanjutkan Membaca <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
