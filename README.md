# Little Stars Kindergarten Website

A premium, responsive single-page website for a Pre-KG and LKG kindergarten school. Built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks or backend required.

## Project Structure

```
little-stars-kindergarten/
??? index.html          # Main page (all sections)
??? css/
?   ??? style.css       # All styles & responsive design
??? js/
?   ??? script.js       # Interactions, slider, form, counters
??? images/
?   ??? banner/         # Hero slider & welcome images
?   ??? gallery/        # Gallery & facility images
?   ??? teachers/       # Teacher profile images
?   ??? icons/          # Favicon & icons
??? docs/
?   ??? CLIENT-DELIVERABLES.md   # Client documentation
??? README.md
```

## Quick Start

1. Open `index.html` in any modern web browser
2. No build step, no server, no dependencies required

For local development with live reload, use any static server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`

## Configuration

Edit the `CONFIG` object at the top of `js/script.js`:

```javascript
const CONFIG = {
  whatsappNumber: '919578777149',  // Country code + number
  email: 'spoomani21@gmail.com',
  whatsappDefaultMessage: 'Hello! I would like to know more...',
  sliderInterval: 5000,
  testimonialInterval: 6000
};
```

## Features

- Sticky navigation with mobile hamburger menu
- Auto-playing hero image slider with touch swipe
- Scroll reveal animations
- Animated statistics counters
- Gallery with lightbox viewer
- Testimonial carousel
- FAQ accordion
- Contact form ? WhatsApp redirect (no backend)
- Floating WhatsApp button
- Scroll-to-top button
- Google Maps embed
- Loading animation
- Fully responsive (desktop, tablet, mobile)
- SEO meta tags & accessible markup

## Replacing Images

Replace SVG placeholders in `images/` with real photos:

- `images/banner/` — Hero slider backgrounds (1920×1080 recommended)
- `images/gallery/` — School activity photos (800×600 recommended)
- `images/teachers/` — Teacher headshots (400×400 recommended)

Update `src` attributes in `index.html` if you change file names or extensions.

## Deployment

This is a static site. Upload all files to any web host. See `docs/CLIENT-DELIVERABLES.md` for hosting recommendations and deployment steps.

### Free Hosting Options

- **GitHub Pages** — Free, custom domain support, SSL included
- **Netlify** — Free tier, drag-and-drop deploy, SSL included
- **Cloudflare Pages** — Free, fast CDN, SSL included

## Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Built for Little Stars Kindergarten. All rights reserved.
