import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMosque, FaUsers, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import aboutImg from '../assets/about-img.png';

const About = () => {
  const features = [
    { title: "Pendidikan", icon: <FaGraduationCap />, desc: "KOBER/PAUD, DTA, & Maghrib Mengaji" },
    { title: "Dakwah", icon: <FaMosque />, desc: "Kajian Rutin & Tabligh Akbar" },
    { title: "Sosial", icon: <FaHandsHelping />, desc: "ZIS & Program Beras Perelek" },
    { title: "Remaja", icon: <FaUsers />, desc: "Pembinaan Generasi Muda Islami" },
  ];

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative Background */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-700/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 group">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl premium-shadow relative aspect-[4/5]">
                <img 
                  src={aboutImg} 
                  alt="Tentang Kami" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
              </div>

              {/* Stats Badge */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden sm:flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-700/30">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="font-cairo font-black text-2xl text-emerald-900 leading-tight">Masjid Modern</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Terakreditasi A</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-emerald-700"></span>
              <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em]">Tentang Organisasi</span>
            </div>
            <h2 className="text-slate-900 mb-8 font-cairo">
              Pusat <span className="text-gradient">Peradaban</span> Dari Soreang Indah
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Masjid Al Ishlah bukan sekadar tempat ibadah, namun menjadi wadah kolaborasi umat untuk mencetak generasi yang cerdas secara intelektual dan mulia secara akhlak. Kami hadir untuk melayani masyarakat dengan semangat modernitas yang tetap berpijak pada nilai luhur Al-Qur'an.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm text-emerald-700 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-700 group-hover:text-white group-hover:shadow-xl group-hover:shadow-emerald-700/20 transition-all duration-300">
                    {f.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-slate-900 text-lg font-cairo">{f.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-premium btn-primary px-10 py-5 text-sm shadow-2xl">
              Pelajari Visi Misi Kami
              <FaCheckCircle className="text-gold-400" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
