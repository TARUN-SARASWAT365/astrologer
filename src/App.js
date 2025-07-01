// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Horoscope from './pages/Horoscope';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/horoscope"  element={<Horoscope sign="leo"  />} />
      </Routes>
    </>
  );
}

export default App;
