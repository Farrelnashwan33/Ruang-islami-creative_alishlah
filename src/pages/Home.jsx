import React from 'react';

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
  return (
    <main className="overflow-x-hidden bg-white">
      <Hero />
      <PrayerSchedule />
      <About />
      <Programs />
      <Gallery />
      <Donation />
      <Testimonials />
      <Articles />
    </main>
  );
};

export default Home;

