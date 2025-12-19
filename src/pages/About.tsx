import { Award, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion & Craft',
      description: 'Every dish is prepared with meticulous attention to detail and deep respect for culinary tradition.',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We source the finest seasonal ingredients from local farmers and specialty purveyors.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence drives us to continuously refine and perfect our craft.',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Fat Dragon opened its doors in San Francisco\'s bustling downtown, with a vision to reimagine Chinese cuisine for the modern diner.',
    },
    {
      year: '2020',
      title: 'Critical Acclaim',
      description: 'Received our first Michelin star and recognition from San Francisco Chronicle as one of the city\'s top new restaurants.',
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Renovated the space to include a private dining room and open kitchen, allowing guests to witness our culinary artistry.',
    },
    {
      year: '2025',
      title: 'New Chapter',
      description: 'Welcomed Executive Chef Michael Chen, bringing fresh perspective while honoring our founding principles.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20 lg:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
              Our Story
            </span>
            <h1 className="mb-6">Where Tradition Meets Innovation</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Fat Dragon is a celebration of Chinese culinary heritage, reimagined through a contemporary lens. We honor time-tested techniques while embracing creativity, seasonality, and the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Story Section */}
      <section className="mb-20 lg:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-dark">
              <img
                src="https://images.unsplash.com/photo-1578727401711-e9fcd2fbf270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Founded in 2018, Fat Dragon was born from a simple belief: that Chinese cuisine deserves to be experienced in its full complexity and elegance, free from cliché and stereotype.
                </p>
                <p>
                  Our approach is both reverent and bold. We study traditional techniques passed down through generations—the perfect fold of a dumpling, the precise heat of a wok, the balance of a master sauce—and then we ask: what if?
                </p>
                <p>
                  What results is cuisine that feels simultaneously familiar and surprising, rooted in tradition yet undeniably contemporary. Each dish tells a story, honoring the past while embracing the present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-jade/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-jade" size={28} />
                  </div>
                  <h4 className="mb-3">{value.title}</h4>
                  <p className="text-white/60">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Key milestones in the Fat Dragon story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 lg:pl-12 border-l-2 border-dark">
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-jade border-4 border-primary-dark" />
                  <div className="pb-8">
                    <span className="inline-block px-3 py-1 bg-jade/20 text-jade rounded-full text-sm mb-3">
                      {item.year}
                    </span>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 lg:py-32 bg-secondary-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
                Executive Chef
              </span>
              <h2 className="mb-6">Michael Chen</h2>
              <div className="space-y-4 text-white/70 mb-8">
                <p>
                  Chef Michael Chen brings over two decades of experience from kitchens across Hong Kong, Singapore, and San Francisco.
                </p>
                <p>
                  His training under Michelin-starred chefs and deep understanding of regional Chinese cuisines inform his approach to modern Chinese cooking.
                </p>
                <p>
                  "I believe in letting ingredients speak for themselves," Chef Chen explains. "The best dishes are those where technique serves the ingredient, not the other way around."
                </p>
              </div>
              <Link to="/menu">
                <Button variant="secondary" size="lg">
                  Explore His Menu
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 aspect-[3/4] rounded-2xl overflow-hidden bg-primary-dark">
              <img
                src="https://images.unsplash.com/photo-1592498546551-222538011a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzY1OTg0NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chef Michael Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Experience Fat Dragon</h2>
            <p className="text-xl text-white/70 mb-8">
              Join us for an evening of exceptional food, thoughtful service, and warm hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations">
                <Button size="lg">Make a Reservation</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
