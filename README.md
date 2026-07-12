# TRIASTEK Static Website

Static website untuk **PT Triguna Akses Teknologi (TRIASTEK)** — penyedia solusi telekomunikasi dan IT infrastructure di Indonesia.

## 🚀 Features

- **Modern Design** — Custom CSS dengan design system berdasarkan brand colors (ungu, orange, teal dari logo)
- **Responsive** — Mobile-first, breakpoints 575px / 768px / 991px
- **Sections:**
  - Hero Carousel (5 slides dengan overlay gradient)
  - Services Grid (4 kategori layanan + showcase image)
  - Why Us (Intro card + 4 fitur + VISI/MISI)
  - About (Profil perusahaan + Lisensi + Milestone timeline)
  - Clients (6 kategori tab: TELCO, VENDORS, GOVERMENT, MINING, HOSPITAL, OTHERS)
  - Contact (8 kantor lokasi Indonesia)
  - Hubungi Kami (Map + Jam Operasional + Form Kirim Pesan)

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Dark Purple) | `#1A0533` | Header, Footer, Text utama |
| Accent (Purple) | `#873CFE` | Primary buttons, icons, highlights |
| Accent Light | `#6D89FE` | Gradients, hover states |
| Accent Alt (Orange) | `#FE9D00` | CTA buttons, timeline year |
| Teal | `#00C393` | Secondary icons, checklists |

## 🛠️ Tech Stack

- **HTML5** + **CSS3** (Custom properties, Grid, Flexbox)
- **Bootstrap 5** (Navbar, Modal, Forms utilities)
- **AOS** (Animate On Scroll)
- **GLightbox** (Image lightbox)
- **Swiper** (Carousel - Hero & Milestone)
- **Vanilla JS** (Mobile nav toggle, smooth scroll, active nav)

## 📁 Structure

```
triastek/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── img/
│   │   ├── logo.png
│   │   ├── hero-img.png
│   │   ├── whatwedo.png
│   │   └── clients/
│   └── vendor/ (bootstrap, aos, glightbox, swiper, icons)
├── README.md
```

## 🚀 Quick Start

Buka `index.html` langsung di browser — tidak perlu build step.

Atau serve lokal:
```bash
npx serve .
# atau
python3 -m http.server 8000
```

## 📦 Deployment

Static files — deploy ke Netlify, Vercel, GitHub Pages, atau hosting biasa.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/dianrp-space/triastek-static.git
git push -u origin main
```

## 📄 License

Proprietary — PT Triguna Akses Teknologi.