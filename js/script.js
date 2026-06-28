/**
 * Little Stars Kindergarten — Main JavaScript
 * Handles navigation, slider, form, counters, and UI interactions
 */

/* ============================================================
   CONFIGURATION — Edit these values easily
   ============================================================ */
const CONFIG = {
  // WhatsApp number with country code (no + or spaces)
  whatsappNumber: '919578777149',

  // School email for mailto links
  email: 'spoomani21@gmail.com',

  // Default WhatsApp message for floating button
  whatsappDefaultMessage: 'Hello! I would like to know more about Little Stars Kindergarten admission.',

  // Slider auto-play interval in milliseconds (0 to disable)
  sliderInterval: 5000,

  // Testimonial auto-play interval
  testimonialInterval: 6000,

  // Background music volume (0.0 to 1.0)
  musicVolume: 0.12
};

/* ============================================================
   DOM Ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initHeroSlider();
  initTestimonialSlider();
  initScrollReveal();
  initCounters();
  initContactForm();
  initWhatsAppLinks();
  initGalleryLightbox();
  initScrollToTop();
  initFooterYear();
  initActiveNavLink();
  initBackgroundMusic();
});

/* ============================================================
   Loading Animation
   ============================================================ */
function initLoader() {
  const loader = document.getElementById('loader');
  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 1500);
  });
}

/* ============================================================
   Sticky Header & Mobile Navigation
   ============================================================ */
function initNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================================
   Active Navigation Link on Scroll
   ============================================================ */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ============================================================
   Hero Banner Slider
   ============================================================ */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slider-dots');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  let currentSlide = 0;
  let autoPlayTimer;

  if (!slides.length) return;

  // Create dot indicators
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.slider-dot');

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Auto-play
  if (CONFIG.sliderInterval > 0) {
    autoPlayTimer = setInterval(nextSlide, CONFIG.sliderInterval);

    // Pause on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    hero.addEventListener('mouseleave', () => {
      autoPlayTimer = setInterval(nextSlide, CONFIG.sliderInterval);
    });
  }

  // Touch swipe support
  let touchStartX = 0;
  const slider = document.getElementById('hero-slider');

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });
}

/* ============================================================
   Testimonial Slider
   ============================================================ */
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsContainer = document.getElementById('testimonial-dots');
  let current = 0;

  if (!testimonials.length) return;

  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('testimonial-dot');
    dot.setAttribute('aria-label', `Testimonial ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.testimonial-dot');

  function showTestimonial(index) {
    testimonials[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    testimonials[current].classList.add('active');
    dots[current].classList.add('active');
  }

  if (CONFIG.testimonialInterval > 0) {
    setInterval(() => {
      showTestimonial((current + 1) % testimonials.length);
    }, CONFIG.testimonialInterval);
  }
}

/* ============================================================
   Scroll Reveal Animation
   ============================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   Animated Counters
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  let animated = false;

  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => animateCounter(counter));
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection);

  // Also animate welcome badge counter
  const welcomeBadge = document.querySelector('.welcome-badge .badge-number');
  if (welcomeBadge) {
    const welcomeObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(welcomeBadge);
          welcomeObserver.unobserve(welcomeBadge);
        }
      },
      { threshold: 0.5 }
    );
    welcomeObserver.observe(welcomeBadge);
  }
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

/* ============================================================
   Contact Form → WhatsApp Redirect
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = document.getElementById('student-name').value.trim();
    const parentName = document.getElementById('parent-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const studentClass = document.getElementById('class').value;
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    let isValid = true;
    const requiredFields = [
      { id: 'student-name', value: studentName },
      { id: 'parent-name', value: parentName },
      { id: 'phone', value: phone },
      { id: 'age', value: age },
      { id: 'class', value: studentClass }
    ];

    requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (!field.value) {
        el.classList.add('error');
        isValid = false;
      } else {
        el.classList.remove('error');
      }
    });

    // Phone validation (10 digits)
    const phoneEl = document.getElementById('phone');
    if (phone && !/^[0-9]{10}$/.test(phone)) {
      phoneEl.classList.add('error');
      isValid = false;
    }

    if (!isValid) return;

    // Build WhatsApp message
    const whatsappMessage = `Hello, I would like to enquire about admission.

Name: ${studentName}
Parent Name: ${parentName}
Phone: ${phone}
Email: ${email || 'Not provided'}
Student Age: ${age}
Class: ${studentClass}
Message: ${message || 'No additional message'}`;

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');

    // Reset form after submission
    form.reset();
  });

  // Remove error styling on input
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('error'));
    input.addEventListener('change', () => input.classList.remove('error'));
  });
}

/* ============================================================
   WhatsApp Links (Floating button & social)
   ============================================================ */
function initWhatsAppLinks() {
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappDefaultMessage)}`;

  const floatBtn = document.getElementById('whatsapp-float');
  if (floatBtn) floatBtn.href = whatsappUrl;

  const socialWhatsapp = document.getElementById('social-whatsapp');
  if (socialWhatsapp) socialWhatsapp.href = whatsappUrl;

  // Update email links from config
  const emailLinks = document.querySelectorAll(`a[href^="mailto:"]`);
  emailLinks.forEach(link => {
    link.href = `mailto:${CONFIG.email}`;
  });
}

