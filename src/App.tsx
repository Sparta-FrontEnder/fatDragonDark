import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Reservations } from './pages/Reservations';
import { Announcements } from './pages/Announcements';
import { AnnouncementDetail } from './pages/AnnouncementDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-dark text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
