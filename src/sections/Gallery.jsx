import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaPlus } from 'react-icons/fa';
import { gallery } from '../data/dummyData';

const Gallery = () => {
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
              <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em]">Dokumentasi Visual</span>
            </div>
            <h2 className="text-slate-900 font-cairo">
              Galeri <span className="text-gradient">Kebajikan</span>
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium btn-outline px-8 py-4 text-xs"
          >
            Lihat Galeri Lengkap <FaPlus className="text-[10px]" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] md:h-[400px]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[10px] font-black text-gold-400 uppercase tracking-[0.3em]">Kegiatan Masjid</span>
                  <h4 className="text-2xl font-black text-white font-cairo leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-white/60 font-bold text-xs">
                    <FaEye className="text-gold-400" /> Ketuk untuk melihat
                  </div>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <FaPlus />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
