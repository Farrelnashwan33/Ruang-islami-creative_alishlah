import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaPlus } from 'react-icons/fa';
import { gallery } from '../data/dummyData';

const Gallery = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-700 font-bold tracking-widest uppercase mb-4 block">Dokumentasi</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight font-cairo">
              Galeri <span className="text-gradient">Kegiatan</span>
            </h2>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-2"
          >
            Lihat Semua Foto <FaPlus />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-lg h-[300px]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-xl font-bold text-white mb-2 font-cairo transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-gold-400 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <FaEye /> Detail Foto
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
