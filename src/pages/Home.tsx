import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { DishCard } from '../components/DishCard';
import { QuickReservation } from '../components/QuickReservation';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Home() {
  const highlights = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Truffle Xiao Long Bao',
      description: 'Delicate soup dumplings infused with black truffle essence',
      price: 28,
      spicyLevel: 0,
      isVegetarian: false,
      isNew: true,
      isChefSpecial: true,
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1643343990641-4e2a1cdcadcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Spicy Dan Dan Noodles',
      description: 'Hand-pulled noodles with Sichuan peppercorn and chili oil',
      price: 24,
      spicyLevel: 3,
      isVegetarian: false,
      isNew: false,
      isChefSpecial: false,
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Crispy Eggplant',
      description: 'Wok-fried eggplant with garlic sauce and sesame',
      price: 22,
      spicyLevel: 1,
      isVegetarian: true,
      isNew: false,
      isChefSpecial: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578727401711-e9fcd2fbf270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/70 to-primary-dark" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center py-32">
          <div className="max-w-4xl mx-auto">
            {/* Small Label */}
            <div className="inline-block mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-jade border border-jade/30 px-4 py-2 rounded-full">
                Contemporary Chinese Cuisine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6">
              Where Tradition
              <br />
              Meets Innovation
            </h1>

            {/* Subtext */}
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Experience modern Chinese cuisine crafted with time-honored techniques
              and contemporary vision in an intimate, elegant setting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/reservations">
                <Button size="lg">Reserve a Table</Button>
              </Link>
              <Link to="/menu">
                <Button size="lg" variant="secondary">View Menu</Button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Today's Highlights */}
      <section className="py-20 lg:py-32 bg-primary-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
              Featured Dishes
            </span>
            <h2 className="mb-4">Today's Highlights</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our chefs curate a selection of seasonal specialties and signature dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {highlights.map((dish) => (
              <DishCard key={dish.id} {...dish} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button variant="secondary" size="lg">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Reservation */}
      <section className="py-20 lg:py-32 bg-secondary-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Book Your Experience</h2>
              <p className="text-white/60">
                Secure your table and join us for an unforgettable dining experience
              </p>
            </div>
            <QuickReservation />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 lg:py-32 bg-primary-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] rounded-2xl overflow-hidden bg-secondary-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019494408253!2d-122.41941492346655!3d37.77492971420697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="mb-8">Visit Us</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-jade" size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1 text-white/90">Location</h5>
                      <p className="text-white/60">
                        123 Main Street<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-jade" size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1 text-white/90">Hours</h5>
                      <p className="text-white/60">
                        Tuesday – Thursday: 5:30PM – 10PM<br />
                        Friday – Saturday: 5:30PM – 11PM<br />
                        Sunday: 5PM – 9:30PM<br />
                        <span className="text-white/40">Closed Mondays</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-jade/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-jade" size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1 text-white/90">Contact</h5>
                      <p className="text-white/60">
                        <a href="tel:+14155551234" className="hover:text-jade-light transition-colors">
                          (415) 555-1234
                        </a>
                        <br />
                        <a href="mailto:hello@fatdragon.com" className="hover:text-jade-light transition-colors">
                          hello@fatdragon.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
