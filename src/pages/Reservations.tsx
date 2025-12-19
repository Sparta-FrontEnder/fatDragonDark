import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';
import { CheckCircle2, Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react';

export function Reservations() {
  const location = useLocation();
  const quickReservationData = location.state || {};

  const [step, setStep] = useState<'form' | 'time-selection' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    date: quickReservationData.date || '',
    time: quickReservationData.time || '',
    partySize: quickReservationData.partySize || '2',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const partySizes = Array.from({ length: 10 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.date && formData.time) {
      setStep('confirmation');
    } else {
      setStep('time-selection');
    }
  };

  const selectTime = (time: string) => {
    setFormData({ ...formData, time });
  };

  const confirmReservation = () => {
    setStep('confirmation');
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {step === 'form' && (
          <>
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-jade/80 mb-4 block">
                Book Your Table
              </span>
              <h1 className="mb-4">Reservations</h1>
              <p className="text-white/60 max-w-2xl mx-auto">
                Join us for an unforgettable dining experience. Reserve your table below.
              </p>
            </div>

            {/* Form */}
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-secondary-dark border border-dark rounded-2xl p-6 lg:p-10">
                <div className="space-y-6">
                  {/* Date & Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
                        <Calendar size={16} />
                        Date *
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
                        Time *
                      </label>
                      <Select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        options={[
                          { value: '', label: 'Select time' },
                          { value: '17:30', label: '5:30 PM' },
                          { value: '18:00', label: '6:00 PM' },
                          { value: '18:30', label: '6:30 PM' },
                          { value: '19:00', label: '7:00 PM' },
                          { value: '19:30', label: '7:30 PM' },
                          { value: '20:00', label: '8:00 PM' },
                          { value: '20:30', label: '8:30 PM' },
                          { value: '21:00', label: '9:00 PM' },
                          { value: '21:30', label: '9:30 PM' },
                        ]}
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
                        <Users size={16} />
                        Party Size *
                      </label>
                      <Select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        options={partySizes}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-6 border-t border-dark">
                    <h5 className="mb-6">Contact Information</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <User size={16} />
                          First Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <User size={16} />
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Mail size={16} />
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm text-white/60 mb-2">
                          <Phone size={16} />
                          Phone *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="pt-6 border-t border-dark">
                    <label className="text-sm text-white/60 mb-2 block">
                      Special Requests
                    </label>
                    <Textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Dietary restrictions, allergies, special occasions..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" fullWidth size="lg">
                      Confirm Reservation
                    </Button>
                  </div>
                </div>
              </form>

              {/* Policies */}
              <div className="mt-8 p-6 bg-secondary-dark/50 border border-dark rounded-xl">
                <h6 className="mb-3 text-white/90">Reservation Policy</h6>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Reservations are held for 15 minutes past the booking time</li>
                  <li>• Cancellations must be made at least 24 hours in advance</li>
                  <li>• Large parties (6+ guests) require a credit card to hold the reservation</li>
                  <li>• Please call us directly for same-day reservations</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {step === 'time-selection' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Select Your Time</h2>
              <p className="text-white/60">
                Available times for {formData.date} • Party of {formData.partySize}
              </p>
            </div>

            <div className="bg-secondary-dark border border-dark rounded-2xl p-6 lg:p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      selectTime(time);
                      confirmReservation();
                    }}
                    className={`px-6 py-4 rounded-xl border transition-all ${
                      formData.time === time
                        ? 'bg-jade border-jade text-white'
                        : 'bg-transparent border-dark text-white/80 hover:border-jade/50'
                    }`}
                  >
                    {new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => setStep('form')}
                >
                  Back to Form
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-jade/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-jade" size={48} />
              </div>
              <h2 className="mb-4">Reservation Confirmed</h2>
              <p className="text-white/60">
                Your table has been reserved. A confirmation email has been sent to {formData.email}
              </p>
            </div>

            <div className="bg-secondary-dark border border-dark rounded-2xl p-6 lg:p-10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-dark">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">Date</span>
                    </div>
                    <p className="font-medium">{formData.date}</p>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 mb-2">
                      <Clock size={16} />
                      <span className="text-sm">Time</span>
                    </div>
                    <p className="font-medium">
                      {new Date(`2000-01-01T${formData.time}`).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                      })}
                    </p>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 mb-2">
                      <Users size={16} />
                      <span className="text-sm">Party Size</span>
                    </div>
                    <p className="font-medium">{formData.partySize} Guests</p>
                  </div>
                </div>

                <div>
                  <h6 className="mb-3 text-white/90">Guest Information</h6>
                  <div className="space-y-2 text-white/60">
                    <p>
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p>{formData.email}</p>
                    <p>{formData.phone}</p>
                    {formData.specialRequests && (
                      <div className="pt-3">
                        <p className="text-sm text-white/40">Special Requests:</p>
                        <p className="mt-1">{formData.specialRequests}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-dark">
                  <h6 className="mb-3 text-white/90">What to Expect</h6>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Please arrive 10 minutes before your reservation time</li>
                    <li>• Our team will have your table ready upon arrival</li>
                    <li>• Check your email for a QR code to expedite check-in</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button variant="secondary" fullWidth onClick={() => window.location.href = '/menu'}>
                    View Menu
                  </Button>
                  <Button fullWidth onClick={() => window.location.href = '/'}>
                    Return Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
