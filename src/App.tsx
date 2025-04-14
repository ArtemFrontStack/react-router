import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
const App: React.FC = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
