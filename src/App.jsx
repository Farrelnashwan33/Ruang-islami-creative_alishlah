import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Program from './pages/Program';
import JadwalSholat from './pages/JadwalSholat';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Rislah from './pages/Rislah';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/jadwal" element={<JadwalSholat />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/rishlah" element={<Rislah />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
