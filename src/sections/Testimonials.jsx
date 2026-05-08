import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../data/dummyData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase mb-4 block">Testimoni</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight font-cairo">
            Kata <span className="text-gradient">Jamaah</span> Kami
          </h2>
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
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative h-full flex flex-col"
              >
                <div className="absolute top-10 right-10 text-emerald-100 text-6xl opacity-50">
                  <FaQuoteLeft />
                </div>
                
                <div className="flex gap-1 text-gold-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>

                <p className="text-slate-600 text-lg italic mb-8 flex-1 leading-relaxed">
                  "{t.comment}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style for Swiper Pagination */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #0F766E;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 10px;
          opacity: 1;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
