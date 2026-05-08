import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { articles } from '../data/dummyData';

const Articles = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-700 font-bold tracking-widest uppercase mb-4 block">Wawasan Islami</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight font-cairo">
              Artikel & <span className="text-gradient">Berita</span> Terbaru
            </h2>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium bg-emerald-700 text-white shadow-lg shadow-emerald-700/20"
          >
            Baca Semua Artikel
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
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group hover:border-emerald-200 transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-emerald-700 text-xs font-black uppercase tracking-widest">
                  {article.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <FaCalendarAlt className="text-gold-500" /> {article.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-cairo group-hover:text-emerald-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <button className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Baca Selengkapnya <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
