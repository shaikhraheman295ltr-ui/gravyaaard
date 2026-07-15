<p align="center">
  <strong style="font-size: 2rem;">☥ Gravyaaard</strong>
</p>

<h3 align="center">
  Honoring Departed Souls With Dignity & Respect
</h3>

<p align="center">
  A comprehensive, mobile-responsive web directory for Shamshan Ghat (Hindu cremation grounds) and Kabristaan (Muslim burial grounds) across Latur, Maharashtra.
</p>

<p align="center">
  <a href="https://gravyaaard.vercel.app">
    <img src="https://img.shields.io/badge/🌐-Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white&labelColor=c9a84c" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Platform-Web-blue?style=flat-square" alt="Platform">
  <img src="https://img.shields.io/badge/License-Proprietary-orange?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Made_With-HTML%20%7C%20CSS%20%7C%20JS-yellow?style=flat-square" alt="Tech">
  <img src="https://img.shields.io/badge/Location-Latur%2C%20MH-informational?style=flat-square" alt="Location">
</p>

---

## 🚀 Live Demo

[**gravyaaard.vercel.app**](https://gravyaaard.vercel.app) — Click to view the live site.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Modules](#pages--modules)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [API Integrations](#api-integrations)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🔍 Overview

**Gravyaaard** is a purpose-built civic web application that serves as a centralized platform for families in **Latur, Maharashtra** to locate, compare, and book cremation and burial services during their time of need. The platform bridges the information gap by providing transparent pricing, interactive maps, document verification workflows, and a photo gallery — all accessible 24/7.

The application serves both the **Hindu** and **Muslim** communities, covering:
- **2 Shamshan Ghats** (Hindu cremation grounds)
- **2 Kabristaans** (Muslim burial grounds)

### Problem Statement

During times of grief, families often struggle to find essential information about funeral facilities — locations, pricing, required documentation, and available services. This platform eliminates that friction by consolidating everything into a single, easy-to-use web application.

---

## ✨ Features

### 🏠 Landing Page
- **Animated splash screen** with branding and smooth fade transition
- **Dual-video hero section** with auto-playing background videos (Hindu & Muslim)
- **Statistics dashboard** — 4 Locations · 2 Kabristaan · 2 Shamshan Ghat · 24/7 Support
- **Location cards** with distance from city center
- **Image gallery** — 16 photos (8 per community) with lazy loading and SVG fallbacks
- **Testimonials** from community members
- **Floating action buttons** — Emergency call (🚨) & WhatsApp chat (💬)

### 🗺️ Interactive Maps
- **Google Maps integration** with dark-themed custom styling
- **4 pinned locations** with color-coded markers (green = Muslim, orange = Hindu)
- **Sidebar navigation** with click-to-focus functionality
- **Custom info windows** with address, description, type badge, and "Get Directions" link
- **Graceful fallback UI** when API key is missing or invalid

### 💰 Quotation & Pricing
- **5 service categories** with 30+ individually listed items:
  - Cremation Services (Hindu)
  - Burial Services (Muslim)
  - Transportation
  - Documentation & Certificates
  - Facility Amenities
- **Interactive estimate calculator** — select services via checkboxes to compute total
- **One-click quotation download** — generates a branded HTML quotation document with:
  - Unique reference ID
  - Itemized breakdown
  - Grand total
  - Contact details

### 📄 Death Certificate Verification
- **4-step multi-step form** with visual progress tracker:
  1. **Personal Info** — Name, phone, email, relationship to deceased
  2. **Deceased Details** — Name, father/spouse, age, gender, religion, address, date & place of death
  3. **Certificate Upload** — Drag-and-drop file upload (JPG, PNG, PDF up to 5 MB) with preview
  4. **Review & Submit** — Full data summary, terms agreement, and submission
- **Client-side validation** on each step with highlighted required fields
- **Unique verification ID** generated on successful submission (e.g., `GRV-2024-XXXXX`)
- **Success confirmation screen** with verification status

### 🎨 Design & UX
- **Dark theme** with gold accent (`#c9a84c`) design language
- **Google Fonts** — Inter (body) + Playfair Display (headings)
- **Glassmorphism** and subtle `rgba` borders throughout
- **Scroll-triggered animations** via `IntersectionObserver`
- **Mobile-responsive** with hamburger menu and adaptive layouts
- **Sticky navbar** with scroll-based background transition

---

## 🛠️ Tech Stack

| Layer        | Technology                                                              |
|:-------------|:------------------------------------------------------------------------|
| **Markup**   | HTML5 (Semantic elements, `<video>`, `<form>`, `<table>`)               |
| **Styling**  | Vanilla CSS3 — CSS Custom Properties, Flexbox, Grid, Media Queries      |
| **Logic**    | Vanilla JavaScript (ES5/ES6) — DOM manipulation, IntersectionObserver   |
| **Maps**     | Google Maps JavaScript API v3 (with custom dark-theme styles)           |
| **Fonts**    | Google Fonts — [Inter](https://fonts.google.com/specimen/Inter), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) |
| **Hosting**  | Static — compatible with any web server, CDN, or static host            |

> **Zero dependencies.** No build tools, no package manager, no frameworks. Pure HTML/CSS/JS.

---

## 📁 Project Structure

```
gravyaaard/
├── index.html                  # Landing page (home)
├── maps.html                   # Interactive location maps
├── quotation.html              # Service pricing & estimate calculator
├── customer-details.html       # Death certificate verification form
│
├── css/
│   └── style.css               # Global stylesheet (1,419 lines — full design system)
│
├── js/
│   ├── main.js                 # Shared logic — splash, navbar, gallery, floating buttons, scroll animations
│   ├── maps.js                 # Google Maps init, markers, info windows, sidebar interaction
│   ├── quotation.js            # Price data, calculator logic, quotation download
│   └── form.js                 # Multi-step form navigation, validation, file upload, submission
│
├── images/
│   ├── hindu/                  # 8 gallery images (h1.jpg – h8.jpg) — Shamshan Ghat photos
│   └── muslim/                 # 8 gallery images (m1.jpg – m8.jpg) — Kabristaan photos
│
├── video/
│   ├── h.mp4                   # Hero background video — Hindu cremation ground (~6.5 MB)
│   └── m.mp4                   # Hero background video — Muslim burial ground (~900 KB)
│
├── assets/                     # Reserved for future static assets (currently empty)
└── README.md                   # You are here
```

---

## 📄 Pages & Modules

### `index.html` — Home

The primary landing page. Features a 2.8-second splash screen, a split-video hero section, location cards for all 4 facilities, a 16-image gallery (dynamically generated), testimonials, and a full-width footer.

**Scripts loaded:** `main.js`

---

### `maps.html` — Interactive Maps

A full-viewport split layout with a sidebar listing all 4 locations and an embedded Google Map. Clicking a location in the sidebar pans and zooms the map to that facility. Custom SVG map markers are color-coded by community type.

**Scripts loaded:** `main.js`, `maps.js`, Google Maps API

---

### `quotation.html` — Pricing & Estimates

Displays 5 categorized pricing tables with 30+ service items. A sticky sidebar calculator allows users to check off desired services and view a running total. One-click download generates a styled HTML quotation document.

**Scripts loaded:** `main.js`, `quotation.js`

---

### `customer-details.html` — Death Certificate Verification

A 4-step wizard form for submitting deceased person details and uploading death certificates. Includes step-by-step validation, drag-and-drop file upload (with preview), a data review screen, and a success confirmation with a generated verification ID.

**Scripts loaded:** `main.js`, `form.js`

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- *(Optional)* A local HTTP server for development (to avoid CORS issues with videos/images)
- *(Optional)* A Google Maps API key for the interactive maps feature

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gravyaaard.git
   cd gravyaaard
   ```

2. **Serve locally** (choose one method)

   Using Python:
   ```bash
   python -m http.server 8000
   ```

   Using Node.js:
   ```bash
   npx serve .
   ```

   Using VS Code:
   > Install the **Live Server** extension → right-click `index.html` → "Open with Live Server"

3. **Open in browser**
   ```
   http://localhost:8000
   ```

> **Note:** The application is entirely static. No build step, no installation of dependencies, and no compilation is required.

---

## ⚙️ Configuration

### Google Maps API Key

The maps page requires a valid Google Maps JavaScript API key. To configure:

1. Obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Enable the **Maps JavaScript API**
3. Open `maps.html` and replace the key in the script tag:

   ```html
   <script async defer
     src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
   </script>
   ```

> If no valid key is provided, the map area will display a user-friendly fallback message instead of crashing.

### Location Data

All facility coordinates and metadata are stored in `js/maps.js` in the `locations` array. Update or add locations by modifying this array:

```javascript
{
  name: 'Facility Name',
  address: 'Street, City',
  type: 'Hindu',       // or 'Muslim'
  lat: 18.4025,
  lng: 76.5550,
  info: 'Description of the facility.'
}
```

### Pricing Data

Service pricing is maintained in `js/quotation.js` in the `priceData` array. Each category contains an `items` array with `name` and `price` fields. Updates here automatically reflect in both the pricing tables (HTML) and the calculator.

### Contact Information

Emergency phone, WhatsApp number, email, and address are hardcoded across all page footers and in `js/main.js` (floating buttons). Update these values in all HTML files and in the WhatsApp link URL within `main.js`:

```javascript
whatsappBtn.href = 'https://wa.me/91XXXXXXXXXX?text=Hello%20Gravyaaard...';
```

---

## 🖼️ Screenshots

> *Replace these placeholders with actual screenshots of each page.*

| Page | Description |
|:-----|:------------|
| **Home** | Splash screen → Hero with dual videos → Location cards → Gallery → Testimonials |
| **Maps** | Sidebar + Google Maps with dark theme and custom markers |
| **Quotation** | Categorized pricing tables + Interactive estimate calculator |
| **Verification** | 4-step form wizard with file upload and review screen |

---

## 🔌 API Integrations

| Service | Usage | Required |
|:--------|:------|:---------|
| **Google Maps JavaScript API** | Interactive maps with custom styling, markers, info windows | Optional (fallback UI provided) |
| **Google Fonts CDN** | Inter & Playfair Display font loading | Yes (external CDN) |
| **WhatsApp Web API** | Click-to-chat floating button | No (uses `wa.me` deep link) |

> **Note:** The application has **no backend**. All form submissions and quotation downloads are handled entirely on the client side. There are no server-side APIs, databases, or authentication systems.

---

## 🌐 Browser Support

| Browser | Version | Status |
|:--------|:--------|:-------|
| Chrome  | 80+     | ✅ Fully supported |
| Firefox | 78+     | ✅ Fully supported |
| Safari  | 14+     | ✅ Fully supported |
| Edge    | 80+     | ✅ Fully supported |
| Opera   | 67+     | ✅ Fully supported |
| IE 11   | —       | ❌ Not supported |

**Key browser requirements:**
- CSS Custom Properties (CSS Variables)
- IntersectionObserver API
- ES6 template literals and arrow functions
- HTML5 `<video>` autoplay with `muted` attribute
- Drag and Drop API

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with clear, descriptive messages
   ```bash
   git commit -m "feat: add night mode toggle to navbar"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a detailed description of your changes

### Code Style Guidelines

- Use **2-space indentation** for HTML, CSS, and JS
- Follow **semantic HTML5** conventions
- Maintain the existing **CSS Custom Properties** design system
- Write **descriptive variable and function names**
- Prefer **vanilla JS** — no external libraries or frameworks

---

## 📜 License

This project is proprietary. All rights reserved.
© 2024 Gravyaaard. Serving Latur with compassion.

---

## 📞 Contact

| Channel | Details |
|:--------|:--------|
| **Address** | Latur, Maharashtra 413512, India |
| **Emergency** | 🚨 +91 98765 43210 |
| **Phone** | 📞 +91 87654 32109 |
| **Email** | 📧 info@gravyaaard.in |
| **WhatsApp** | 💬 [Chat with us](https://wa.me/919876543210?text=Hello%20Gravyaaard%2C%20I%20need%20assistance.) |
| **Hours** | All facilities: **24/7** · Office: **6:00 AM – 10:00 PM** |

---

<p align="center">
  <strong>☥ Gravyaaard</strong> — Built with compassion for Latur's communities.
</p>
