import React, { useState, useEffect } from 'react';
import { Heart, CreditCard, Copy, Eye, EyeOff, Check } from 'lucide-react';

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
    <div className="bg-slate-50">
      {/* Page Header */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-deep-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple to-primary-purple opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 rounded-full text-accent-pink-light font-black text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-md border border-white/10 uppercase tracking-widest">
            Bantu Sesama, Raih Ridho Illahi
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8 tracking-tighter uppercase leading-tight">Program & <span className="text-primary-purple-light">Donasi</span></h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium px-4">
            Dukung berbagai program keagamaan dan sosial Masjid Al-Ishlah untuk mewujudkan kemaslahatan umat.
          </p>
        </div>
      </header>

      {/* Programs List */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-slate-900 mb-4 sm:mb-6 uppercase tracking-tight">Program & <span className="text-primary-purple">Kegiatan</span></h2>
          <div className="w-16 sm:w-24 h-2 bg-accent-pink mx-auto rounded-full"></div>
        </div>

        {/* 01. ZIS */}
        <div className="glass-card-premium p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] group relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center mb-8 sm:mb-10 text-center sm:text-left gap-4 sm:gap-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-purple text-white rounded-2xl flex items-center justify-center sm:mr-6 mx-auto sm:mx-0 shadow-xl group-hover:rotate-12 transition-transform font-black text-xl sm:text-2xl">01</div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase">Bidang ZIS</h3>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 font-medium text-center sm:text-left">Zakat, Infaq, dan Shodaqoh - Mengelola zakat yang ada di Masjid Al-Ishlah secara amanah dan transparan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {['Zakat Penghasilan', 'Zakat Fitrah', 'Donatur Rutin'].map((item) => (
              <div key={item} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 font-bold text-slate-800 shadow-sm text-center sm:text-left">{item}</div>
            ))}
          </div>
        </div>

        {/* 02. Sosial */}
        <div className="glass-card-premium p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] group relative overflow-hidden border-l-4 sm:border-l-8 border-l-accent-pink">
          <div className="flex flex-col sm:flex-row sm:items-center mb-8 sm:mb-10 text-center sm:text-left gap-4 sm:gap-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-pink text-white rounded-2xl flex items-center justify-center sm:mr-6 mx-auto sm:mx-0 shadow-xl group-hover:rotate-12 transition-transform font-black text-xl sm:text-2xl">02</div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase">Sosial Keumatan</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['Beras Perelek', 'Beras Bersubsidi', 'Beras Gratis', 'Sembako Jemaah Sakit', 'Konsultasi Keluarga', 'Konsultasi Waris'].map((item) => (
              <div key={item} className="bg-white p-4 rounded-xl border border-slate-100 font-bold text-slate-700 shadow-sm text-center sm:text-left">{item}</div>
            ))}
          </div>
        </div>

        {/* 03. Pendidikan */}
        <div className="glass-card-premium p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] group relative overflow-hidden border-l-4 sm:border-l-8 border-l-indigo-500">
          <div className="flex flex-col sm:flex-row sm:items-center mb-8 sm:mb-10 text-center sm:text-left gap-4 sm:gap-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-500 text-white rounded-2xl flex items-center justify-center sm:mr-6 mx-auto sm:mx-0 shadow-xl group-hover:rotate-12 transition-transform font-black text-xl sm:text-2xl">03</div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase">Pendidikan</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
            <div className="text-center sm:text-left">
              <h4 className="font-black text-lg sm:text-xl text-indigo-500 mb-4 sm:mb-6 uppercase">Formal</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm font-bold border border-slate-100 text-slate-700">KOBER/PAUD Al-Ishlah</div>
                <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm font-bold border border-slate-100 text-slate-700">DTA (Diniyah Takmiliyah Awaliyah)</div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-black text-lg sm:text-xl text-accent-pink mb-4 sm:mb-6 uppercase">Non-Formal</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm font-bold border border-slate-100 text-slate-700">Maghrib Mengaji</div>
                <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm font-bold border border-slate-100 text-slate-700">Tahsin Jama'ah</div>
              </div>
            </div>
          </div>
        </div>

        {/* Donasi Kanal */}
        <section id="donasi" className="relative mt-24 sm:mt-32">
          <div className="bg-gradient-to-br from-deep-purple to-primary-purple-dark rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl p-6 sm:p-10 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent-pink/10 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="text-center mb-12 sm:mb-16 relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <h3 className="font-heading font-black text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight">Kanal Donasi</h3>
                <button onClick={() => setIsBlurred(!isBlurred)} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-md border border-white/10">
                  {isBlurred ? <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> : <EyeOff className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                </button>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium px-4">Salurkan kepedulian Anda untuk mendukung keberlangsungan dakwah Al-Ishlah.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 relative z-10">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <label className="block text-accent-pink-light text-[10px] sm:text-xs font-black uppercase tracking-widest">Pilih Kategori</label>
                  <select 
                    value={selectedKategori}
                    onChange={(e) => setSelectedKategori(e.target.value)}
                    className="w-full p-5 sm:p-6 bg-white/5 border-2 border-white/10 rounded-2xl sm:rounded-3xl text-white font-bold text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-primary-purple/50 cursor-pointer backdrop-blur-xl"
                  >
                    <option value="zis" className="bg-deep-purple">01. Bidang ZIS</option>
                    <option value="sosial" className="bg-deep-purple">02. Sosial Keumatan</option>
                    <option value="pendidikan" className="bg-deep-purple">03. Program Pendidikan</option>
                    <option value="pembangunan" className="bg-deep-purple">04. Pembangunan & Gedung</option>
                    <option value="ramadhan" className="bg-deep-purple">05. Kegiatan Ramadhan</option>
                    <option value="pengajian" className="bg-deep-purple">06. Majelis Ta'lim</option>
                    <option value="tambahan" className="bg-deep-purple">07. Tabungan Qurban / KPJ</option>
                  </select>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <label className="block text-accent-pink-light text-[10px] sm:text-xs font-black uppercase tracking-widest">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={namaDonatur}
                    onChange={(e) => setNamaDonatur(e.target.value)}
                    placeholder="Masukkan nama Anda..." 
                    className="w-full p-5 sm:p-6 bg-white/5 border-2 border-white/10 rounded-2xl sm:rounded-3xl text-white font-bold text-lg sm:text-xl placeholder-white/20 focus:outline-none focus:ring-4 focus:ring-primary-purple/50 backdrop-blur-xl"
                  />
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-white/10">
                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">Bank</p>
                      <p className={`font-black text-xl sm:text-2xl transition-all ${isBlurred ? 'blur-md' : ''}`}>{bankInfo.bank}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">No. Rekening</p>
                      <p className={`font-black text-2xl sm:text-3xl transition-all tracking-tighter ${isBlurred ? 'blur-md' : ''}`}>{bankInfo.rekening}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">Atas Nama</p>
                      <p className={`font-black text-xl sm:text-2xl transition-all uppercase ${isBlurred ? 'blur-md' : ''}`}>{bankInfo.atasNama}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className={`w-full py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl transition-all shadow-xl flex items-center justify-center gap-3 ${
                    copied ? 'bg-green-500 text-white' : 'bg-white text-deep-purple hover:bg-accent-pink hover:text-white'
                  }`}
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                  {copied ? 'Berhasil Disalin' : 'Salin Rekening'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Program;
