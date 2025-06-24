// config/siteConfig.js
export const siteConfig = {
  siteName: 'Cascara',
  metadata: {
    base: {
      title: 'Cascara Bath – Plant-Based Café & Specialty Coffee',
      description:
        'Cascara is a fully vegan café in the heart of Bath, serving specialty coffee, plant-based brunch, smoothies, juices and homemade baked goods.',
      icons: { icon: '/favicon.ico' },
    },
    about: {
      title: 'About | Cascara Bath',
      description:
        'Discover Cascara – Bath’s fully vegan café offering ethically sourced coffees, smoothie bowls, juices, brunch and more.',
    },
    contact: {
      title: 'Contact Us | Cascara Bath',
      description:
        'Find us at 3 Upper Borough Walls, Bath. Pop by for coffee, brunch or a friendly chat—walk-ins welcome.',
    },
    gallery: {
      title: 'Gallery | Cascara Bath',
      description:
        'Explore Cascara’s bright, cozy interiors, plant-based brunches, smoothies and café moments.',
    },
  },

  fonts: {
    base: `'Urbanist', sans-serif`,
    heading: `'Shrikhand', cursive`,
    baseClass: 'font-urbanist',
    headingClass: 'font-shrikhand',
    google: { base: 'Urbanist', heading: 'Shrikhand', accent: 'Urbanist' },
  },

  brand: {
    primary: '[#2C2A29]',
    secondary: 'bg-[#A0B46B]', // olive vibe
    accent: 'bg-[#CFC799]',
    textDark: 'text-[#2C2A29]',
    textLight: 'text-[#FAFDF9]',
    muted: 'text-gray-600',
  },

  styles: {
    bgLight: 'bg-[#FAFDF9]',
    bgPrimary: 'bg-[#A0B46B]',
    highlightColour: 'text-[#A0B46B]',
    textPrimary: 'text-[#2C2A29]',
    textMuted: 'text-gray-600',
    textSubtle: 'text-[#555444]',
    borderLight: 'border-gray-200',
    borderDark: 'border-gray-400',
  },

  banner: {
    show: true,
    message: 'Fully plant‑based and open daily — walk in anytime!',
    cta: { label: 'See Menu', href: '/menu' },
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'Cascara Bath',
    nav: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: 'https://www.instagram.com/cascarabath/',
      facebook: 'https://www.facebook.com/Cascarabath/',
      linkedin: 'https://uk.linkedin.com/company/cascara-bath',
      twitter: '',
      tiktok: '',
      youtube: '',
      tripadvisor: '',
    },
  },

  hero: {
    image: '/images/cascara-hero.jpg',
    imageAlt: 'Cascara storefront, Bath',
    heading: 'PLANT‑BASED EVERYDAY',
    highlightWord: 'COMMUNITY',
    blurb:
      'Serving fully vegan brunch, specialty coffee, smoothies, juices and homemade cakes—all in a cosy Bath setting.',
    hours: {
      weekdays: { label: 'MON–FRI', time: '08:00–16:00' },
      weekends: { label: 'SAT–SUN', time: '08:00–16:30 / 10:00–16:00' },
    },
  },

  about: {
    heading: 'Dedicated to Delicious Plant‑Based Living',
    subheading:
      'Since 2018, Cascara has been a fully vegan hub in Bath—where recipe creativity meets community warmth, one bowl, toastie or smoothie at a time.',
    features: [
      { title: 'Specialty Coffee Roasters', text: 'Single‑origin espresso, filter & cold brew—plant‑milk friendly.' },
      { title: 'All‑Day Brunch', text: 'From cashew “cream cheese” toast to tofu burritos—brunch done vegan.' },
      { title: 'Home‑Baked Cakes', text: 'Gluten‑free and wheat, baked in‑house by caring hands.' },
    ],
  },

  location: {
    heading: 'Find Us in Bath',
    text: 'Located in the heart of Bath’s Old City—perfect for coffee, brunch or a refresh during your walk.',
    address: ['Cascara Bath', '3 Upper Borough Walls, Bath BA1 1RG, UK'],
    openingHours: ['Mon–Fri: 08:00–16:00', 'Sat: 08:00–16:30', 'Sun: 10:00–16:00'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?...3+Upper+Borough+Walls+Bath',
  },

  gallery: {
    hero: {
      heading: 'Our Gallery',
      blurb: 'Peek inside Cascara—cozy nooks, green vibes, vegan goodness & community moments.',
    },
    images: [
      { src: '/gallery/cascara1.jpg', alt: 'Cascara interior with plants' },
      { src: '/gallery/cascara2.jpg', alt: 'Vegan brunch plate' },
      { src: '/gallery/cascara3.jpg', alt: 'Coffee and cakes' },
      { src: '/gallery/cascara4.jpg', alt: 'Team behind the counter' },
    ],
  },

  testimonials: {
    heading: 'Loved by Our Community',
    subheading: 'Reviews from happy visitors and locals.',
    entries: [
      {
        quote:
          'Lovely food, friendly service … cashew cream cheese & “salmon” on sourdough went down a treat.',
        name: 'Sofinka',
        title: 'HappyCow Review',
      },
      {
        quote:
          'Faultless vegan food… brunch burrito is out of this world… will return.',
        name: 'barrlynnev',
        title: 'HappyCow',
      },
      {
        quote:
          'All towns should have a “Cascara”! Lovely staff, delicious mains and devilishly naughty cakes!',
        name: 'Hellibori',
        title: 'HappyCow',
      },
    ],
  },

  intro: {
    title: 'A Vegan Hub in Bath’s Heart',
    description:
      'From ethically sourced beans to house‑baked cakes and wholesome brunches, Cascara is where plant flavour and community meet.',
    features: [
      { title: '100% Vegan', text: 'Every menu item is plant‑based and crafted with purpose.' },
      { title: 'Inclusive Vibe', text: 'Kid‑ & dog‑friendly, laptop‑friendly, card payments accepted.' },
      { title: 'Creative & Fresh', text: 'Menu rotates often—expect surprises like kimchi toastie or beetroot pancakes!' },
    ],
  },

  menuHighlights: {
    title: 'What We’re Known For',
    items: [
      { label: 'All‑Day Breakfast', image: '/gallery/cascara1.jpg' },
      { label: 'Cold-Pressed Juices & Smoothies', image: '/gallery/cascara2.jpg' },
      { label: 'Specialty Coffee', image: '/gallery/cascara3.jpg' },
      { label: 'Home‑Baked Cakes', image: '/gallery/cascara4.jpg' },
    ],
    cta: { label: 'Browse Menu', href: '/menu' },
  },

  contact: {
    intro: {
      heading: 'Come Say Hello',
      blurb:
        "Whether you'd like coffee, brunch, or a chat, we’re here—walk-ins always welcome.",
      backgroundImage: {
        src: '/images/cascara-hero-2.jpg',
        alt: 'Inside Cascara cafe corner',
      },
    },
    details: {
      description:
        'Free Wi‑Fi, kid & dog friendly, card payments accepted.',
      address: '3 Upper Borough Walls, Bath BA1 1RG',
      phone: '+441225542636',
      phoneDisplay: '01225 542636',
      email: 'info@cascarabath.co.uk',
      image: {
        src: '/gallery/cascara-interior.jpg',
        alt: 'Cascara interior view',
      },
      hours: {
        monFri: '08:00–16:00',
        sat: '08:00–16:30',
        sun: '10:00–16:00',
      },
    },
    formspreeId: 'YOUR_FORMSPREE_ID',
    form: {
      heading: 'Send Us a Message',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        message: { label: 'Message', placeholder: 'Your message here' },
      },
      button: 'Send Message',
    },
    layout: {
      backgroundColor: '#FAFDF9',
      cardBackground: '#FFFFFF',
      border: 'border-gray-200',
      accent: '#A0B46B',
      accentHover: '#809443',
    },
  },
};