import { Clock, MapPin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

function getTodayHours() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday

  if (day === 0) return siteConfig.hero.hours.sunday;
  if (day === 6) return siteConfig.hero.hours.saturday;
  return siteConfig.hero.hours.weekdays;
}

function isOpen(now, openTime, closeTime) {
  const [openHour, openMin] = openTime.split(':').map(Number);
  const [closeHour, closeMin] = closeTime.split(':').map(Number);

  const open = new Date(now);
  open.setHours(openHour, openMin, 0);

  const close = new Date(now);
  close.setHours(closeHour, closeMin, 0);

  return now >= open && now <= close;
}

export default function HoursLocationBar() {
  const { email, address } = siteConfig.hoursLocation;
  const today = getTodayHours();

  const now = new Date();
  const openNow = isOpen(now, today.time.split('–')[0], today.time.split('–')[1]);

  const statusText = openNow
    ? `Open now until ${today.time.split('–')[1]}`
    : `Closed – Opens at ${today.time.split('–')[0]}`;

  return (
    <section className={`${siteConfig.styles.bgPrimary} text-white py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{statusText}</span>
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