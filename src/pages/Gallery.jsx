import React from 'react';
import { ExternalLink, Camera, FolderOpen } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full md:h-[800px] bg-primary-purple/5 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-[600px] h-full md:h-[600px] bg-accent-pink/5 blur-[80px] md:blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-3 bg-white/50 backdrop-blur-xl border border-white rounded-2xl shadow-xl mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-purple rounded-full animate-ping"></span>
            <span className="text-[10px] sm:text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Documentation</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-deep-purple tracking-tighter leading-tight mb-6 sm:mb-8 uppercase px-2">
            Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink">Kegiatan</span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Dokumentasi perjalanan spiritual, pendidikan, dan pengabdian masyarakat di Masjid Al-Ishlah.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 sm:py-32 relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 border border-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-primary-purple/5 blur-[60px] sm:blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-purple/10 text-primary-purple rounded-[1.5rem] sm:rounded-3xl flex items-center justify-center mx-auto mb-8 sm:mb-10 group-hover:rotate-12 transition-transform">
              <FolderOpen size={32} sm:size={40} />
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl text-deep-purple uppercase tracking-tighter leading-tight mb-6 sm:mb-10">
              Eksplorasi <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink leading-[1.2]">Arsip Visual</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-xl font-medium mb-8 sm:mb-12 leading-relaxed">
              Kami mendokumentasikan setiap momen berharga dalam penyimpanan awan (cloud) untuk memastikan kenangan dakwah tetap terjaga.
            </p>
            
            <a 
              href="https://drive.google.com/drive/folders/1cPsgmGjMnOB11jceCYJ0ZrRA-DyF6B9X" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-4 sm:gap-6 px-8 sm:px-12 py-5 sm:py-6 bg-deep-purple text-white rounded-2xl sm:rounded-[2.5rem] text-base sm:text-lg font-black uppercase tracking-widest hover:bg-primary-purple hover:scale-105 hover:shadow-2xl transition-all shadow-xl group w-full sm:w-auto"
            >
              Buka Google Drive
              <ExternalLink size={20} sm:size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="pb-16 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: 'Dokumentasi Kajian', count: '100+ Foto', icon: <Camera /> },
            { title: 'Kegiatan Sosial', count: '50+ Video', icon: <Camera /> },
            { title: 'Pendidikan Tahfidz', count: '200+ File', icon: <Camera /> }
          ].map((item, i) => (
            <div key={i} className="glass-card-premium p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] text-center group">
              <div className="w-14 h-14 sm:w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-400 group-hover:bg-primary-purple group-hover:text-white transition-all">
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <h3 className="font-black text-lg sm:text-xl text-deep-purple mb-2 uppercase">{item.title}</h3>
              <p className="text-slate-400 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{item.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
