// config/siteConfig.js

export const siteConfig = {
  siteName: 'Nena Craft Bakery',

  metadata: {
    base: {
      title: 'Nena Craft Bakery – Organic Sourdough & Pastries',
      description:
        'Nena Craft Bakery is an independent artisan bakery in Amersham and Berkhamsted, crafting fresh organic sourdough, pastries and cakes with care.',
      icons: {
        icon: '/favicon.ico',
      },
    },
    about: {
      title: 'About | Nena Craft Bakery',
      description:
        'Learn about Nena Craft Bakery – a family-run business baking sourdough and pastries with organic ingredients and passion.',
    },
    contact: {
      title: 'Contact Us | Nena Craft Bakery',
      description:
        'Visit our bakery in Amersham or Berkhamsted. Get in touch to learn more about our menu, seasonal specials or opening hours.',
    },
    gallery: {
      title: 'Gallery | Nena Craft Bakery',
      description:
        'Take a look inside Nena Craft Bakery – browse our sourdough, pastries, and hand-crafted baked goods.',
    },
  },

  fonts: {
    base: `'Urbanist', sans-serif`,
    heading: `'Shrikhand', cursive`,
    baseClass: 'font-urbanist',
    headingClass: 'font-shrikhand',
    google: {
      base: 'Urbanist',
      heading: 'Shrikhand',
      accent: 'Urbanist',
    },
  },

  brand: {
    primary: '[#2D2A26]',
    secondary: 'bg-[#5E7C60]',
    accent: 'bg-[#C2BAAF]',
    textDark: 'text-[#1F1D1B]',
    textLight: 'text-[#FAF9F5]',
    muted: 'text-gray-500',
  },

  styles: {
    bgLight: 'bg-[#FAF9F5]',
    bgPrimary: 'bg-[#5E7C60]',
    highlightColour: 'text-[#5E7C60]',
    textPrimary: 'text-[#2D2A26]',
    textMuted: 'text-gray-600',
    textSubtle: 'text-[#4D4A44]',
    borderLight: 'border-gray-200',
    borderDark: 'border-gray-400',
  },

  banner: {
    show: true,
    message: 'Fresh sourdough baked daily. No preservatives. No compromise.',
    cta: {
      label: 'See Our Bakes',
      href: '/gallery',
    },
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
    copyright: 'Nena Craft Bakery',
    nav: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: 'https://www.instagram.com/nena_craftbakery/',
      facebook: 'https://www.facebook.com/nenacraftbakery',
      tripadvisor: 'https://www.tripadvisor.co.uk/Restaurant_Review-g499482-d24138268-Reviews-Nena_Craft_Bakery-Amersham_Buckinghamshire_England.html',
      linkedin: '',
      tiktok: '',
      youtube: '',
      twitter: '',
    },
  },

  hero: {
    image: '/images/hero-bread.jpg',
    imageAlt: 'Fresh sourdough loaves at Nena Craft Bakery',
    heading: 'HAND-CRAFTED DAILY,',
    highlightWord: 'ORGANICALLY SOURCED',
    blurb: 'Award-winning sourdough, seasonal bakes, and warm service in the heart of Amersham and Berkhamsted.',
    hours: {
      weekdays: {
        label: 'MON – SAT',
        time: '08.00–15.00',
      },
      weekends: {
        label: 'SUNDAY',
        time: '08.00–14.00',
      },
    },
  },

  about: {
    heading: 'Slow Fermentation. Honest Ingredients.',
    subheading: `Everything we make is baked on-site using 100% organic flour and a slow 24-hour sourdough process. We believe great bread takes time.`,
    features: [
      {
        title: 'Award-Winning Sourdough',
        text: 'Our 2-star Great Taste Award sourdough is made fresh every morning.',
      },
      {
        title: 'From Our Family to Yours',
        text: 'Nena is proudly independent and family-run – with quality at the heart of everything.',
      },
    ],
  },

  location: {
    heading: 'Visit Us',
    text: 'Stop by one of our bakeries for bread, pastries, coffee or a chat. We bake everything ourselves – no corners cut.',
    address: [
      'Amersham Bakery',
      '49 Sycamore Road, HP6 5EQ, Amersham',
      '',
      'Berkhamsted Bakery',
      'Location details on Instagram',
    ],
    openingHours: [
      'Mon–Sat: 8:00 AM – 3:00 PM',
      'Sun: 8:00 AM – 2:00 PM',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
  },

  gallery: {
    images: [
      { src: '/gallery/loaves.jpg', alt: 'Fresh sourdough loaves' },
      { src: '/gallery/pastries.jpg', alt: 'Pastries on display' },
      { src: '/gallery/interior.jpg', alt: 'Bakery interior' },
      { src: '/gallery/coffee.jpg', alt: 'Barista pouring coffee' },
      { src: '/gallery/counter.jpg', alt: 'Cakes on the counter' },
      { src: '/gallery/team.jpg', alt: 'Bakery team working together' },
    ],
  },

  testimonials: {
    heading: 'What Our Customers Say',
    subheading: 'Reviews from happy customers in Amersham & Berkhamsted.',
    entries: [
      {
        quote: 'Hands down the best sourdough I’ve ever had. Worth the detour!',
        name: 'Laura H.',
        title: 'Google Review',
      },
      {
        quote: 'A gem of a bakery. Staff are lovely and the coconut cookies are elite.',
        name: 'Tom S.',
        title: 'TripAdvisor',
      },
      {
        quote: 'Their croissants are next level. Can’t start the weekend without one.',
        name: 'Jasmine R.',
        title: 'Instagram',
      },
    ]
  },

  hoursLocation: {
    hours: 'Mon–Sat: 08.00–15.00, Sun: 08.00–14.00',
    address: '49 Sycamore Road, Amersham HP6 5EQ',
    email: 'hello@nenacraftbakery.com',
  },

  intro: {
    title: 'Baking with Purpose',
    description: 'Our breads are fermented slowly, made with organic flour, and crafted with care – every day, from scratch.',
    features: [
      { title: '100% Organic', text: 'We use only certified organic ingredients – no additives.' },
      { title: 'Sourdough, Daily', text: 'Each loaf is hand-shaped, slow-risen and baked with precision.' },
      { title: 'Small-Batch', text: 'Our team bakes in small quantities for maximum freshness.' },
    ],
  },

  menuHighlights: {
    title: 'What We Bake',
    items: [
      { label: 'Signature Sourdough', image: '/gallery/loaves.jpg' },
      { label: 'Cinnamon Buns', image: '/gallery/pastries.jpg' },
      { label: 'Coconut Cookies', image: '/gallery/cookies.jpg' },
      { label: 'Organic Croissants', image: '/gallery/croissant.jpg' },
    ],
    cta: {
      label: 'See Full Selection',
      href: '/gallery',
    },
  },

  contact: {
    intro: {
      heading: 'We’d Love to Hear from You',
      blurb: 'Whether you’ve got a question, want to order for a special event, or just want to say hi – we’re always happy to help.',
    },
    details: {
      description: 'Pop in or drop us a message using the form below. We try to respond within 24 hours.',
      address: '49 Sycamore Road, Amersham HP6 5EQ',
      phone: '+441494433101',
      phoneDisplay: '01494 433101',
      email: 'hello@nenacraftbakery.com',
      image: {
        src: '/gallery/interior.jpg',
        alt: 'Inside Nena Craft Bakery',
      },
    },
    formspreeId: 'mjkrendn',
    form: {
      heading: 'Send Us a Message',
      fields: {
        name: {
          label: 'Name',
          placeholder: 'Your full name',
        },
        email: {
          label: 'Email',
          placeholder: 'you@example.com',
        },
        message: {
          label: 'Message',
          placeholder: 'How can we help?',
        },
      },
      button: 'Send Message',
    },
  },
};