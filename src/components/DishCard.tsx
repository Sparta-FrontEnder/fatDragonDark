import { Flame, Leaf } from 'lucide-react';
import { Badge } from './Badge';

interface DishCardProps {
  image: string;
  name: string;
  description?: string;
  price: number;
  spicyLevel?: number;
  isVegetarian?: boolean;
  isNew?: boolean;
  isChefSpecial?: boolean;
  onViewDetails?: () => void;
}

export function DishCard({
  image,
  name,
  description,
  price,
  spicyLevel = 0,
  isVegetarian = false,
  isNew = false,
  isChefSpecial = false,
  onViewDetails,
}: DishCardProps) {
  return (
    <div
      onClick={onViewDetails}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-secondary-dark">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && <Badge variant="new">New</Badge>}
          {isChefSpecial && (
            <Badge variant="default">Chef's Special</Badge>
          )}
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-jade px-4 py-2 rounded-full">
            <span className="text-sm">${price}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="flex-1">{name}</h4>
          <div className="flex items-center gap-1.5 mt-1">
            {spicyLevel > 0 && (
              <div className="flex items-center gap-0.5">
                {Array.from({ length: spicyLevel }).map((_, i) => (
                  <Flame key={i} size={14} className="text-chili fill-chili" />
                ))}
              </div>
            )}
            {isVegetarian && (
              <Leaf size={14} className="text-jade fill-jade" />
            )}
          </div>
        </div>

        {description && (
          <p className="text-sm text-white/60 mb-3 line-clamp-2">{description}</p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-jade">${price}</span>
        </div>
      </div>
    </div>
  );
}
