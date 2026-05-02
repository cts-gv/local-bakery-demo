/**
 * ============================================================
 *  SWEET MAGNOLIA BAKERY — SITE CONFIG
 *  Edit everything here. No need to touch index.html.
 *  Photos, text, colors, hours, menu — all in one place.
 * ============================================================
 */

const SITE = {

  // ── BUSINESS INFO ────────────────────────────────────────
  business: {
    name:     "Sweet Magnolia Bakery",
    tagline:  "Baked fresh daily with love",
    town:     "Grandview, Washington",
    phone:    "(509) 555-0142",           // ← update
    email:    "hello@sweetmagnolia.com",  // ← update
    address:  "114 Main Street",
    city:     "Grandview, WA 98XXX",      // ← update zip
    mapLink:  "https://maps.google.com",  // ← update to real Google Maps link
    facebook: "https://facebook.com",    // ← update or set to "" to hide
    instagram:"https://instagram.com",   // ← update or set to "" to hide
  },

  // ── COLORS ───────────────────────────────────────────────
  // Change any hex value to retheme the entire site instantly.
  colors: {
    primary:       "#8B2E1A",        // Deep brick red
    primary_light: "#B04030",        // Lighter red — hover states
    secondary:     "#C8975A",        // Warm caramel — accents & dividers
    dark:          "#2C1A0E",        // Dark espresso — footer & overlays
    light:         "#FDF8F2",        // Warm cream — page background
    card_bg:       "#FFFFFF",        // Card backgrounds
    text:          "#2C1A0E",        // Dark espresso body text
    text_light:    "#6B4E35",        // Warm brown secondary text
    hero_overlay:  "rgba(44,26,14,0.52)"  // Hero image overlay darkness
  },

  // ── PHOTOS ───────────────────────────────────────────────
  // HOW TO CHANGE PHOTOS:
  //   1. Upload your photo to the /images/ folder in GitHub
  //   2. Update the path below, e.g. "images/hero.jpg"
  //   For external URLs use the full https:// address.

  photos: {
    hero:  "images/bakery.jpg",   // Main hero image at top of page
    about: "images/coming-soon.jpg",  // Photo in the Our Story section

    // Menu item photos — one per item in menu.items below
    menu: [
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg"
    ],

    // Gallery — add or remove paths freely, gallery builds automatically
    gallery: [
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg",
      "images/coming-soon.jpg"
    ]
  },

  // ── PLACEHOLDER IMAGES (shown until real photos are added) ──
  placeholderHero:    "https://placehold.co/1600x700/8B2E1A/FDF8F2?text=Add+Hero+Photo",
  placeholderAbout:   "https://placehold.co/800x600/C8975A/FDF8F2?text=About+Photo",
  placeholderMenu:    "https://placehold.co/600x500/8B2E1A/FDF8F2?text=Menu+Item",
  placeholderGallery: "https://placehold.co/600x500/C8975A/FDF8F2?text=Gallery+Photo",

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    heading:    "Sweet Magnolia Bakery",
    subheading: "Baked Fresh Daily",
    caption:    "Made from scratch, made with love — right here in Millbrook."
  },

  // ── ABOUT SECTION ────────────────────────────────────────
  about: {
    title:    "Our Story",
    subtitle: "A family tradition, one loaf at a time.",
    paragraphs: [
      "Sweet Magnolia Bakery has been a cornerstone of Grandview since 2008, when Margaret and Tom Holloway turned their lifelong passion for baking into something the whole town could enjoy. What started as weekend farmers market tables quickly grew into the beloved Main Street shop it is today.",
      "Everything we make is baked fresh every morning using time-honored family recipes, locally sourced ingredients, and a whole lot of heart. From our signature sourdough to our seasonal fruit pies, each item that comes out of our oven is made the way food was always meant to be made — by hand, with care, for the people we love.",
      "We're proud to be part of this community, and grateful every single day for the neighbors, families, and friends who walk through our door."
    ],
    imageCaption: "Margaret & Tom Holloway, founders"  // ← update
  },

  // ── MENU / SPECIALTIES ───────────────────────────────────
  menu: {
    title:    "Our Specialties",
    subtitle: "Baked fresh every morning — arrive early, sell out fast!",

    // Add, edit, or remove items freely
    // badge is optional — set to "" to hide it
    items: [
      {
        name:        "Country Sourdough",
        description: "Our signature loaf. Slow-fermented 48 hours, crispy crust, chewy crumb. A Grandview staple.",
        price:       "$8",
        badge:       "Fan Favorite"
      },
      {
        name:        "Cinnamon Morning Rolls",
        description: "Soft, pillowy rolls loaded with brown sugar and cinnamon, finished with cream cheese frosting.",
        price:       "$4 each",
        badge:       "Fresh Daily"
      },
      {
        name:        "Seasonal Fruit Pie",
        description: "Made with whatever's fresh and local. Ask us what's in season — it changes week to week.",
        price:       "$22 whole",
        badge:       "Seasonal"
      },
      {
        name:        "Honey Cornbread",
        description: "Golden, moist, and just sweet enough. Perfect alongside a bowl of soup or straight from the pan.",
        price:       "$6",
        badge:       ""
      },
      {
        name:        "Lavender Shortbread",
        description: "Delicate, buttery shortbread with a hint of local lavender. Our most-gifted item.",
        price:       "$12 / dozen",
        badge:       "Best Seller"
      },
      {
        name:        "Custom Celebration Cakes",
        description: "Birthdays, anniversaries, graduations — we make them all. Order at least one week in advance.",
        price:       "From $45",
        badge:       "Order Ahead"
      }
    ]
  },

  // ── GALLERY ──────────────────────────────────────────────
  gallery: {
    title:    "Fresh From the Oven",
    subtitle: "A peek inside our kitchen and display case."
  },

  // ── HOURS & LOCATION ─────────────────────────────────────
  hours: {
    title:    "Hours & Location",
    subtitle: "Come find us on Main Street — the one with the smell of fresh bread.",

    schedule: [
      { day: "Monday",    hours: "Closed" },
      { day: "Tuesday",   hours: "7:00 AM – 4:00 PM" },
      { day: "Wednesday", hours: "7:00 AM – 4:00 PM" },
      { day: "Thursday",  hours: "7:00 AM – 4:00 PM" },
      { day: "Friday",    hours: "7:00 AM – 5:00 PM" },
      { day: "Saturday",  hours: "7:00 AM – 5:00 PM" },
      { day: "Sunday",    hours: "8:00 AM – 2:00 PM" }
    ],

    note: "Hours may vary on holidays. Follow us on social media for updates!"
  },

  // ── CONTACT FORM ─────────────────────────────────────────
  contact: {
    title:    "Get In Touch",
    subtitle: "Questions, custom orders, or just want to say hello?",
    intro:    "We'd love to hear from you! For custom cake orders please give us at least one week's notice. For large or wedding orders, two to three weeks is appreciated.",

    // ── FORMSPREE SETUP ──────────────────────────────────
    // 1. Go to https://formspree.io → free account
    // 2. New Form → "Bakery Contact" → copy endpoint
    // 3. Paste below:
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",  // ← REPLACE

    inquiryTypes: [
      "General Question",
      "Custom Cake Order",
      "Large / Bulk Order",
      "Wedding / Event Order",
      "Wholesale Inquiry",
      "Other"
    ],

    successMessage: "Thank you! We'll be in touch within one business day. 🥐"
  },

  // ── NAVIGATION ───────────────────────────────────────────
  nav: [
    { label: "Home",      href: "#hero" },
    { label: "Our Story", href: "#about" },
    { label: "Menu",      href: "#menu" },
    { label: "Gallery",   href: "#gallery" },
    { label: "Hours",     href: "#hours" },
    { label: "Contact",   href: "#contact" }
  ],

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: "Baked fresh daily with love",
    line2:   "114 Some Street · GView, WA",  // ← update
    copy:    "© 2025 Sweet Magnolia Bakery. All rights reserved."  // ← update year
  }

};

window.SITE = SITE;
