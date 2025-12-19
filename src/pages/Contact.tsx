import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Select } from '../components/Select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    { value: '', label: 'Select a subject' },
    { value: 'reservation', label: 'Reservation Inquiry' },
    { value: 'event', label: 'Private Event / Catering' },
    { value: 'menu', label: 'Menu Question' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
            Get In Touch
          </span>
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a question or special request? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Contact Form */}
          <div>
            <h3 className="mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name *"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Email *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <Select
                label="Subject *"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                options={subjects}
                required
              />

              <Textarea
                label="Message *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us more about your inquiry..."
                rows={6}
                required
              />

              <Button type="submit" fullWidth size="lg" disabled={submitted}>
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6">Visit Us</h3>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-jade" size={20} />
                </div>
                <div>
                  <h5 className="mb-2 text-white/90">Location</h5>
                  <p className="text-white/60">
                    123 Main Street<br />
                    San Francisco, CA 94102
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jade hover:text-jade-light transition-colors text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-jade" size={20} />
                </div>
                <div>
                  <h5 className="mb-2 text-white/90">Phone</h5>
                  <p className="text-white/60">
                    <a href="tel:+14155551234" className="hover:text-jade-light transition-colors">
                      (415) 555-1234
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-jade" size={20} />
                </div>
                <div>
                  <h5 className="mb-2 text-white/90">Email</h5>
                  <p className="text-white/60">
                    <a href="mailto:hello@fatdragon.com" className="hover:text-jade-light transition-colors">
                      hello@fatdragon.com
                    </a>
                  </p>
                  <p className="text-white/60">
                    <a href="mailto:events@fatdragon.com" className="hover:text-jade-light transition-colors">
                      events@fatdragon.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-jade" size={20} />
                </div>
                <div>
                  <h5 className="mb-2 text-white/90">Hours</h5>
                  <div className="text-white/60 space-y-1">
                    <p>Tuesday – Thursday: 5:30PM – 10PM</p>
                    <p>Friday – Saturday: 5:30PM – 11PM</p>
                    <p>Sunday: 5PM – 9:30PM</p>
                    <p className="text-white/40">Closed Mondays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-secondary-dark border border-dark rounded-2xl p-6">
              <h5 className="mb-4">Quick Links</h5>
              <div className="space-y-3">
                <a
                  href="/reservations"
                  className="block text-white/80 hover:text-jade-light transition-colors"
                >
                  Make a Reservation →
                </a>
                <a
                  href="/menu"
                  className="block text-white/80 hover:text-jade-light transition-colors"
                >
                  View Menu →
                </a>
                <a
                  href="/announcements"
                  className="block text-white/80 hover:text-jade-light transition-colors"
                >
                  Latest Updates →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-secondary-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019494408253!2d-122.41941492346655!3d37.77492971420697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
