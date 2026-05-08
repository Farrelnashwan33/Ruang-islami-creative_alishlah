import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaGoogle } from 'react-icons/fa';

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
              <span className="text-xs font-black text-emerald-100 uppercase tracking-[0.3em]">Stay Connected</span>
            </div>
            <h1 className="font-cairo font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight mb-8 uppercase px-2">
              Hubungi <span className="text-gold-400">Kami</span>
            </h1>
            <p className="text-emerald-100/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Kami siap membantu Anda dengan berbagai program dan kegiatan keagamaan di Masjid Al-Ishlah.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Contact Info & Form */}
      <section className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cairo font-black text-4xl md:text-6xl text-emerald-900 uppercase tracking-tight leading-tight mb-12">
                Informasi <br className="hidden sm:block"/><span className="text-gold-600">Kontak Kami</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: <FaMapMarkerAlt />, title: 'Lokasi', content: 'Komplek Perumahan Soreang Indah, Blok J1, Cingcin, Soreang, Kabupaten Bandung, Jawa Barat 40921', color: 'emerald' },
                  { icon: <FaPhoneAlt />, title: 'Telepon', content: '+62 823-8538-7709 (DKM Masjid)', color: 'gold' },
                  { icon: <FaEnvelope />, title: 'Email', content: 'alislahsorin.sekre@gmail.com', color: 'emerald' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-xl premium-shadow flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all"
                  >
                    <div className={`w-14 h-14 ${item.color === 'emerald' ? 'bg-emerald-700' : 'bg-gold-500'} text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-cairo font-black text-xl text-emerald-900 uppercase tracking-tight mb-2">{item.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-900/5 blur-[80px] rounded-[4rem] -z-10"></div>
            <div className="bg-white rounded-[3.5rem] p-8 md:p-16 border border-slate-100 shadow-2xl relative overflow-hidden premium-shadow">
              <h2 className="font-cairo font-black text-3xl text-emerald-900 uppercase tracking-tight mb-2">Kirim Pesan</h2>
              <p className="text-slate-400 font-bold mb-10 uppercase tracking-widest text-xs">Pesan Anda sangat berarti bagi kami</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input 
                    type="text" required placeholder="Nama Lengkap" 
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-slate-700 transition-all"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="email" required placeholder="Email" 
                      className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-slate-700 transition-all"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input 
                      type="tel" placeholder="Telepon" 
                      className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-slate-700 transition-all"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <select 
                    required className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-slate-700 transition-all appearance-none cursor-pointer"
                    value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="program">Program & Kegiatan</option>
                    <option value="donasi">Donasi</option>
                    <option value="umum">Pertanyaan Umum</option>
                  </select>
                  <textarea 
                    rows="4" required placeholder="Pesan Anda..." 
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-slate-700 transition-all resize-none"
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-6 bg-emerald-900 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-xl hover:bg-emerald-800 transition-all flex items-center justify-center gap-4"
                >
                  <FaPaperPlane /> Kirim Pesan Sekarang
                </motion.button>
              </form>

              {status.msg && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-8 p-6 rounded-[2rem] font-bold text-center ${status.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}
                >
                  {status.msg}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cairo font-black text-4xl md:text-5xl text-emerald-900 uppercase tracking-tight mb-4">Lokasi Masjid</h2>
            <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl h-[400px] md:h-[600px] relative group premium-shadow">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.839201019071!2d107.53726117442147!3d-7.028179068853127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ec3a19fd2d63%3A0xc728ef3ee5aadc99!2sAl%20-%20Ishlah!5e0!3m2!1sid!2sid!4v1765711925347!5m2!1sid!2sid" 
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
              title="Google Maps"
            ></iframe>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://maps.app.goo.gl/sudBtZGk1jifMwMQA" 
              target="_blank" 
              rel="noreferrer" 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 px-10 py-5 bg-white text-emerald-900 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl border border-slate-100 flex items-center gap-3"
            >
              <FaMapMarkerAlt className="text-gold-600" /> Buka di Google Maps
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

