import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { testimonials } from '../data/dummyData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="testi-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#testi-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-4">Suara Jamaah</span>
            <h2 className="text-slate-900 font-cairo mb-6">
              Apa Kata <span className="text-gradient">Mereka</span>?
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
          </motion.div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          className="pb-20 !overflow-visible"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto">
              <motion.div 
                whileHover={{ y: -12 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative h-full flex flex-col group transition-all duration-500 hover:shadow-2xl hover:border-emerald-100"
              >
                <div className="absolute top-10 right-10 text-emerald-50 text-7xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0">
                  <FaQuoteRight />
                </div>
                
                <div className="flex gap-1 text-gold-500 mb-8">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                </div>

                <p className="text-slate-600 text-lg font-medium italic mb-10 flex-1 leading-relaxed relative z-10">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-5 mt-auto relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full"></div>
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white relative z-10 shadow-lg" 
                    />
                  </div>
                  <div>
                    <h4 className="font-cairo font-black text-lg text-slate-900 leading-tight">{t.name}</h4>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
