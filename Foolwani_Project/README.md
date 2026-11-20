# Pankaj Foolwani — Official Website (Next.js)

यह वेबसाइट [https://pankajfoolwani.com/](https://pankajfoolwani.com/) का संपूर्ण और आधुनिक Next.js (App Router, TypeScript, Tailwind CSS) क्लोन/रीक्रिएशन है। इसमें सभी डिटेल्स, ओरिजिनल इमेजेस, मल्टीलिंगुअल ट्रांसलेशन (English, हिंदी, ਪੰਜਾਬੀ), रिव्यूज़, इंक्वायरी फॉर्म और व्हाट्सएप्प इंटीग्रेशन शामिल हैं।

---

## 🌟 मुख्य विशेषताएं (Key Features)

1. **लग्जरी डिज़ाइन और ब्रांडिंग (Luxury Aesthetic)**:
   - डार्क और गोल्ड थीम (`#0a0a0d` और `#d4af37`)
   - `Playfair Display` (Serif & Italic accents) और `Inter` (Sans-serif) टाइपोग्राफी
   - ओरिजिनल हाई-रेसोल्यूशन इमेजेस (`pankaj-portrait.jpg`, `venture-docs.jpg`, `venture-travel.jpg`, `venture-seva.jpg`)
   - कस्टमाइज़्ड SVG फेविकॉन (`PF` गोल्ड मोनोग्राम)

2. **3 भाषाओं का सपोर्ट (English, हिंदी, ਪੰਜਾਬੀ)**:
   - नेवबार में 1-क्लिक लैंग्वेज स्विचर (EN, हिंदी, ਪੰਜਾਬੀ)
   - सभी सेक्शन्स (Hero, About, Services, Network, Reviews, Contact, Footer) तुरंत बिना पेज रीलोड के भाषा बदलते हैं।

3. **सेक्शन्स (Page Sections)**:
   - **Navbar**: PF लोगो, नेविगेशन लिंक्स, भाषा स्विचर, "CONNECT" बटन और मोबाइल रिस्पॉन्सिव मेनू।
   - **Hero Section**: फाउंडर पोर्ट्रेट, "Founder & Principal" बैज, मुख्य टैगलाइन, "Let's Connect" और "Call Now" बटन, लोकेशन लिस्ट।
   - **Stats Bar**: 20,350+ हैप्पी क्लाइंट्स, 3 बिजनेस वेंचर्स, 6 बिजनेस लोकेशन्स।
   - **Infinite Marquee Ticker**: स्मूथ रनिंग सिटीज और इंटरनेशनल डेस्क टिकर।
   - **About Me**: पंकज फूलवानी की पूरी जर्नी, विजन, PF एम्बलम मोनोग्राम और "My Approach" लिस्ट।
   - **Services ("Two Paths. One Standard of Excellence")**:
     - Path 01: Business Consulting (7 सेवाएं)
     - Path 02: Documentation & Travel Services (8 सेवाएं)
     - व्हाट्सएप्प और इंक्वायरी बटन के साथ।
   - **My Business Network ("Three Dedicated Brands")**:
     - 01 / Documents: Perfect Documents
     - 02 / Travel: Mr And Miss Perfect Trips Pvt. Ltd.
     - 03 / Govt & Digital: Digital Seva Kendra
   - **Experience & Google Reviews**:
     - 8+ वर्ष अनुभव, 20,350+ क्लाइंट्स
     - गूगल 5.0 रेटिंग (38 रिव्यूज़) और असली कस्टमर टेस्टिमोनियल्स (Dr. Priyanka Mehra, Rajat Kaushik, Preety Sharma)
     - "Share Your Experience" और "Read All Reviews on Google" लिंक्स
   - **Contact & WhatsApp ("Let's Start a Conversation")**:
     - डायरेक्ट व्हाट्सएप्प (+91 7009589439)
     - डायरेक्ट कॉल (+91 7009589439)
     - ईमेल (digitalservice115@gmail.com)
     - ऑफिस एड्रेस (Dhakoli, Zirakpur, Punjab) और टाइमिंग्स
     - सोशल लिंक्स (Instagram, WhatsApp, JustDial)
     - इंटरएक्टिव इंक्वायरी फॉर्म (Next.js API `/api/enquiries` सपोर्ट)
   - **Floating WhatsApp Quick Drawer**:
     - बॉटम-राइट में फ्लोटिंग गोल्ड बटन
     - क्लिक करने पर प्री-फिल्ड टॉपिक्स (General, Consulting, Documentation, Travel, Corporate) के साथ तुरंत व्हाट्सएप्प खुलता है।
   - **Footer**:
     - ब्रांड डिटेल्स, क्विक लिंक्स, कनेक्ट इन्फो और कॉपीराइट नोटिस।

4. **SEO और स्कीमा (Structured Data)**:
   - Google Rich Snippets के लिए JSON-LD `Person` और `LocalBusiness` स्कीमा शामिल।

---

## 🚀 कैसे चलाएं (How to Run)

### 1. डेवलपमेंट सर्वर (Development Mode)
```bash
cd pankaj-foolwani
npm run dev
```
ब्राउज़र में `http://localhost:3000` खोलें।

### 2. प्रोडक्शन बिल्ड (Production Mode)
```bash
cd pankaj-foolwani
npm run build
npm start
```

---

## 📁 प्रोजेक्ट स्ट्रक्चर (Project Structure)
```
pankaj-foolwani/
├── public/
│   ├── assets/
│   │   ├── pankaj-portrait.jpg
│   │   ├── venture-docs.jpg
│   │   ├── venture-seva.jpg
│   │   └── venture-travel.jpg
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── enquiries/route.ts   # इंक्वायरी फॉर्म हैंडलर
│   │   │   └── reviews/route.ts     # गूगल रिव्यूज़ API
│   │   ├── globals.css              # लग्जरी गोल्ड थीम और एनिमेशन्स
│   │   ├── layout.tsx               # Google Fonts, Metadata, JSON-LD Schema
│   │   └── page.tsx                 # मुख्य होमपेज और स्टेट मैनेजमेंट
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── LocationMarquee.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── NetworkSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppModal.tsx
│   │   └── Icons.tsx
│   └── data/
│       ├── config.ts                # कांटेक्ट, लिंक्स और रिव्यूज़ डेटा
│       └── translations.ts          # EN, HI, PA की संपूर्ण ट्रांसलेशन डिक्शनरी
```