/* ============================================================
   Gallery Lightbox
   ============================================================ */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  let currentIndex = 0;
  const images = [];

  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    images.push({ src: img.src, alt: img.alt });
    item.addEventListener('click', () => openLightbox(index));
  });

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
  }

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

/* ============================================================
   Scroll to Top Button
   ============================================================ */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   Footer Year
   ============================================================ */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ============================================================
   Background Music — Soft looping melody (Web Audio API)
   ============================================================ */
function initBackgroundMusic() {
  const toggle = document.getElementById('music-toggle');
  if (!toggle) return;

  const iconOn = toggle.querySelector('.music-on');
  const iconOff = toggle.querySelector('.music-off');
  let isPlaying = false;
  let audioCtx = null;
  let timerId = null;
  let noteIndex = 0;

  // Cheerful pentatonic melody for kindergarten feel
  const melody = [
    { freq: 523.25, dur: 0.45 },
    { freq: 587.33, dur: 0.45 },
    { freq: 659.25, dur: 0.45 },
    { freq: 783.99, dur: 0.55 },
    { freq: 659.25, dur: 0.45 },
    { freq: 587.33, dur: 0.45 },
    { freq: 523.25, dur: 0.65 },
    { freq: 392.0, dur: 0.55 },
    { freq: 440.0, dur: 0.45 },
    { freq: 493.88, dur: 0.45 },
    { freq: 587.33, dur: 0.55 },
    { freq: 523.25, dur: 0.7 }
  ];

  function playNote(freq, duration) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    const vol = CONFIG.musicVolume;
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration + 0.05);
  }

  function scheduleNextNote() {
    if (!isPlaying) return;
    const note = melody[noteIndex % melody.length];
    playNote(note.freq, note.dur);
    noteIndex++;
    timerId = setTimeout(scheduleNextNote, note.dur * 1000 + 80);
  }

  function startMusic() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    isPlaying = true;
    toggle.classList.add('playing');
    toggle.setAttribute('aria-pressed', 'true');
    toggle.setAttribute('aria-label', 'Pause background music');
    toggle.title = 'Pause melody';
    if (iconOn) iconOn.hidden = true;
    if (iconOff) iconOff.hidden = false;
    scheduleNextNote();
  }

  function stopMusic() {
    isPlaying = false;
    clearTimeout(timerId);
    toggle.classList.remove('playing');
    toggle.setAttribute('aria-pressed', 'false');
    toggle.setAttribute('aria-label', 'Play background music');
    toggle.title = 'Play melody';
    if (iconOn) iconOn.hidden = false;
    if (iconOff) iconOff.hidden = true;
  }

  toggle.addEventListener('click', () => {
    isPlaying ? stopMusic() : startMusic();
  });

  // Try auto-start after page load (browsers may require user click first)
  window.addEventListener('load', () => {
    setTimeout(() => {
      try {
        startMusic();
      } catch (e) {
        /* User can tap the music button to start */
      }
    }, 2200);
  });
}
