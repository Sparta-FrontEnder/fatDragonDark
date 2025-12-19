import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-secondary-dark border-t border-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-3xl tracking-tight">Fat Dragon</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">
                  Contemporary Chinese
                </span>
              </div>
            </Link>
            <p className="text-white/60 max-w-sm">
              Modern Chinese cuisine crafted with traditional techniques and contemporary vision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h6 className="text-sm tracking-wider uppercase text-white/40 mb-4">Navigate</h6>
            <div className="space-y-3">
              <Link to="/menu" className="block text-white/80 hover:text-jade-light transition-colors">
                Menu
              </Link>
              <Link to="/reservations" className="block text-white/80 hover:text-jade-light transition-colors">
                Reservations
              </Link>
              <Link to="/announcements" className="block text-white/80 hover:text-jade-light transition-colors">
                Announcements
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-jade-light transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-jade-light transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h6 className="text-sm tracking-wider uppercase text-white/40 mb-4">Visit Us</h6>
            <div className="space-y-3 text-white/80">
              <p>123 Main Street<br />San Francisco, CA 94102</p>
              <p>
                <a href="tel:+14155551234" className="hover:text-jade-light transition-colors">
                  (415) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:hello@fatdragon.com" className="hover:text-jade-light transition-colors">
                  hello@fatdragon.com
                </a>
              </p>
              <div className="pt-2">
                <p className="text-sm">Tue–Thu: 5:30PM – 10PM</p>
                <p className="text-sm">Fri–Sat: 5:30PM – 11PM</p>
                <p className="text-sm">Sun: 5PM – 9:30PM</p>
                <p className="text-sm text-white/50">Closed Mondays</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h6 className="text-sm tracking-wider uppercase text-white/40 mb-4">Stay Updated</h6>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for menu updates, special events, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={subscribed}
              />
              <Button type="submit" variant="secondary" fullWidth disabled={subscribed}>
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-dark flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-jade-light transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-jade-light transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:hello@fatdragon.com"
              className="text-white/60 hover:text-jade-light transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-white/40">
            © 2025 Fat Dragon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
