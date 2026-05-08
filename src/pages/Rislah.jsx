import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBookOpen, FaSun, FaUsers, FaArrowRight, FaLeaf } from 'react-icons/fa';

const Rislah = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-emerald-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-emerald-800 opacity-95"></div>
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-xl mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-ping"></span>
              <span className="text-xs font-black text-emerald-100 uppercase tracking-[0.3em]">Youth Organization</span>
            </div>
            <h1 className="font-cairo font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight mb-8 uppercase px-2">
              Remaja Islam <br className="hidden sm:block"/><span className="text-gold-400">Al-Ishlah (Rislah)</span>
            </h1>
            <p className="text-emerald-100/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Wadah pembinaan remaja muslim yang aktif, kreatif, dan berakhlak mulia untuk membangun masa depan umat yang lebih cerah.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Visi Misi */}
      <section className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 p-8 md:p-16 rounded-[3rem] shadow-xl premium-shadow group hover:-translate-y-2 transition-all"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                <FaEye className="text-3xl" />
              </div>
              <h2 className="font-cairo font-black text-3xl text-emerald-900 uppercase">Visi</h2>
            </div>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Menjadi komunitas remaja masjid Al-Ishlah yang aktif, kreatif, dan berakhlak mulia dalam membangun generasi muda yang beriman, berilmu, dan bermanfaat bagi masyarakat.
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            className="bg-emerald-900 p-8 md:p-16 rounded-[3rem] shadow-xl text-white group hover:-translate-y-2 transition-all"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-gold-500 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                <FaBookOpen className="text-3xl" />
              </div>
              <h2 className="font-cairo font-black text-3xl text-white uppercase">Misi</h2>
            </div>
            <ul className="space-y-4">
              {[
                'Menguatkan Keimanan dan Ketaqwaan melalui kajian mendidik.',
                'Mengembangkan Kreativitas dan Keterampilan secara optimal.',
                'Meningkatkan Kepedulian Sosial melalui kegiatan bakti nyata.',
                'Membangun Kebersamaan dan Ukhuwah Islamiyah yang harmonis.'
              ].map((misi, i) => (
                <li key={i} className="flex items-start gap-4 text-emerald-50/80 font-medium">
                  <span className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</span>
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="py-16 sm:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="font-cairo font-black text-3xl sm:text-5xl text-emerald-900 uppercase tracking-tight mb-4">Program Kerja</h2>
            <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-400 font-bold text-xs sm:text-sm tracking-widest uppercase">Inovasi & Kontribusi Nyata</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Go Green', desc: 'Program peduli lingkungan yang mengajak remaja untuk melestarikan alam melalui penghijauan.', icon: <FaLeaf />, color: 'emerald' },
              { title: 'Sirah Nabawiyah', desc: 'Pembelajaran sejarah hidup Nabi Muhammad SAW untuk menanamkan akhlak mulia.', icon: <FaBookOpen />, color: 'gold' },
              { title: 'Cahaya Ramadhan', desc: 'Rangkaian ibadah khusus bulan suci Ramadhan, mulai dari tadarus hingga buka bersama.', icon: <FaSun />, color: 'emerald' },
              { title: 'Rislah Youth Day', desc: 'Sharing session dan pelatihan keremajaan dua bulanan untuk memotivasi anggota.', icon: <FaUsers />, color: 'gold' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl premium-shadow group hover:-translate-y-2 transition-all flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                <div className={`w-16 h-16 ${item.color === 'emerald' ? 'bg-emerald-700' : 'bg-gold-500'} text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-cairo font-black text-2xl text-emerald-900 uppercase mb-4">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 sm:py-32 max-w-4xl mx-auto px-4 text-center">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="bg-emerald-950 rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl premium-shadow"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          
          <div className="w-24 h-24 bg-gold-500 rounded-[2rem] flex items-center justify-center text-white shadow-2xl mx-auto mb-10 rotate-12 group-hover:rotate-0 transition-all">
            <FaUsers className="text-4xl" />
          </div>
          <h2 className="font-cairo font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-10">
            Mulai Perjalanan <br className="hidden sm:block"/><span className="text-gold-400">Bersama Kami</span>
          </h2>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 shadow-inner mb-12">
            <p className="text-emerald-100/70 font-bold leading-relaxed text-lg">
              Pendaftaran terbuka untuk remaja berusia <span className="text-gold-400 font-black">16-20 tahun</span> yang memiliki semangat untuk belajar dan berkontribusi.
            </p>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/kontak" 
            className="inline-flex items-center justify-center gap-6 px-12 py-6 bg-gold-500 text-white rounded-[2.5rem] text-lg font-black uppercase tracking-widest hover:bg-gold-600 transition-all shadow-xl premium-shadow group"
          >
            Daftar Sekarang <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Rislah;

