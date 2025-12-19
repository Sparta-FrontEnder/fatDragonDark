import { AnnouncementCard } from '../components/AnnouncementCard';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';

const announcements = [
  {
    id: '1',
    title: 'Winter Tasting Menu Now Available',
    excerpt: 'Experience our new 8-course winter tasting menu featuring seasonal ingredients and traditional cooking techniques reimagined for the modern palate.',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Menu', 'Seasonal'],
    featured: true,
  },
  {
    id: '2',
    title: 'Holiday Hours: Christmas & New Year',
    excerpt: 'We will be closed on December 25th and January 1st. Join us for special holiday menus on Christmas Eve and New Year\'s Eve.',
    date: 'December 10, 2025',
    image: 'https://images.unsplash.com/photo-1759769583908-7cd4e3310ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjYwODIwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Hours', 'Holiday'],
    featured: false,
  },
  {
    id: '3',
    title: 'Meet Our New Executive Chef',
    excerpt: 'We\'re thrilled to welcome Chef Michael Chen, formerly of Michelin-starred restaurants in Hong Kong and Singapore.',
    date: 'December 1, 2025',
    image: 'https://images.unsplash.com/photo-1592498546551-222538011a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzY1OTg0NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Team', 'Announcement'],
    featured: false,
  },
  {
    id: '4',
    title: 'Dim Sum Brunch Service Returns',
    excerpt: 'Starting January, enjoy our weekend dim sum brunch service every Saturday and Sunday from 11AM to 3PM.',
    date: 'November 28, 2025',
    image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Menu', 'Service'],
    featured: false,
  },
  {
    id: '5',
    title: 'Private Dining Room Now Bookable',
    excerpt: 'Host your next event in our newly renovated private dining room, accommodating up to 20 guests with custom menu options.',
    date: 'November 20, 2025',
    image: 'https://images.unsplash.com/photo-1578727401711-e9fcd2fbf270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Events', 'Private Dining'],
    featured: false,
  },
  {
    id: '6',
    title: 'Wine Pairing Dinner Series',
    excerpt: 'Join us for quarterly wine pairing dinners featuring carefully selected wines to complement our seasonal menu.',
    date: 'November 15, 2025',
    image: 'https://images.unsplash.com/photo-1601831753677-01f960be19eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdGVhJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY1OTc1NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Events', 'Wine'],
    featured: false,
  },
];

export function Announcements() {
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

  const featuredPost = announcements.find((a) => a.featured);
  const regularPosts = announcements.filter((a) => !a.featured);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
            Latest Updates
          </span>
          <h1 className="mb-4">Announcements</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Stay informed about our latest menu additions, special events, and restaurant updates
          </p>
        </div>

        {/* Subscribe Module */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-secondary-dark border border-dark rounded-2xl p-6 lg:p-8 text-center">
            <h4 className="mb-3">Never Miss an Update</h4>
            <p className="text-white/60 mb-6">
              Subscribe to receive announcements about new dishes, events, and special offers
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={subscribed}
                className="flex-1"
              />
              <Button type="submit" disabled={subscribed} className="whitespace-nowrap">
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <AnnouncementCard {...featuredPost} />
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((announcement) => (
            <AnnouncementCard key={announcement.id} {...announcement} />
          ))}
        </div>
      </div>
    </div>
  );
}
