import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from './Select';
import { Button } from './Button';
import { Calendar, Clock, Users } from 'lucide-react';

export function QuickReservation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '2',
  });

  const timeSlots = [
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
  ];

  const partySizes = Array.from({ length: 10 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/reservations', { state: formData });
  };

  return (
    <div className="bg-secondary-dark border border-dark rounded-2xl p-6 lg:p-8">
      <h4 className="mb-6">Quick Reservation</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
              <Calendar size={16} />
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="w-full px-4 py-3 bg-transparent border border-dark rounded-xl text-white focus:border-jade focus:outline-none transition-colors"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
              <Clock size={16} />
              Time
            </label>
            <Select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              options={[{ value: '', label: 'Select time' }, ...timeSlots]}
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
              <Users size={16} />
              Party Size
            </label>
            <Select
              value={formData.partySize}
              onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
              options={partySizes}
              required
            />
          </div>
        </div>

        <Button type="submit" fullWidth size="lg">
          Find Available Times
        </Button>
      </form>
    </div>
  );
}
