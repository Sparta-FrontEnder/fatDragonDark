import { useState } from 'react';
import { DishCard } from '../components/DishCard';
import { Tag } from '../components/Tag';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Search, Download, Flame, Leaf, X } from 'lucide-react';

interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  spicyLevel: number;
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isChefSpecial: boolean;
  image: string;
}

const menuData: Dish[] = [
  // Appetizers
  {
    id: 'app-1',
    name: 'Truffle Xiao Long Bao',
    description: 'Delicate soup dumplings infused with black truffle essence and pork',
    price: 28,
    category: 'Appetizers',
    spicyLevel: 0,
    isVegetarian: false,
    isGlutenFree: false,
    isNew: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'app-2',
    name: 'Crispy Spring Rolls',
    description: 'Hand-wrapped vegetables with sweet chili dipping sauce',
    price: 16,
    category: 'Appetizers',
    spicyLevel: 1,
    isVegetarian: true,
    isGlutenFree: false,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1719454261026-fc7f0ffc1835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYXBwZXRpemVyJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzY2MDgxOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'app-3',
    name: 'Spicy Wontons in Chili Oil',
    description: 'Silky wontons swimming in aromatic Sichuan chili oil',
    price: 18,
    category: 'Appetizers',
    spicyLevel: 3,
    isVegetarian: false,
    isGlutenFree: true,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Dim Sum
  {
    id: 'dim-1',
    name: 'Har Gow (Shrimp Dumplings)',
    description: 'Translucent dumplings filled with fresh shrimp and bamboo shoots',
    price: 22,
    category: 'Dim Sum',
    spicyLevel: 0,
    isVegetarian: false,
    isGlutenFree: false,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'dim-2',
    name: 'Siu Mai',
    description: 'Open-faced pork and shrimp dumplings with mushroom',
    price: 20,
    category: 'Dim Sum',
    spicyLevel: 0,
    isVegetarian: false,
    isGlutenFree: false,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3MlMjBmb29kfGVufDF8fHx8MTc2NjA4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Noodles
  {
    id: 'noodle-1',
    name: 'Spicy Dan Dan Noodles',
    description: 'Hand-pulled noodles with Sichuan peppercorn, chili oil, and minced pork',
    price: 24,
    category: 'Noodles',
    spicyLevel: 3,
    isVegetarian: false,
    isGlutenFree: false,
    isNew: false,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1643343990641-4e2a1cdcadcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'noodle-2',
    name: 'Seafood Rice Noodles',
    description: 'Silky rice noodles with shrimp, scallops, and seasonal vegetables',
    price: 26,
    category: 'Noodles',
    spicyLevel: 0,
    isVegetarian: false,
    isGlutenFree: true,
    isNew: true,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1643343990641-4e2a1cdcadcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsJTIwZGFya3xlbnwxfHx8fDE3NjYwODE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Wok
  {
    id: 'wok-1',
    name: 'Mapo Tofu',
    description: 'Silken tofu in spicy Sichuan sauce with pork and fermented beans',
    price: 22,
    category: 'Wok',
    spicyLevel: 3,
    isVegetarian: false,
    isGlutenFree: true,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'wok-2',
    name: 'Kung Pao Chicken',
    description: 'Classic Sichuan stir-fry with peanuts, dried chili, and vegetables',
    price: 26,
    category: 'Wok',
    spicyLevel: 2,
    isVegetarian: false,
    isGlutenFree: true,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Chef Specials
  {
    id: 'special-1',
    name: 'Peking Duck (Half)',
    description: 'Crispy skin duck served with house-made pancakes, scallions, and hoisin',
    price: 58,
    category: 'Chef Specials',
    spicyLevel: 0,
    isVegetarian: false,
    isGlutenFree: false,
    isNew: false,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'special-2',
    name: 'Braised Short Rib',
    description: 'Slow-braised beef short rib in aromatic five-spice sauce',
    price: 48,
    category: 'Chef Specials',
    spicyLevel: 0,
    isVegetarian: false,
    isGlutenFree: true,
    isNew: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGlzaCUyMHdvayUyMGZvb2R8ZW58MXx8fHwxNzY2MDgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Vegetarian
  {
    id: 'veg-1',
    name: 'Crispy Eggplant',
    description: 'Wok-fried Japanese eggplant with garlic sauce and sesame',
    price: 22,
    category: 'Vegetarian',
    spicyLevel: 1,
    isVegetarian: true,
    isGlutenFree: true,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1751151497803-baad38515fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlyJTIwZnJ5JTIwdmVnZXRhYmxlcyUyMHdva3xlbnwxfHx8fDE3NjYwODE5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'veg-2',
    name: 'Buddha\'s Delight',
    description: 'Seasonal vegetables, tofu, and mushrooms in light sauce',
    price: 24,
    category: 'Vegetarian',
    spicyLevel: 0,
    isVegetarian: true,
    isGlutenFree: true,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1751151497803-baad38515fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlyJTIwZnJ5JTIwdmVnZXRhYmxlcyUyMHdva3xlbnwxfHx8fDE3NjYwODE5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  // Desserts
  {
    id: 'dessert-1',
    name: 'Black Sesame Mochi',
    description: 'Soft mochi filled with black sesame paste, served with tea ice cream',
    price: 14,
    category: 'Desserts',
    spicyLevel: 0,
    isVegetarian: true,
    isGlutenFree: true,
    isNew: false,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1711155592550-8f313696f797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGVzc2VydCUyMG1vY2hpfGVufDF8fHx8MTc2NjA4MTk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'dessert-2',
    name: 'Mango Pudding',
    description: 'Silky mango pudding with fresh fruit and coconut cream',
    price: 12,
    category: 'Desserts',
    spicyLevel: 0,
    isVegetarian: true,
    isGlutenFree: true,
    isNew: true,
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1711155592550-8f313696f797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGVzc2VydCUyMG1vY2hpfGVufDF8fHx8MTc2NjA4MTk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const categories = [
  'All',
  'Appetizers',
  'Dim Sum',
  'Noodles',
  'Wok',
  'Chef Specials',
  'Vegetarian',
  'Desserts',
];

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const toggleFilter = (filter: string) => {
    setFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const filteredDishes = menuData.filter((dish) => {
    const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters =
      filters.length === 0 ||
      (filters.includes('spicy') && dish.spicyLevel > 0) ||
      (filters.includes('vegetarian') && dish.isVegetarian) ||
      (filters.includes('gluten-free') && dish.isGlutenFree);

    return matchesCategory && matchesSearch && matchesFilters;
  });

  const chefRecommendations = menuData.filter((dish) => dish.isChefSpecial).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="text-center mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
              Our Selection
            </span>
            <h1 className="mb-4">Menu</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              A curated selection of traditional and contemporary Chinese dishes
            </p>
          </div>

          {/* Search and Download */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary-dark border border-dark rounded-xl text-white placeholder:text-white/30 focus:border-jade focus:outline-none transition-colors"
              />
            </div>
            <Button variant="secondary" className="gap-2 whitespace-nowrap">
              <Download size={18} />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 items-center justify-center mb-6">
            <button
              onClick={() => toggleFilter('spicy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                filters.includes('spicy')
                  ? 'bg-chili text-white'
                  : 'bg-transparent border border-dark text-white/60 hover:border-chili/50'
              }`}
            >
              <Flame size={16} />
              Spicy
            </button>
            <button
              onClick={() => toggleFilter('vegetarian')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                filters.includes('vegetarian')
                  ? 'bg-jade text-white'
                  : 'bg-transparent border border-dark text-white/60 hover:border-jade/50'
              }`}
            >
              <Leaf size={16} />
              Vegetarian
            </button>
            <button
              onClick={() => toggleFilter('gluten-free')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                filters.includes('gluten-free')
                  ? 'bg-jade text-white'
                  : 'bg-transparent border border-dark text-white/60 hover:border-jade/50'
              }`}
            >
              GF
            </button>
            {filters.length > 0 && (
              <button
                onClick={() => setFilters([])}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/60 hover:text-white transition-colors"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Tag
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Tag>
            ))}
          </div>
        </div>

        {/* Chef's Recommendations */}
        {selectedCategory === 'All' && searchQuery === '' && filters.length === 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="mb-2">Chef's Recommendations</h3>
              <p className="text-white/60">Our signature dishes, handpicked by Chef</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {chefRecommendations.map((dish) => (
                <DishCard
                  key={dish.id}
                  {...dish}
                  onViewDetails={() => setSelectedDish(dish)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div>
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  {...dish}
                  onViewDetails={() => setSelectedDish(dish)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/40">No dishes found matching your criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Dish Detail Modal */}
      <Modal
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
      >
        {selectedDish && (
          <div>
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mb-3">{selectedDish.name}</h3>
            <p className="text-white/60 mb-6">{selectedDish.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl text-jade">${selectedDish.price}</span>
              <div className="flex items-center gap-2">
                {selectedDish.spicyLevel > 0 && (
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: selectedDish.spicyLevel }).map((_, i) => (
                      <Flame key={i} size={16} className="text-chili fill-chili" />
                    ))}
                  </div>
                )}
                {selectedDish.isVegetarian && <Leaf size={16} className="text-jade fill-jade" />}
              </div>
            </div>
            <Button fullWidth size="lg" onClick={() => window.location.href = '/reservations'}>
              Reserve a Table
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}
