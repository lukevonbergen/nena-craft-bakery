'use client';

import { MapPin, Clock, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function HoursLocationBar() {
  const { address, email } = siteConfig.hoursLocation;
  const hours = siteConfig.hero.hours;

  // Get UK time
  const now = new Date(
    new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })
  );
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday

  // Select today’s hours
  const today =
    day === 0
      ? hours.sunday
      : day === 6
      ? hours.saturday
      : hours.weekdays;

  // Parse opening and closing time (format must be HH:MM–HH:MM)
  const [openTimeStr, closeTimeStr] = today.time.split('–');
  const [openHour, openMinute] = openTimeStr.split(':').map(Number);
  const [closeHour, closeMinute] = closeTimeStr.split(':').map(Number);

  const openTime = new Date(now);
  openTime.setHours(openHour, openMinute, 0);

  const closeTime = new Date(now);
  closeTime.setHours(closeHour, closeMinute, 0);

  const isOpen = now >= openTime && now < closeTime;

  const statusMessage = isOpen
    ? `✅ Open now until ${closeTimeStr}`
    : `❌ Closed – opens at ${openTimeStr}`;

  return (
    <section className={`${siteConfig.styles.bgPrimary} text-white py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{statusMessage}</span>
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