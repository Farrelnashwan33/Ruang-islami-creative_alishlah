import React from 'react';
import { ArrowRight, Book, Heart, Users, Calendar, MapPin, Phone, Clock, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import imgPendidikan from '../assets/dokum/IMG_20250613_184831.jpg';
import imgKajian from '../assets/dokum/IMG-20240401-WA0056.jpg';
import imgSosial from '../assets/dokum/beras perelek.jpg';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 md:pt-48 md:pb-40 bg-white">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-slate-50 -skew-x-0 md:-skew-x-12 origin-top-right -z-10 rounded-none md:rounded-bl-[100px]"></div>
        <div className="absolute top-[20%] left-[-5%] w-64 h-64 bg-primary-purple/5 blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-fade-in-up text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-purple/10 rounded-full text-primary-purple font-black text-sm mb-8 animate-bounce shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-purple"></span>
                </span>
                <span>Official Website Masjid Al-Ishlah</span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Pusat <span className="text-primary-purple">Pendidikan</span> & Dakwah
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium px-4 lg:px-0">
                Menyatukan umat melalui <span className="text-slate-900 font-bold border-b-4 border-accent-pink/30">pendidikan kreatif</span>, kegiatan sosial, dan program keagamaan yang bermakna.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="/program" className="w-full sm:w-auto px-10 py-5 bg-primary-purple text-white font-black rounded-2xl shadow-2xl shadow-primary-purple/40 hover:bg-primary-purple-dark transition-all transform hover:-translate-y-2 text-lg flex items-center justify-center group">
                  Lihat Program Kami <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/kontak" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-100 hover:border-primary-purple/30 hover:bg-slate-50 transition-all text-lg shadow-sm">
                  Hubungi Kami
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-[300px] sm:max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/30 to-accent-pink/30 rounded-full blur-[60px] md:blur-[80px] animate-pulse"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img src={logo} alt="Logo Masjid Al-Ishlah" className="w-3/4 h-3/4 object-contain drop-shadow-2xl animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 mb-6 tracking-tight uppercase">Program Unggulan</h2>
            <div className="w-24 h-2 bg-primary-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: 'Bidang ZIS', desc: 'Zakat, Infaq, dan Shodaqoh - Mengelola zakat secara amanah dan transparan.', color: 'bg-primary-purple', icon: <Heart className="text-white" /> },
              { title: 'Sosial Keumatan', desc: 'Beras Perelek, Sembako, dan dukungan kesejahteraan bersama.', color: 'bg-accent-pink', icon: <Users className="text-white" /> },
              { title: 'Pendidikan', desc: 'KOBER/PAUD, DTA, Maghrib Mengaji, dan Tahsin jama\'ah.', color: 'bg-indigo-500', icon: <Book className="text-white" /> }
            ].map((program, i) => (
              <div key={i} className="glass-card-premium overflow-hidden group rounded-[2.5rem]">
                <div className={`h-48 sm:h-56 ${program.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl group-hover:rotate-12 transition-transform">
                    {React.cloneElement(program.icon, { size: 36 })}
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mb-4 uppercase">{program.title}</h3>
                  <p className="text-slate-600 mb-8 font-medium text-sm sm:text-base">{program.desc}</p>
                  <a href="/program" className="inline-flex items-center text-primary-purple font-black uppercase tracking-wider group/link text-sm sm:text-base">
                    Selengkapnya <ArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase mb-6 sm:mb-8">Visi</h3>
              <p className="text-slate-600 text-xl sm:text-2xl font-medium leading-relaxed">
                "Menjadi pusat dakwah dan pendidikan serta mengabdi kepada jamaah - umat."
              </p>
            </div>
            <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase mb-6 sm:mb-8">Misi</h3>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  'Masjid menjadi bagian dari solusi bagi jema\'ah/ umat',
                  'Masjid menjadi tempat yang nyaman untuk beribadah',
                  'Masjid menjadi tempat rujukan persoalan sosial'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-accent-pink/20 text-accent-pink rounded-full flex items-center justify-center font-black shrink-0 text-sm sm:text-base">{String.fromCharCode(65 + i)}</span>
                    <p className="text-slate-600 font-bold text-base sm:text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-5 py-2 bg-primary-purple/10 rounded-full text-primary-purple font-black text-sm mb-6 tracking-widest uppercase">
              Informasi Terkini
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 px-2">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-deep-purple uppercase tracking-tighter leading-tight max-w-2xl text-center md:text-left">
                Berita & <span className="text-primary-purple">Pengumuman</span>
              </h2>
              <a href="/gallery" className="w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-deep-purple text-white rounded-2xl font-black uppercase tracking-widest hover:bg-primary-purple transition-all shadow-xl text-center">
                Lihat Semua
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              { title: 'Pendidikan Tahfidz', date: '15 Jan 2025', img: imgPendidikan, cat: 'Pendidikan' },
              { title: 'Kajian Ukhuwah', date: '10 Jan 2025', img: imgKajian, cat: 'Dakwah' },
              { title: 'Beras Perelek', date: '05 Jan 2025', img: imgSosial, cat: 'Sosial' }
            ].map((news, i) => (
              <div key={i} className="glass-card-premium rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden group hover:-translate-y-2 transition-all">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-xl rounded-xl text-white text-[10px] sm:text-xs font-black uppercase">{news.cat}</div>
                </div>
                <div className="p-8 sm:p-10">
                  <time className="text-slate-400 font-black text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 block">{news.date}</time>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-deep-purple mb-4 sm:mb-6 group-hover:text-primary-purple transition-colors">{news.title}</h3>
                  <a href="/program" className="text-primary-purple font-black uppercase text-xs sm:text-sm flex items-center gap-2">Baca Selengkapnya <ArrowRight size={16} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-8 uppercase">Lokasi Kami</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <MapPin className="text-primary-purple shrink-0" />
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Alamat</h4>
                    <p className="text-slate-600 text-sm">Komplek Soreang Indah Blok J1, Cingcin, Soreang, Bandung 40921</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <Phone className="text-accent-pink shrink-0" />
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Kontak</h4>
                    <p className="text-slate-600 text-sm">+62 823-8538-7709</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 h-[350px] sm:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-slate-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.839201019071!2d107.53726117442147!3d-7.028179068853127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ec3a19fd2d63%3A0xc728ef3ee5aadc99!2sAl%20-%20Ishlah!5e0!3m2!1sid!2sid!4v1765711925347!5m2!1sid!2sid" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-0" 
                allowFullScreen="" loading="lazy" title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
