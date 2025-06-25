// config/siteConfig.js
export const siteConfig = {
  siteName: 'Cascara',
  logo: {
    src: '/logo/cascara_logo.png',
    alt: 'Cascara Logo',
    height: 40,
  },
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

  hoursLocation: {
    address: '3 Upper Borough Walls, Bath BA1 1RG',
    email: 'hello@cascarabath.com',
  },

  hero: {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/07/bd/ea/alfred-street.jpg?w=1200&h=-1&s=1',
    imageAlt: 'Cascara interior, Bath',
    heading: 'PLANT‑BASED EVERYDAY',
    highlightWord: 'COMMUNITY',
    blurb:
      'Serving fully vegan brunch, specialty coffee, smoothies, juices and homemade cakes—all in a cosy Bath setting.',
    hours: {
      weekdays: { label: 'MON–FRI', time: '08:00–16:00' },
      saturday: { label: 'SATURDAY', time: '08:00–16:30' },
      sunday: { label: 'SUNDAY', time: '10:00–16:00' },
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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.0978139917497!2d-2.3596054!3d51.3828803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718113b0422f9d%3A0x7c02a4b8c10badd8!2sCASCARA!5e0!3m2!1sen!2suk!4v1750798620094!5m2!1sen!2suk',
  },

  gallery: {
    hero: {
      heading: 'Our Gallery',
      blurb: 'Peek inside Cascara—cozy nooks, green vibes, vegan goodness & community moments.',
    },
    images: [
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f9/63/f3/photo0jpg.jpg?w=1400&h=-1&s=1', alt: 'Cascara interior with plants' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/55/1b/d0/photo2jpg.jpg?w=1400&h=-1&s=1', alt: 'Vegan brunch plate' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bc/46/fd/cheeze-marmite-toastie.jpg?w=1000&h=-1&s=1', alt: 'Coffee and cakes' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/fa/9a/cb/caption.jpg?w=1400&h=-1&s=1', alt: 'Team behind the counter' },
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
      { label: 'Stunning Wraps', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f7/2c/b5/all-day-brunch-burrito.jpg?w=1100&h=-1&s=1' },
      { label: 'Coffee & Cake', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e9/55/a6/img-20190322-173157-026.jpg?w=1000&h=-1&s=1' },
      { label: 'Cosy Inside', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/07/bd/ea/alfred-street.jpg?w=1200&h=-1&s=1' },
      { label: 'Breakfast', image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npxwZ_ci2ikQfjizNFFpk3cBMt9L3naBNoleQK20GvaMYAL4uj5ZAfJS6kTaSAo_nHlkuuAnfemaSGaw592xB-cl9Z8ZXxQ9WhEbozfZ_a9aKoyVg1paWAWffsmap7VCwjcnnXf=s1360-w1360-h1020-rw' },
    ],
    cta: { label: 'Browse Menu', href: '/menu' },
  },

  contact: {
    intro: {
      heading: 'Come Say Hello',
      blurb:
        "Whether you'd like coffee, brunch, or a chat, we’re here—walk-ins always welcome.",
      backgroundImage: {
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c2/31/c3/cascara-front.jpg?w=800&h=-1&s=1',
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
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/de/4c/a5/caption.jpg?w=1100&h=1100&s=1',
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