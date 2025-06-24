'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function AboutUs() {
  const { heading, subheading, features } = siteConfig.about;
  const { textPrimary, textSubtle, textMuted, bgLight } = siteConfig.styles;

  const instagramPosts = [
    'https://www.instagram.com/cascarabath/p/DLPnZQKsafK/',
    'https://www.instagram.com/cascarabath/p/DKZpqgusYSD/',
    'https://www.instagram.com/cascarabath/p/DHgBBwDtal4/',
  ];

  // Load the Instagram embed script
  useEffect(() => {
    const scriptExists = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!scriptExists) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, []);

  return (
    <section className={`py-24 px-6 md:px-12 ${bgLight}`}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${textPrimary}`}>
          {heading}
        </h2>
        <p className={`text-lg md:text-xl ${textSubtle}`}>
          {subheading}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-200"
          >
            <div className="mb-4">
              <div className="w-10 h-10 rounded-full bg-[#78ADA5] opacity-80 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold">
                {feature.title.charAt(0)}
              </div>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
              {feature.title}
            </h3>
            <p className={`text-sm ${textMuted}`}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* Instagram Feed Section */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold text-center mb-8">See What We’re Up To</h2>
        <div className="overflow-x-auto whitespace-nowrap flex gap-6 pb-4">
          {instagramPosts.map((url, idx) => (
            <div
              key={idx}
              className="min-w-[320px] max-w-[400px] flex-shrink-0 rounded overflow-hidden"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: '#fff', border: 0, margin: 0, padding: 0 }}
              ></blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}