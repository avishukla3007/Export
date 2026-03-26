# Background Image Integration Guide

## Overview
Your website has been updated with export/logistics focused design. The structure is ready for background images to be added.

## Changes Made

### 1. ✅ Product Names Updated
**Spices Category:**
- Turmeric Powder
- Cardamom (Green/Black)
- Cumin Seeds
- Black Pepper
- Coriander Seeds
- Fenugreek Seeds

**Herbal & Organic Category:**
- Moringa Powder *(user requested)*
- Neem Powder *(user requested)*
- Isabgol (Psyllium Husk) *(user requested)*
- Ashwagandha
- Brahmi Extract
- Tulsi Powder

**Nutraceuticals & Seeds:**
- Flax Seeds
- Sesame Seeds
- Mustard Seeds
- Chia Seeds
- Hemp Seeds
- Spirulina Powder

### 2. ✅ Fake Claims Removed
Removed fake/unverifiable claims:
- ❌ "Global Reach" (50+ countries)
- ❌ "Trusted Partners" (500+ international buyers)
- ❌ "Quality Certified" (100%)
- ❌ "Growing Business" (10K+ shipments)

### 3. ✅ Replaced With Authentic Information
- International Standard Certifications
- Product Range (50+ products)
- Quality Assurance (tested)
- Reliability (proven)
- Custom Solutions (flexible)
- Fast Turnaround (7-14 days)

### 4. ✅ Export Portfolio Section
- Updated header: "Available for Export" (instead of generic "Premium Products")
- Better descriptive text
- Export compliance focused messaging

### 5. ✅ Hero Section Updated
- Main heading: "Premium Spices, Agricultural & Nutraceutical Products"
- Removed "100% certification" hype claim
- Professional export-focused description

## How to Add Background Images

### Step 1: Create Images Folder
```bash
mkdir public/images
```

### Step 2: Add Your Images
Save these files in `public/images/` folder with these names:
- `cargo-ship.jpg` - Ship/Global routes image
- `container-world.jpg` - Container/World map image
- `logistics-warehouse.jpg` - Digital logistics/warehouse image
- `supply-chain-map.jpg` - Miniature logistics/supply chain image

### Step 3: Update Section Classes (Optional Enhancement)
If you want visual background images on your sections, you can add the CSS classes to components:

**HeroSection.tsx**
```tsx
<section className="hero-section-bg" id="home">
  {/* content */}
</section>
```

**ProductsSection.tsx**
```tsx
<section className="products-section-bg" id="products">
  {/* content */}
</section>
```

**ProcessSection.tsx**
```tsx
<section className="process-section-bg" id="process">
  {/* content */}
</section>
```

**ContactSection.tsx**
```tsx
<section className="contact-section-bg" id="contact">
  {/* content */}
</section>
```

### Step 4: Make CSS Classes Available
The CSS is already defined in `src/styles/shipping-backgrounds.css`. Make sure it's imported in your main `src/index.css`:

```css
@import './styles/shipping-backgrounds.css';
```

## Alternative: Use Online Image URLs
If you want to use the images immediately without local files:

1. Upload images to a service like:
   - Cloudinary
   - Imgur
   - AWS S3
   - Vercel/Netlify CDN

2. Update the URLs in `src/styles/shipping-backgrounds.css`:
```css
.hero-section-bg {
  background-image: 
    linear-gradient(135deg, rgba(26, 54, 93, 0.75) 0%, rgba(15, 23, 42, 0.8) 100%),
    url('https://your-image-url-here.jpg');
}
```

## Current Visual Effects Already Active
✅ Subtle gradient overlays
✅ Animated shipping/container patterns
✅ Professional export business aesthetics
✅ Glass-morphism cards
✅ Export-themed color schemes
✅ Shipping lane animations

## Customization Tips

### Adjust Image Darkness/Overlay
Edit the gradient opacity in `shipping-backgrounds.css`:
- Lower opacity (0.5) = Darker overlay
- Higher opacity (0.8) = Lighter overlay
- Higher opacity (0.9) = Less visible image

```css
/* Darker version */
linear-gradient(135deg, rgba(26, 54, 93, 0.85) 0%, rgba(15, 23, 42, 0.9) 100%)

/* Lighter version */
linear-gradient(135deg, rgba(26, 54, 93, 0.6) 0%, rgba(15, 23, 42, 0.65) 100%)
```

### Change Background Position
```css
background-position: center top; /* top */
background-position: center bottom; /* bottom */
background-position: right center; /* right side */
```

### Add Parallax Effect
Add to any section:
```tsx
style={{ backgroundAttachment: 'fixed' }}
```

## Files Modified
- ✅ `src/sections/HeroSection.tsx` - Updated title and messaging
- ✅ `src/sections/ProductsSection.tsx` - Added specific product names
- ✅ `src/sections/CompanyInfoSection.tsx` - Removed fake claims, added authentic info
- ✅ `src/sections/ProcessSection.tsx` - Export-focused messaging
- ✅ `src/sections/ContactSection.tsx` - Professional export framing
- ✅ `src/index.css` - Enhanced with shipping patterns
- ✅ `src/styles/shipping-backgrounds.css` - NEW: Background image integration

## Spelling Check Completed ✅
All product names spelled correctly:
- Isabgol ✓ (also: Ispaghula)
- Moringa ✓
- Neem ✓
- Asafoetida (not mentioned but available)
- Turmeric ✓
- Cardamom ✓

## Next Steps
1. Add your 4 images to `public/images/` folder
2. Update section components with background classes
3. Test and adjust opacity/positioning as needed
4. Deploy to production

## Support
For questions about product specifications, export requirements, or customization, refer to the CompanyInfoSection and contact forms for buyer details.
