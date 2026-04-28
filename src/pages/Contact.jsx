import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', msg: 'Terima kasih! Pesan Anda telah dikirim (Simulasi).' });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 text-center">
        <div className="absolute top-0 right-0 w-full md:w-[800px] h-full md:h-[800px] bg-primary-purple/5 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-3 bg-white/50 backdrop-blur-xl border border-white rounded-2xl shadow-xl mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-purple rounded-full animate-ping"></span>
            <span className="text-[10px] sm:text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Stay Connected</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-deep-purple tracking-tighter leading-tight mb-6 sm:mb-8 uppercase px-2">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink">Kami</span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Kami siap membantu Anda dengan berbagai program dan kegiatan keagamaan di Masjid Al-Ishlah.
          </p>
        </div>
      </header>

      {/* Contact Info & Form */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info Side */}
          <div className="space-y-10 sm:space-y-12 text-center lg:text-left">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-deep-purple uppercase tracking-tighter leading-tight">
              Informasi <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-pink">Kontak Kami</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: <MapPin />, title: 'Lokasi', content: 'Komplek Perumahan Soreang Indah, Blok J1, Cingcin, Soreang, Kabupaten Bandung, Jawa Barat 40921', color: 'primary-purple' },
                { icon: <Phone />, title: 'Telepon', content: '+62 823-8538-7709 (DKM Masjid)', color: 'accent-pink' },
                { icon: <Mail />, title: 'Email', content: 'alislahsorin.sekre@gmail.com', color: 'primary-purple' }
              ].map((item, i) => (
                <div key={i} className="glass-card-premium rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-white shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 hover:-translate-y-1 transition-all text-center sm:text-left">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-primary-purple shrink-0`}>
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-deep-purple uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-purple/20 to-accent-pink/20 blur-2xl rounded-[4rem] -z-10 opacity-50"></div>
            <div className="glass-card-premium rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 border border-white shadow-2xl relative overflow-hidden">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-deep-purple uppercase tracking-tight mb-4 text-center sm:text-left">Kirim Pesan</h2>
              <p className="text-slate-400 font-medium mb-8 sm:mb-10 uppercase tracking-widest text-[10px] sm:text-xs text-center sm:text-left">Pesan Anda akan langsung kami terima</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input 
                  type="text" required placeholder="Nama Lengkap" 
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white/50 border border-white/50 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary-purple/20 outline-none font-bold text-slate-700 shadow-inner text-sm sm:text-base"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input 
                    type="email" required placeholder="Email" 
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white/50 border border-white/50 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary-purple/20 outline-none font-bold text-slate-700 shadow-inner text-sm sm:text-base"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" placeholder="Telepon" 
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white/50 border border-white/50 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary-purple/20 outline-none font-bold text-slate-700 shadow-inner text-sm sm:text-base"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <select 
                  required className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white/50 border border-white/50 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary-purple/20 outline-none font-bold text-slate-700 shadow-inner appearance-none text-sm sm:text-base"
                  value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="">Pilih Subjek</option>
                  <option value="program">Program & Kegiatan</option>
                  <option value="donasi">Donasi</option>
                  <option value="umum">Pertanyaan Umum</option>
                </select>
                <textarea 
                  rows="4" sm:rows="5" required placeholder="Pesan Anda..." 
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white/50 border border-white/50 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary-purple/20 outline-none font-bold text-slate-700 shadow-inner resize-none text-sm sm:text-base"
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                
                <button type="submit" className="w-full py-5 sm:py-6 bg-gradient-to-r from-primary-purple to-accent-pink text-white rounded-2xl sm:rounded-[2rem] font-black uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm sm:text-base">
                  <Send size={18} sm:size={20} /> Kirim Pesan Sekarang
                </button>
              </form>

              {status.msg && (
                <div className={`mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl font-bold text-center animate-fade-in text-sm sm:text-base ${status.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {status.msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24 bg-slate-50 text-center px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-deep-purple uppercase tracking-tighter mb-8 sm:mb-12">Lokasi Masjid</h2>
          <div className="glass-card-premium rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white shadow-2xl h-[300px] sm:h-[500px] relative group">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.839201019071!2d107.53726117442147!3d-7.028179068853127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ec3a19fd2d63%3A0xc728ef3ee5aadc99!2sAl%20-%20Ishlah!5e0!3m2!1sid!2sid!4v1765711925347!5m2!1sid!2sid" className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"></iframe>
            <a href="https://maps.app.goo.gl/sudBtZGk1jifMwMQA" target="_blank" rel="noreferrer" className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 sm:px-10 sm:py-5 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] font-black uppercase tracking-widest text-[10px] sm:text-sm shadow-2xl hover:scale-105 transition-all">
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
