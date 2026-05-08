import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCamera, FaFolderOpen, FaGoogleDrive } from 'react-icons/fa';

const Gallery = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-emerald-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-emerald-800 opacity-95"></div>
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-xl mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-ping"></span>
              <span className="text-xs font-black text-emerald-100 uppercase tracking-[0.3em]">Documentation</span>
            </div>
            <h1 className="font-cairo font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight mb-8 uppercase px-2">
              Galeri <span className="text-gold-400">Kegiatan</span>
            </h1>
            <p className="text-emerald-100/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Dokumentasi perjalanan spiritual, pendidikan, dan pengabdian masyarakat di Masjid Al-Ishlah.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 sm:py-32 relative px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-900/5 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="w-20 h-20 bg-emerald-700/10 text-emerald-700 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-12 transition-transform">
              <FaFolderOpen className="text-4xl" />
            </div>

            <h2 className="font-cairo font-black text-3xl md:text-5xl text-emerald-900 uppercase tracking-tight leading-tight mb-10">
              Eksplorasi <br className="hidden sm:block"/><span className="text-gold-600 leading-[1.2]">Arsip Visual</span>
            </h2>
            <p className="text-slate-600 text-xl font-medium mb-12 leading-relaxed">
              Kami mendokumentasikan setiap momen berharga dalam penyimpanan cloud untuk memastikan kenangan dakwah tetap terjaga.
            </p>
            
            <a 
              href="https://drive.google.com/drive/folders/1cPsgmGjMnOB11jceCYJ0ZrRA-DyF6B9X" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-6 px-12 py-6 bg-emerald-900 text-white rounded-[2.5rem] text-lg font-black uppercase tracking-widest hover:bg-emerald-800 hover:scale-105 transition-all shadow-xl premium-shadow group w-full sm:w-auto"
            >
              <FaGoogleDrive className="text-2xl" />
              Buka Google Drive
              <FaExternalLinkAlt className="group-hover:translate-x-2 transition-transform text-lg" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="pb-16 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Dokumentasi Kajian', count: '100+ Foto', icon: <FaCamera /> },
            { title: 'Kegiatan Sosial', count: '50+ Video', icon: <FaCamera /> },
            { title: 'Pendidikan Tahfidz', count: '200+ File', icon: <FaCamera /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl premium-shadow text-center group hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-slate-400 group-hover:bg-gold-500 group-hover:text-white transition-all">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-black text-xl text-emerald-900 mb-2 uppercase font-cairo">{item.title}</h3>
              <p className="text-gold-600 font-bold text-xs uppercase tracking-widest">{item.count}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

