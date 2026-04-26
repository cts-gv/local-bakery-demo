/**
 * main.js — Sweet Magnolia Bakery
 * Handles: CSS vars, nav, image population, menu cards,
 * gallery lightbox, hours highlight, contact form, scroll fade
 */

document.addEventListener('DOMContentLoaded', () => {
  const S = window.SITE;

  // ── Apply CSS variables from config ──────────────────────
  const root = document.documentElement;
  root.style.setProperty('--primary',       S.colors.primary);
  root.style.setProperty('--primary-light', S.colors.primary_light);
  root.style.setProperty('--secondary',     S.colors.secondary);
  root.style.setProperty('--dark',          S.colors.dark);
  root.style.setProperty('--light',         S.colors.light);
  root.style.setProperty('--card-bg',       S.colors.card_bg);
  root.style.setProperty('--text',          S.colors.text);
  root.style.setProperty('--text-light',    S.colors.text_light);
  root.style.setProperty('--hero-overlay',  S.colors.hero_overlay);

  // ── Build navigation ─────────────────────────────────────
  const navList = document.getElementById('nav-links');
  if (navList) {
    S.nav.forEach(item => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href        = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  // Nav brand
  setText('nav-brand-name', S.business.name);
  setText('nav-brand-sub',  S.business.tagline);

  // Mobile hamburger
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', document.body.classList.contains('nav-open'));
    });
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top <= 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  // ── Hero ─────────────────────────────────────────────────
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    const heroSrc = S.photos.hero || S.placeholderHero;
    heroBg.style.backgroundImage = `url('${heroSrc}')`;
    setTimeout(() => heroBg.classList.add('loaded'), 100);

    // Subtle parallax
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `scale(1.04) translateY(${window.scrollY * 0.15}px)`;
    }, { passive: true });
  }

  setText('hero-heading',    S.hero.heading);
  setText('hero-subheading', S.hero.subheading);
  setText('hero-caption',    S.hero.caption);
  setText('hero-town',       S.business.town);

  // ── About ────────────────────────────────────────────────
  const aboutImg = document.getElementById('about-img');
  if (aboutImg) aboutImg.src = S.photos.about || S.placeholderAbout;

  setText('about-title',        S.about.title);
  setText('about-subtitle',     S.about.subtitle);
  setText('about-img-caption',  S.about.imageCaption);

  const aboutParas = document.getElementById('about-paragraphs');
  if (aboutParas) {
    aboutParas.innerHTML = '';
    S.about.paragraphs.forEach(p => {
      const el = document.createElement('p');
      el.textContent = p;
      aboutParas.appendChild(el);
    });
  }

  // ── Menu cards ───────────────────────────────────────────
  setText('menu-title',    S.menu.title);
  setText('menu-subtitle', S.menu.subtitle);

  const menuGrid = document.getElementById('menu-grid');
  if (menuGrid) {
    S.menu.items.forEach((item, i) => {
      const photoSrc = S.photos.menu[i] || S.placeholderMenu;
      const card = document.createElement('div');
      card.className = 'menu-card fade-in';
      card.innerHTML = `
        <div class="menu-card-image">
          <img src="${photoSrc}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
        </div>
        <div class="menu-card-body">
          <h3 class="menu-card-name">${item.name}</h3>
          <p class="menu-card-desc">${item.description}</p>
          <span class="menu-card-price">${item.price}</span>
        </div>
      `;
      menuGrid.appendChild(card);
    });
  }

  // ── Gallery ──────────────────────────────────────────────
  setText('gallery-title',    S.gallery.title);
  setText('gallery-subtitle', S.gallery.subtitle);

  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    S.photos.gallery.forEach((photoPath, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item fade-in';
      item.innerHTML = `
        <img src="${photoPath || S.placeholderGallery}" alt="Gallery photo ${i + 1}" loading="lazy" />
        <div class="gallery-item-overlay">
          <span class="gallery-zoom-icon">🔍</span>
        </div>
      `;
      galleryGrid.appendChild(item);
    });
    initLightbox();
  }

  // ── Hours ────────────────────────────────────────────────
  setText('hours-title',    S.hours.title);
  setText('hours-subtitle', S.hours.subtitle);

  const hoursTable = document.getElementById('hours-table');
  if (hoursTable) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    S.hours.schedule.forEach(row => {
      const el = document.createElement('div');
      el.className = 'hours-row' + (row.day === today ? ' today' : '');
      const isClosed = row.hours.toLowerCase() === 'closed';
      el.innerHTML = `
        <span class="hours-day">${row.day}${row.day === today ? ' ✦' : ''}</span>
        <span class="${isClosed ? 'hours-closed' : 'hours-time'}">${row.hours}</span>
      `;
      hoursTable.appendChild(el);
    });
  }

  setText('hours-note', S.hours.note);

  // Location card
  setText('location-address',  S.business.address + ', ' + S.business.city);
  setText('location-phone',    S.business.phone);
  setText('location-email',    S.business.email);
  const locationMapBtn = document.getElementById('location-map-btn');
  if (locationMapBtn) locationMapBtn.href = S.business.mapLink;

  const locationEmailLink = document.getElementById('location-email-link');
  if (locationEmailLink) {
    locationEmailLink.href        = 'mailto:' + S.business.email;
    locationEmailLink.textContent = S.business.email;
  }
  const locationPhoneLink = document.getElementById('location-phone-link');
  if (locationPhoneLink) {
    locationPhoneLink.href        = 'tel:' + S.business.phone.replace(/\D/g,'');
    locationPhoneLink.textContent = S.business.phone;
  }

  // Social links — hide if not set
  const fbBtn = document.getElementById('social-facebook');
  const igBtn = document.getElementById('social-instagram');
  if (fbBtn) { S.business.facebook ? fbBtn.href = S.business.facebook : fbBtn.remove(); }
  if (igBtn) { S.business.instagram ? igBtn.href = S.business.instagram : igBtn.remove(); }

  // ── Contact form ─────────────────────────────────────────
  setText('contact-title',    S.contact.title);
  setText('contact-subtitle', S.contact.subtitle);
  setText('contact-intro',    S.contact.intro);

  // Populate inquiry type select
  const inquirySelect = document.getElementById('inquiry-type');
  if (inquirySelect) {
    inquirySelect.innerHTML = '<option value="" disabled selected>— Select inquiry type —</option>';
    S.contact.inquiryTypes.forEach(type => {
      const o = document.createElement('option');
      o.value = o.textContent = type;
      inquirySelect.appendChild(o);
    });
  }

  // Hide setup note if configured
  const isConfigured = S.contact.formspreeEndpoint &&
                       !S.contact.formspreeEndpoint.includes('YOUR_FORM_ID');
  if (isConfigured) {
    const note = document.getElementById('contact-setup-note');
    if (note) note.remove();
  }

  // Contact form submit
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit');
  const statusEl  = document.getElementById('contact-status');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const msg  = document.getElementById('contact-message')?.value.trim();

      if (!name || !msg) {
        showStatus(statusEl, 'Please fill in your name and message.', 'error');
        return;
      }
      if (!isConfigured) {
        showStatus(statusEl, 'Form not yet configured. See setup instructions above.', 'error');
        return;
      }

      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending…';

      try {
        const res = await fetch(S.contact.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (res.ok) {
          form.reset();
          showStatus(statusEl, S.contact.successMessage, 'success');
          submitBtn.textContent = 'Message Sent ✓';
        } else {
          const data = await res.json();
          const err = data.errors ? data.errors.map(e => e.message).join(', ') : 'Something went wrong.';
          showStatus(statusEl, err, 'error');
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Send Message →';
        }
      } catch {
        showStatus(statusEl, 'Network error — please try again.', 'error');
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message →';
      }
    });
  }

  // ── Scroll fade-in ────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  fadeEls.forEach(el => fadeObs.observe(el));

  // Re-observe dynamically added cards after they're built
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => fadeObs.observe(el));
  }, 100);

  // ── Footer ───────────────────────────────────────────────
  setText('footer-name',    S.business.name);
  setText('footer-tagline', S.footer.tagline);
  setText('footer-line2',   S.footer.line2);
  setText('footer-copy',    S.footer.copy);

});

// ── Gallery Lightbox ──────────────────────────────────────────
function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (lightbox) lightbox.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', e => { e.stopPropagation(); close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ── Utilities ─────────────────────────────────────────────────
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.className   = 'form-status ' + type;
}
