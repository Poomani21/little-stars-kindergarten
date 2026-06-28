# Little Stars Kindergarten — Client Deliverables Document

**Prepared for:** Little Stars Kindergarten  
**Project:** Pre-KG & LKG School Website  
**Date:** June 2026  
**Version:** 1.0

---

## 1. Project Overview

This document outlines the complete deliverables for the **Little Stars Kindergarten** website — a modern, colorful, and mobile-responsive single-page website designed specifically for a Pre-KG and LKG school.

The website serves as a digital showcase for the school, enabling parents to learn about programs, facilities, and teachers, and to enquire about admission directly via WhatsApp or email. No backend server or database is required — the site is fully static and can be hosted on free or low-cost platforms.

### Key Objectives

- Present a professional, trustworthy online presence for the school
- Enable easy admission enquiries via WhatsApp integration
- Showcase programs, facilities, gallery, and team
- Work flawlessly on mobile phones, tablets, and desktops
- Load fast with no ongoing server maintenance

---

## 2. Features Included

| Feature | Description |
|---------|-------------|
| **Home Page** | Full single-page layout with all school sections |
| **Hero Slider** | Auto-playing banner with 3 slides, dots, and swipe support |
| **Welcome Section** | Introduction with animated year badge |
| **About School** | Mission, vision, values cards |
| **Why Choose Us** | 6 feature cards with icons |
| **Programs** | Pre-KG and LKG program details with enrol buttons |
| **Facilities** | Campus facility showcase with images |
| **Gallery** | 6-image grid with lightbox viewer |
| **Testimonials** | Auto-rotating parent reviews |
| **Teachers** | Team profiles with photos |
| **Admission CTA** | Prominent call-to-action banner |
| **FAQ Section** | Expandable accordion for common questions |
| **Contact Form** | WhatsApp redirect with pre-filled message |
| **Google Maps** | Embedded location map |
| **Sticky Navigation** | Fixed header with smooth scroll |
| **Mobile Menu** | Hamburger menu for phones/tablets |
| **Floating WhatsApp** | Always-visible chat button |
| **Scroll to Top** | Button appears after scrolling |
| **Animated Counters** | Statistics animate on scroll |
| **Loading Animation** | Branded splash screen on first load |
| **Social Media Links** | Footer and contact social icons |
| **SEO Meta Tags** | Search engine optimized HTML |
| **Accessibility** | ARIA labels, semantic HTML, keyboard support |

---

## 3. Technology Used

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, SEO-friendly) |
| Styling | CSS3 (custom properties, flexbox, grid, animations) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Fredoka & Nunito |
| Icons | Unicode emoji + inline SVG |
| Images | SVG illustrations (replaceable with photos) |

**Not used:** Bootstrap, React, PHP, Node.js, Database, CMS

---

## 4. Contact Integration

### WhatsApp

- **Number configured:** +91 95787 77149
- **Floating button:** Opens WhatsApp chat on every page
- **Contact form:** Submits via WhatsApp with pre-filled enquiry message
- **To change number:** Edit `whatsappNumber` in `js/script.js`

### Email

- **Address configured:** spoomani21@gmail.com
- **Opens:** User's default mail app via `mailto:` link
- **To change email:** Edit `email` in `js/script.js`

---

## 5. Hosting Requirements

Since this is a **static HTML website**, hosting requirements are minimal:

| Requirement | Details |
|-------------|---------|
| **Server type** | Static file hosting (no PHP, no database) |
| **Storage** | ~5–20 MB (grows with real photos) |
| **Bandwidth** | Low (~1–5 GB/month for a small school) |
| **SSL certificate** | Required (free with all recommended hosts) |
| **Domain** | Custom domain recommended (e.g., littlestarschool.in) |
| **Backend** | None required |

---

## 6. Domain Requirements

| Item | Details |
|------|---------|
| **Recommended TLD** | `.in`, `.com`, or `.school` |
| **Example** | `littlestarskindergarten.in` |
| **Registration** | 1 year minimum, renew annually |
| **DNS setup** | Point domain to hosting provider (A record or CNAME) |
| **WHOIS privacy** | Recommended (often free) |

---

## 7. Deployment Steps

### Option A: Netlify (Recommended — Easiest)

