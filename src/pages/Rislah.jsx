import React from 'react';
import { Eye, BookOpen, Sun, Users, ArrowRight } from 'lucide-react';

const Rislah = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full md:h-[800px] bg-primary-purple/5 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-3 bg-white/50 backdrop-blur-xl border border-white rounded-2xl shadow-xl mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-purple rounded-full animate-ping"></span>
            <span className="text-[10px] sm:text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Youth Organization</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-deep-purple tracking-tighter leading-tight mb-6 sm:mb-8 uppercase px-2">
            Remaja Islam <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink leading-tight">Al-Ishlah (Rislah)</span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Wadah pembinaan remaja muslim yang aktif, kreatif, dan berakhlak mulia untuk membangun masa depan umat yang lebih cerah.
          </p>
        </div>
      </header>

      {/* Visi Misi */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="glass-card-premium rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 border border-white shadow-2xl group hover:-translate-y-2 transition-all text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-purple rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 shrink-0"><Eye size={28} sm:size={32} /></div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase">Visi</h2>
            </div>
            <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
              Menjadi komunitas remaja masjid Al-Ishlah yang aktif, kreatif, dan berakhlak mulia dalam membangun generasi muda yang beriman, berilmu, dan bermanfaat bagi masyarakat.
            </p>
          </div>
          <div className="glass-card-premium rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 border border-white shadow-2xl group hover:-translate-y-2 transition-all text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-pink rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 shrink-0"><BookOpen size={28} sm:size={32} /></div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase">Misi</h2>
            </div>
            <ul className="space-y-4 text-left">
              {[
                'Menguatkan Keimanan dan Ketaqwaan melalui kajian mendidik.',
                'Mengembangkan Kreativitas dan Keterampilan secara optimal.',
                'Meningkatkan Kepedulian Sosial melalui kegiatan bakti nyata.',
                'Membangun Kebersamaan dan Ukhuwah Islamiyah yang harmonis.'
              ].map((misi, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-500 font-medium text-sm sm:text-base">
                  <span className="w-6 h-6 bg-accent-pink/10 rounded-full flex items-center justify-center text-accent-pink text-[10px] font-black shrink-0">{i+1}</span>
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20 uppercase px-2">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-deep-purple tracking-tighter mb-4">Program Kerja</h2>
          <p className="text-slate-400 font-bold text-xs sm:text-sm tracking-widest">Inovasi & Kontribusi Nyata</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { title: 'Go Green', desc: 'Program peduli lingkungan yang mengajak remaja untuk melestarikan alam melalui penghijauan.', color: 'text-green-500', icon: <Sun /> },
            { title: 'Sirah Nabawiyah', desc: 'Pembelajaran sejarah hidup Nabi Muhammad SAW untuk menanamkan akhlak mulia.', color: 'text-primary-purple', icon: <BookOpen /> },
            { title: 'Cahaya Ramadhan', desc: 'Rangkaian ibadah khusus bulan suci Ramadhan, mulai dari tadarus hingga buka bersama.', color: 'text-accent-pink', icon: <Sun /> },
            { title: 'Rislah Youth Day', desc: 'Sharing session dan pelatihan keremajaan dua bulanan untuk memotivasi anggota.', color: 'text-deep-purple', icon: <Users /> }
          ].map((item, i) => (
            <div key={i} className="glass-card-premium rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 border border-white shadow-xl group hover:-translate-y-2 transition-all text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-2xl flex items-center justify-center ${item.color} group-hover:rotate-12 transition-transform shrink-0`}>
                  {React.cloneElement(item.icon, { size: 24, smSize: 28 })}
                </div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-deep-purple uppercase">{item.title}</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 sm:py-32 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 border border-white shadow-2xl group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-purple to-accent-pink rounded-2xl sm:rounded-3xl flex items-center justify-center text-white shadow-2xl mx-auto mb-8 sm:mb-10 rotate-12 group-hover:rotate-0 transition-all">
            <Users size={40} sm:size={48} />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-deep-purple uppercase tracking-tighter leading-tight mb-8 sm:mb-10">
            Mulai Perjalanan <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink">Bersama Kami</span>
          </h2>
          <p className="bg-slate-50/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white shadow-inner mb-10 sm:mb-12 text-slate-500 font-bold leading-relaxed text-sm sm:text-base">
            Pendaftaran terbuka untuk remaja berusia <span className="text-primary-purple">16-20 tahun</span> yang memiliki semangat untuk belajar dan berkontribusi.
          </p>
          <a href="/kontak" className="inline-flex items-center justify-center gap-4 sm:gap-6 px-10 py-5 sm:px-12 sm:py-6 bg-deep-purple text-white rounded-2xl sm:rounded-[2.5rem] text-base sm:text-lg font-black uppercase tracking-widest hover:bg-primary-purple hover:scale-105 transition-all shadow-xl w-full sm:w-auto">
            Daftar Sekarang <ArrowRight size={20} sm:size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Rislah;
