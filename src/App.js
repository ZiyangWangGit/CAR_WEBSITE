// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import TermOfUse from './routes/footer_routes/TermOfUse';
import PrivacyPolicy from './routes/footer_routes/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/term_of_use" element={<TermOfUse />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}
