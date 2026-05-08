import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaWallet, FaCopy, FaCheck, FaEye, FaEyeOff, FaGraduationCap, FaHandsHelping, FaMosque } from 'react-icons/fa';

const Program = () => {
  const [selectedKategori, setSelectedKategori] = useState('zis');
  const [namaDonatur, setNamaDonatur] = useState('');
  const [isBlurred, setIsBlurred] = useState(true);
  const [copied, setCopied] = useState(false);

  const bankInfo = {
    bank: 'BJB',
    rekening: '0000007021959',
    atasNama: 'Doddy Sufri Adiat'
  };

  const getKategoriLabel = (val) => {
    const labels = {
      zis: '01. Bidang ZIS',
      sosial: '02. Sosial Keumatan',
      pendidikan: '03. Program Pendidikan',
      pembangunan: '04. Pembangunan & Gedung',
      ramadhan: '05. Kegiatan Ramadhan',
      pengajian: '06. Majelis Ta\'lim',
      tambahan: '07. Tabungan Qurban / KPJ'
    };
    return labels[val] || val;
  };

  const infoText = `DONASI AL-ISHLAH\n\nKategori: ${getKategoriLabel(selectedKategori)}\nDonatur: ${namaDonatur || '(Hamba Allah)'}\n\nBank: ${bankInfo.bank}\nNo Rek: ${bankInfo.rekening}\nAtas Nama: ${bankInfo.atasNama}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(infoText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-emerald-800 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-5 py-2 bg-white/10 rounded-full text-gold-400 font-bold text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-md border border-white/10 uppercase tracking-widest">
              Bantu Sesama, Raih Ridho Illahi
            </span>
            <h1 className="font-cairo font-black text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8 tracking-tight uppercase leading-tight">
              Program & <span className="text-gold-400">Donasi</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100/70 max-w-3xl mx-auto font-medium px-4">
              Dukung berbagai program keagamaan dan sosial Masjid Al-Ishlah untuk mewujudkan kemaslahatan umat.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Programs List */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="font-cairo font-black text-3xl sm:text-4xl md:text-6xl text-slate-900 mb-4 sm:mb-6 uppercase tracking-tight">Program & <span className="text-emerald-700">Kegiatan</span></h2>
          <div className="w-16 sm:w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 gap-12">
          {/* ZIS */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-xl premium-shadow relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform font-black text-2xl">01</div>
              <h3 className="font-cairo font-black text-3xl text-slate-900 uppercase">Bidang ZIS</h3>
            </div>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl">Zakat, Infaq, dan Shodaqoh - Mengelola zakat yang ada di Masjid Al-Ishlah secara amanah dan transparan.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {['Zakat Penghasilan', 'Zakat Fitrah', 'Donatur Rutin'].map((item) => (
                <div key={item} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 font-bold text-emerald-900 text-center">{item}</div>
              ))}
            </div>
          </motion.div>

          {/* Sosial */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="bg-emerald-900 p-8 md:p-12 rounded-[3rem] shadow-xl text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 relative z-10">
              <div className="w-16 h-16 bg-gold-500 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform font-black text-2xl">02</div>
              <h3 className="font-cairo font-black text-3xl text-white uppercase">Sosial Keumatan</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
              {['Beras Perelek', 'Beras Bersubsidi', 'Beras Gratis', 'Sembako Jemaah Sakit', 'Konsultasi Keluarga', 'Konsultasi Waris'].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 font-bold text-emerald-50 text-center hover:bg-white/20 transition-all">{item}</div>
              ))}
            </div>
          </motion.div>

          {/* Pendidikan */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-xl premium-shadow group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform font-black text-2xl">03</div>
              <h3 className="font-cairo font-black text-3xl text-slate-900 uppercase">Pendidikan</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-emerald-700 uppercase flex items-center gap-3">
                  <FaGraduationCap /> Formal
                </h4>
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-2xl font-bold border border-slate-100 text-slate-700 hover:bg-emerald-50 transition-colors">KOBER/PAUD Al-Ishlah</div>
                  <div className="p-6 bg-slate-50 rounded-2xl font-bold border border-slate-100 text-slate-700 hover:bg-emerald-50 transition-colors">DTA (Diniyah Takmiliyah Awaliyah)</div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-gold-600 uppercase flex items-center gap-3">
                  <FaMosque /> Non-Formal
                </h4>
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-2xl font-bold border border-slate-100 text-slate-700 hover:bg-emerald-50 transition-colors">Maghrib Mengaji</div>
                  <div className="p-6 bg-slate-50 rounded-2xl font-bold border border-slate-100 text-slate-700 hover:bg-emerald-50 transition-colors">Tahsin Jama'ah</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Donasi Kanal */}
        <section id="donasi" className="mt-32">
          <div className="bg-emerald-950 rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl premium-shadow">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            
            <div className="text-center mb-16 relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <h3 className="font-cairo font-black text-4xl md:text-6xl uppercase tracking-tight">Kanal Donasi</h3>
                <button onClick={() => setIsBlurred(!isBlurred)} className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-md border border-white/10">
                  {isBlurred ? <FaEye className="text-xl" /> : <FaEyeOff className="text-xl" />}
                </button>
              </div>
              <p className="text-xl text-emerald-100/70 font-medium max-w-2xl mx-auto">Salurkan kepedulian Anda untuk mendukung keberlangsungan dakwah Al-Ishlah.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-gold-400 text-xs font-black uppercase tracking-widest">Pilih Kategori</label>
                  <select 
                    value={selectedKategori}
                    onChange={(e) => setSelectedKategori(e.target.value)}
                    className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-3xl text-white font-bold text-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/50 cursor-pointer backdrop-blur-xl"
                  >
                    <option value="zis" className="bg-emerald-950">01. Bidang ZIS</option>
                    <option value="sosial" className="bg-emerald-950">02. Sosial Keumatan</option>
                    <option value="pendidikan" className="bg-emerald-950">03. Program Pendidikan</option>
                    <option value="pembangunan" className="bg-emerald-950">04. Pembangunan & Gedung</option>
                    <option value="ramadhan" className="bg-emerald-950">05. Kegiatan Ramadhan</option>
                    <option value="pengajian" className="bg-emerald-950">06. Majelis Ta'lim</option>
                    <option value="tambahan" className="bg-emerald-950">07. Tabungan Qurban / KPJ</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="block text-gold-400 text-xs font-black uppercase tracking-widest">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={namaDonatur}
                    onChange={(e) => setNamaDonatur(e.target.value)}
                    placeholder="Masukkan nama Anda..." 
                    className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-3xl text-white font-bold text-xl placeholder-white/20 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 backdrop-blur-xl"
                  />
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/20"
              >
                <div className="space-y-8 mb-12">
                  <div>
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Bank Pengelola</p>
                    <p className={`font-black text-3xl transition-all ${isBlurred ? 'blur-md' : ''}`}>{bankInfo.bank}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">No. Rekening</p>
                    <p className={`font-black text-4xl transition-all tracking-tight text-gold-400 ${isBlurred ? 'blur-md' : ''}`}>{bankInfo.rekening}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2">Atas Nama</p>
                    <p className={`font-black text-2xl transition-all uppercase ${isBlurred ? 'blur-md' : ''}`}>{bankInfo.atasNama}</p>
                  </div>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3 ${
                    copied ? 'bg-green-500 text-white' : 'bg-gold-500 text-white hover:bg-gold-600'
                  }`}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                  {copied ? 'Berhasil Disalin' : 'Salin Rekening'}
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Program;

