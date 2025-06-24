import { MapPin, Clock, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function HoursLocationBar() {
  const { address, email } = {
    address: '4 Upper Borough Walls, Bath BA1 1RG',
    email: 'hello@cascarabath.com',
  };

  const hours = siteConfig.hero.hours;
  const displayHours = `${hours.weekdays.label}: ${hours.weekdays.time}, ${hours.saturday.label}: ${hours.saturday.time}, ${hours.sunday.label}: ${hours.sunday.time}`;

  return (
    <section className={`${siteConfig.styles.bgPrimary} text-white py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{displayHours}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </div>
      </div>
    </section>
  );
}
