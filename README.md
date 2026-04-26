# 🥐 Sweet Magnolia Bakery — Website Template

A warm, cozy single-page small business website built for GitHub Pages.
Playfair Display + Dancing Script fonts, cream & brick red palette.
All content managed from one config file.

---

## 🚀 Quick Start

### File Structure
```
/
├── index.html          ← Single page — rarely needs editing
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── config.js       ← ★ EDIT THIS FILE for all content & photos
│   └── main.js         ← All behavior
├── images/
│   └── (your photos go here)
└── README.md
```

### Go live on GitHub Pages
1. Create a GitHub repo → upload all files
2. **Settings → Pages → Source → main branch / root**
3. Live at `https://yourusername.github.io/repo-name/`

---

## ✏️ Customizing for a Different Business

Open `js/config.js` — it's the only file you need to edit.

### Change Business Info
```js
business: {
  name:     "Your Business Name",
  tagline:  "Your tagline here",
  town:     "Your Town, State",
  phone:    "(555) 555-0000",
  email:    "hello@yourbusiness.com",
  address:  "123 Main Street",
  city:     "Your Town, WA 98000",
  mapLink:  "https://maps.google.com/?q=your+address",
  facebook: "https://facebook.com/yourpage",   // set "" to hide
  instagram:"https://instagram.com/yourhandle" // set "" to hide
}
```

### Change Colors
```js
colors: {
  primary:       "#8B2E1A",  // Main color — buttons, headings
  primary_light: "#B04030",  // Hover state
  secondary:     "#C8975A",  // Accent color — dividers, badges
  dark:          "#2C1A0E",  // Footer & dark backgrounds
  light:         "#FDF8F2",  // Page background
  // etc.
}
```

### Change Photos
Upload to `/images/` then update paths:
```js
photos: {
  hero:  "images/your-hero.jpg",
  about: "images/your-about.jpg",
  menu:  ["images/item1.jpg", "images/item2.jpg", ...],
  gallery: ["images/gallery-01.jpg", ...]
}
```

### Change Menu Items
```js
menu: {
  items: [
    {
      name:        "Item Name",
      description: "Description here",
      price:       "$0.00",
      badge:       "Fan Favorite"  // set "" to hide badge
    },
    // add or remove items freely
  ]
}
```

### Change Hours
```js
hours: {
  schedule: [
    { day: "Monday",  hours: "Closed" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    // etc.
  ]
}
```

---

## 📬 Setting Up Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) → create free account
2. **+ New Form** → name it "Bakery Contact" → copy endpoint
3. Paste into `config.js`:
   ```js
   contact: {
     formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
   }
   ```
4. The yellow setup box on the page disappears automatically.

---

## 💡 Photo Size Guide

| Section    | Recommended Size |
|------------|-----------------|
| Hero       | 1600 × 700 px   |
| About      | 800 × 600 px    |
| Menu items | 600 × 500 px    |
| Gallery    | 600 × 500 px    |

Compress to under 400KB using [squoosh.app](https://squoosh.app).

---

## 🔧 Reusing as a Template

1. Open `js/config.js`
2. Change business name, colors, photos, menu items, hours
3. Push to GitHub — done!
