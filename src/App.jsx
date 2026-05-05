import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Monoliths from './components/Monoliths';
import Experiments from './components/Experiments';
import InventionLab from './components/InventionLab';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Monoliths />
      <Experiments />
      <InventionLab />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