1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder onto Netlify dashboard
3. Site goes live instantly with a free `.netlify.app` URL
4. Add custom domain under **Domain Settings**
5. SSL is automatic and free

### Option B: GitHub Pages

1. Create a GitHub repository
2. Upload all project files
3. Go to **Settings ? Pages ? Deploy from branch (main)**
4. Site live at `username.github.io/repo-name`
5. Add custom domain in Pages settings

### Option C: Cloudflare Pages

1. Create account at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repo or upload files directly
3. Deploy — free SSL and global CDN included
4. Add custom domain in Cloudflare dashboard

### Option D: Traditional Hosting (Hostinger / Namecheap)

1. Purchase hosting plan
2. Upload files via File Manager or FTP to `public_html`
3. Point domain DNS to hosting nameservers
4. Enable free SSL in hosting control panel (cPanel)

---

## 8. Maintenance Details

| Task | Frequency | Who |
|------|-----------|-----|
| Content updates (text, photos) | As needed | Client or developer |
| WhatsApp/email number changes | As needed | Edit `js/script.js` |
| Domain renewal | Yearly | Client |
| Hosting renewal | Yearly | Client |
| Security/SSL | Automatic | Hosting provider |
| Backup | Before major changes | Developer |

### Annual Maintenance Checklist

- [ ] Renew domain name
- [ ] Renew hosting (if paid plan)
- [ ] Update admission dates and FAQ
- [ ] Replace gallery photos with new events
- [ ] Test contact form WhatsApp redirect
- [ ] Test on mobile devices
- [ ] Check Google Maps location is correct

---

## 9. Future Upgrade Options

| Upgrade | Description | Estimated Effort |
|---------|-------------|-----------------|
| **Online Admission Form** | Google Forms or Formspree integration | Low |
| **Blog / News Section** | School announcements and events | Medium |
| **Multi-page Website** | Separate pages for each section | Medium |
| **CMS Integration** | WordPress or Netlify CMS for easy editing | Medium |
| **Hindi/Tamil Language** | Bilingual website support | Medium |
| **Fee Payment Gateway** | Razorpay / PayU integration | High |
| **Student Portal** | Login area for parents (requires backend) | High |
| **Live Chat Widget** | Tawk.to or Crisp integration | Low |
| **Google Analytics** | Track visitor statistics | Low |
| **SEO Optimization** | Google Search Console, sitemap | Low |

---

## 10. Hosting Recommendations & Pricing

### Free Hosting Options

| Provider | Cost/Year | SSL | Bandwidth | Storage | Custom Domain |
|----------|-----------|-----|-----------|---------|---------------|
| **GitHub Pages** | ?0 | Free | 100 GB/month | 1 GB | Yes |
| **Netlify** | ?0 | Free | 100 GB/month | 100 GB | Yes |
| **Cloudflare Pages** | ?0 | Free | Unlimited | Unlimited | Yes |

### Paid Hosting Options

| Provider | Cost/Year (INR) | SSL | Bandwidth | Storage | Best For |
|----------|-----------------|-----|-----------|---------|----------|
| **Hostinger** | ?1,499–?2,999 | Free | Unlimited | 50–100 GB | Easy cPanel, email accounts |
| **Namecheap** | ?2,500–?4,000 | Free | Unmetered | 20–50 GB | Domain + hosting bundle |
| **Bluehost** | ?3,500–?5,500 | Free | Unmetered | 50 GB | WordPress-ready if upgrading later |

### Domain Pricing (Annual)

| TLD | Approx. Cost/Year (INR) |
|-----|------------------------|
| `.in` | ?400–?800 |
| `.com` | ?700–?1,200 |
| `.school` | ?2,500–?4,000 |
| `.co.in` | ?300–?600 |

### Best Option for a Small School Website

**Recommended: Netlify (Free) + `.in` Domain**

| Item | Yearly Cost |
|------|-------------|
| Hosting (Netlify Free) | ?0 |
| Domain (`.in`) | ~?600 |
| SSL Certificate | ?0 (included) |
| **Total Year 1** | **~?600/year** |

**Alternative: Hostinger Single Plan + Domain**

| Item | Yearly Cost |
|------|-------------|
| Hosting (Hostinger) | ~?1,499 |
| Domain (`.in`) | ~?600 (often free 1st year) |
| SSL | ?0 (included) |
| Professional Email | Included |
| **Total Year 1** | **~?1,499–?2,100/year** |

