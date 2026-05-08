import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMosque, FaUsers, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import aboutImg from '../assets/islamic_education.png';

const About = () => {
  const features = [
    { title: "Pendidikan", icon: <FaGraduationCap />, desc: "KOBER/PAUD, DTA, & Maghrib Mengaji" },
    { title: "Dakwah", icon: <FaMosque />, desc: "Kajian Rutin & Tabligh Akbar" },
    { title: "Sosial", icon: <FaHandsHelping />, desc: "ZIS & Program Beras Perelek" },
    { title: "Remaja", icon: <FaUsers />, desc: "Pembinaan Generasi Muda Islami" },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl premium-shadow transform -rotate-2">
              <img 
                src={aboutImg} 
                alt="Tentang Kami" 
                className="w-full h-full object-cover aspect-[4/5]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-2xl">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl font-cairo">Masjid Modern & Aktif</h4>
                    <p className="text-sm text-emerald-50">Melayani jamaah dengan sepenuh hati.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-emerald-700 font-bold tracking-widest uppercase mb-4 block">Tentang Organisasi</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight font-cairo">
              Membangun <span className="text-gradient">Peradaban Islami</span> dari Masjid
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Masjid Al Ishlah Soreang Indah berkomitmen menjadi pusat dakwah yang modern, inklusif, dan memberikan solusi nyata bagi problematika sosial umat. Kami percaya bahwa masjid harus kembali menjadi pusat kehidupan masyarakat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-xl group-hover:bg-emerald-700 group-hover:text-white transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-premium bg-emerald-700 text-white shadow-emerald-700/20 shadow-xl">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
