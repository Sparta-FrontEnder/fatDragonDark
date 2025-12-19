import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const announcementsData: Record<string, {
  title: string;
  date: string;
  image: string;
  tags: string[];
  content: string[];
}> = {
  '1': {
    title: 'Winter Tasting Menu Now Available',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Menu', 'Seasonal'],
    content: [
      'We\'re excited to unveil our Winter Tasting Menu, a carefully curated 8-course journey through the season\'s finest ingredients and traditional Chinese culinary techniques reimagined for the modern palate.',
      'Our Executive Chef has crafted each course to showcase the depth and complexity of winter flavors, from delicate seafood preparations to rich, warming broths and masterfully executed wok dishes.',
      'The menu features rare seasonal ingredients sourced directly from specialty purveyors, including winter bamboo shoots, premium Dungeness crab, and aged rice wine from small-batch producers.',
      'Available Tuesday through Sunday evenings. Price: $165 per person. Optional wine pairing available for an additional $85. Reservations required, minimum 24 hours advance notice.',
    ],
  },
  '2': {
    title: 'Holiday Hours: Christmas & New Year',
    date: 'December 10, 2025',
    image: 'https://images.unsplash.com/photo-1759769583908-7cd4e3310ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjYwODIwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Hours', 'Holiday'],
    content: [
      'As we approach the holiday season, we want to share our special hours and offerings for Christmas and New Year celebrations.',
      'We will be closed on Christmas Day (December 25th) and New Year\'s Day (January 1st) to allow our team to celebrate with their families.',
      'However, we\'re hosting special holiday dinners on Christmas Eve (December 24th) and New Year\'s Eve (December 31st) featuring exclusive menus designed for celebration.',
      'Both evenings will feature two seatings - 5:30 PM and 8:30 PM. Reservations are filling quickly, so please book soon to secure your preferred time.',
    ],
  },
  '3': {
    title: 'Meet Our New Executive Chef',
    date: 'December 1, 2025',
    image: 'https://images.unsplash.com/photo-1592498546551-222538011a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzY1OTg0NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Team', 'Announcement'],
    content: [
      'Fat Dragon is thrilled to welcome Chef Michael Chen as our new Executive Chef, bringing over 20 years of experience from some of Asia\'s most prestigious kitchens.',
      'Chef Chen\'s culinary journey began in Hong Kong, where he trained under several Michelin-starred chefs before opening his own acclaimed restaurant in Singapore.',
      'His philosophy centers on respecting traditional techniques while embracing innovation and seasonality. "Chinese cuisine has thousands of years of wisdom," Chef Chen explains, "but that doesn\'t mean we can\'t continue to evolve and surprise."',
      'Under his leadership, our menu will continue to showcase the best of Chinese culinary traditions while incorporating his unique perspective and commitment to exceptional ingredients.',
    ],
  },
  '4': {
    title: 'Dim Sum Brunch Service Returns',
    date: 'November 28, 2025',
    image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Menu', 'Service'],
    content: [
      'By popular demand, we\'re bringing back our weekend dim sum brunch service starting January 2026!',
      'Every Saturday and Sunday from 11:00 AM to 3:00 PM, enjoy an extensive selection of handmade dumplings, buns, and small plates prepared fresh to order.',
      'Our dim sum menu features both traditional favorites and creative new additions, all made in-house by our skilled dim sum chefs.',
      'Walk-ins welcome, but reservations are strongly encouraged for parties of 4 or more. Weekend brunch is priced at $45 per person with unlimited dim sum selections.',
    ],
  },
  '5': {
    title: 'Private Dining Room Now Bookable',
    date: 'November 20, 2025',
    image: 'https://images.unsplash.com/photo-1578727401711-e9fcd2fbf270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Events', 'Private Dining'],
    content: [
      'Our newly renovated private dining room is now available for bookings, perfect for intimate celebrations, corporate events, and special occasions.',
      'The space accommodates up to 20 guests and features contemporary design elements with subtle nods to traditional Chinese aesthetics.',
      'We offer customizable menu options including our signature dishes, family-style presentations, and multi-course tasting menus. Our events team will work with you to create the perfect experience.',
      'For inquiries and bookings, please contact our events coordinator at events@fatdragon.com or call (415) 555-1234.',
    ],
  },
  '6': {
    title: 'Wine Pairing Dinner Series',
    date: 'November 15, 2025',
    image: 'https://images.unsplash.com/photo-1601831753677-01f960be19eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdGVhJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY1OTc1NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Events', 'Wine'],
    content: [
      'Join us for our inaugural Wine Pairing Dinner Series, a quarterly event showcasing exceptional wines thoughtfully matched with our seasonal menu.',
      'Our sommelier has curated a selection of wines from around the world, each chosen to complement and enhance the complex flavors of Chinese cuisine.',
      'The first dinner will take place on January 20th, 2026, featuring a 6-course menu paired with wines from boutique producers. Limited to 30 guests.',
      'Tickets are $195 per person and include all courses, wine pairings, and gratuity. Reserve your spot at events@fatdragon.com.',
    ],
  },
};

export function AnnouncementDetail() {
  const { id } = useParams<{ id: string }>();
  const announcement = id ? announcementsData[id] : null;

  if (!announcement) {
    return (
      <div className="min-h-screen pt-24 lg:pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-4">Announcement Not Found</h2>
          <Link to="/announcements">
            <Button variant="secondary">Back to Announcements</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <Link
          to="/announcements"
          className="inline-flex items-center gap-2 text-white/60 hover:text-jade-light transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Announcements
        </Link>

        {/* Hero Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-secondary-dark">
          <img
            src={announcement.image}
            alt={announcement.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {announcement.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title & Meta */}
        <h1 className="mb-4">{announcement.title}</h1>
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-dark">
          <div className="flex items-center gap-2 text-white/60">
            <Calendar size={16} />
            <span>{announcement.date}</span>
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-jade-light transition-colors">
            <Share2 size={16} />
            Share
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          {announcement.content.map((paragraph, index) => (
            <p key={index} className="text-white/80 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-secondary-dark border border-dark rounded-2xl p-8 text-center">
          <h4 className="mb-3">Ready to Experience It?</h4>
          <p className="text-white/60 mb-6">
            Make a reservation to join us for this special offering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations">
              <Button size="lg">Make a Reservation</Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="secondary">View Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