### Total Yearly Maintenance Cost Summary

| Setup | Year 1 | Year 2+ |
|-------|--------|---------|
| Free hosting + domain | ~?600 | ~?600 |
| Paid hosting + domain | ~?2,100 | ~?2,100 |
| With developer support (optional) | +?3,000–?6,000 | +?3,000–?6,000 |

---

## 11. Professional Quotation (INR)

### Package Comparison

| Item | Basic | Standard | Premium |
|------|-------|----------|---------|
| **Website Design** | Template-based colorful design | Custom kindergarten theme | Premium custom design with brand identity |
| **Development** | Single-page, all sections | Single-page + optimized performance | Multi-section with advanced animations |
| **Mobile Responsive** | ? Yes | ? Yes | ? Yes |
| **Contact Form + WhatsApp** | ? Yes | ? Yes | ? Yes |
| **Image Slider** | ? 3 slides | ? 3 slides + touch swipe | ? Custom slider with video support |
| **Gallery** | ? 6 images | ? 12 images + lightbox | ? Unlimited + categories |
| **Animated Counters** | ? Yes | ? Yes | ? Yes |
| **FAQ Section** | ? 5 questions | ? 8 questions | ? 10+ questions |
| **Google Maps** | ? Yes | ? Yes | ? Yes |
| **SEO Setup** | Basic meta tags | Meta tags + sitemap | Full SEO + Google Search Console |
| **Deployment** | Client self-deploy | Deploy to Netlify/GitHub | Deploy + custom domain setup |
| **Domain (1 year)** | ? Not included | ? `.in` domain included | ? `.com` or `.in` domain |
| **Hosting (1 year)** | ? Not included | ? Free hosting setup | ? Paid hosting (Hostinger) |
| **One Year Support** | Email support (3 months) | Email + WhatsApp (6 months) | Priority support (12 months) |
| **Content Writing** | ? Client provides | ? Basic content writing | ? Full professional copywriting |
| **Real Photo Integration** | Up to 10 photos | Up to 25 photos | Unlimited photos |
| **Revisions** | 2 rounds | 4 rounds | Unlimited (within scope) |
| **Delivery Time** | 5–7 days | 7–10 days | 10–14 days |
| | | | |
| **Total Price** | **?8,999** | **?18,999** | **?34,999** |

### Package Details

#### Basic — ?8,999

Ideal for schools starting their online presence with a limited budget.

- Complete single-page website (all sections)
- WhatsApp contact form integration
- Mobile responsive design
- SVG placeholder images (client replaces with real photos)
- 2 revision rounds
- 3 months email support
- Client handles hosting and domain

#### Standard — ?18,999 ? Recommended

Best value for most kindergarten schools. Includes everything needed to go live.

- Everything in Basic
- Custom content writing for all sections
- Real photo integration (up to 25 photos)
- Deployment to Netlify with custom domain
- `.in` domain included (1 year)
- Google Maps with exact location
- 4 revision rounds
- 6 months email + WhatsApp support
- Basic SEO setup with sitemap

#### Premium — ?34,999

For schools wanting a fully managed, premium online presence.

- Everything in Standard
- Premium custom design with school branding
- Professional copywriting and proofreading
- Unlimited photo integration
- Hostinger hosting (1 year) + domain included
- Google Analytics setup
- Google Search Console registration
- Social media link integration
- Video banner support
- 12 months priority support
- Unlimited revisions within scope
- Quarterly content update (1 year)

### Payment Terms

- 50% advance to begin work
- 50% on delivery and approval
- All prices exclusive of GST (18% applicable)

---

## 12. File Handover Checklist

Upon project completion, the client receives:

- [x] Complete source code (HTML, CSS, JS)
- [x] All image assets (SVG placeholders)
- [x] README with setup instructions
- [x] This client deliverables document
- [x] Configuration guide for WhatsApp and email
- [x] Deployment instructions

---

## 13. Support Contact

For technical support or content updates after delivery:

- **Email:** spoomani21@gmail.com
- **WhatsApp:** +91 95787 77149

---

*Document prepared as part of the Little Stars Kindergarten website project. All specifications reflect the delivered codebase.*
