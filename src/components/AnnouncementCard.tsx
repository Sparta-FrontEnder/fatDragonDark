import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Badge } from './Badge';

interface AnnouncementCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

export function AnnouncementCard({
  id,
  title,
  excerpt,
  date,
  image,
  tags = [],
  featured = false,
}: AnnouncementCardProps) {
  const cardClass = featured
    ? 'lg:col-span-2 lg:row-span-2'
    : '';

  return (
    <Link
      to={`/announcements/${id}`}
      className={`group block ${cardClass}`}
    >
      <div className="h-full border border-dark rounded-2xl overflow-hidden transition-all duration-300 hover:border-jade/50 hover:shadow-lg hover:shadow-jade/10">
        {image && (
          <div className={`relative overflow-hidden bg-secondary-dark ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60" />
          </div>
        )}

        <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className={`mb-3 group-hover:text-jade-light transition-colors ${featured ? '' : 'text-xl'}`}>
            {title}
          </h3>

          {/* Excerpt */}
          <p className={`text-white/60 mb-4 ${featured ? 'text-base' : 'text-sm line-clamp-2'}`}>
            {excerpt}
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-white/40">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
