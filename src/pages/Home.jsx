import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sections
import Hero from '../sections/Hero';
import About from '../sections/About';
import Programs from '../sections/Programs';
import PrayerSchedule from '../sections/PrayerSchedule';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import Articles from '../sections/Articles';
import Donation from '../sections/Donation';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div data-aos="fade">
        <Hero />
      </div>

      {/* Prayer Schedule Section */}
      <div data-aos="fade-up">
        <PrayerSchedule />
      </div>

      {/* About Section */}
      <div data-aos="fade-up">
        <About />
      </div>

      {/* Programs Section */}
      <div data-aos="fade-up">
        <Programs />
      </div>

      {/* Gallery Section */}
      <div data-aos="fade-up">
        <Gallery />
      </div>

      {/* Donation Section */}
      <div data-aos="fade-up">
        <Donation />
      </div>

      {/* Testimonials Section */}
      <div data-aos="fade-up">
        <Testimonials />
      </div>

      {/* Articles Section */}
      <div data-aos="fade-up">
        <Articles />
      </div>

      {/* Mobile Bottom Nav (Optional but recommended for mobile-first) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
        <div className="bg-emerald-900/90 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 flex justify-between items-center shadow-2xl">
          <button className="text-white flex flex-col items-center gap-1">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </button>
          <a href="/jadwal" className="text-emerald-300 flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest">Jadwal</span>
          </a>
          <a href="/program#donasi" className="bg-gold-500 text-white p-3 rounded-full -mt-10 shadow-xl shadow-gold-500/40">
            <div className="text-xs font-black uppercase">Donasi</div>
          </a>
          <a href="/program" className="text-emerald-300 flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest">Program</span>
          </a>
          <a href="/kontak" className="text-emerald-300 flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest">Kontak</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;

