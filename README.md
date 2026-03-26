# Vantage & Company - Premium Export Business Website

A modern, professional export business website built with React (Vite), Tailwind CSS, and Framer Motion. Showcasing premium agricultural products from India with a focus on sustainability, quality, and seamless global logistics.

## 🌟 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging scroll and hover effects
- **SEO-Friendly**: Semantic HTML structure and meta tags for better search visibility
- **Performance Optimized**: Fast loading times with optimized assets
- **Interactive Components**: Animated counters, form validation, and smooth scrolling
- **Professional Layout**: Clean sections covering products, sustainability, process, and more

## 📋 Sections Included

1. **Hero Section** - Compelling headline and CTA buttons with animated background
2. **About Section** - Company description with key highlights
3. **Products Section** - Grid display of product categories (Spices, Herbal, Nutraceuticals)
4. **Why Choose Us** - 4 key competitive advantages with stats
5. **Market Opportunity** - Animated market statistics and growth metrics
6. **Process Section** - 4-step process from sourcing to export logistics
7. **Sustainability** - Environmental and social responsibility initiatives
8. **Testimonials** - Client success stories from international partners
9. **Contact Section** - Interactive contact form with validation
10. **Footer** - Complete footer with links and contact information

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

## 📦 Installation

### Prerequisites
- Node.js 16+ installed on your system

### Setup

1. Navigate to the project directory:
```bash
cd "d:\Vantage&Co"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

## 🚀 Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── Card.tsx        # Reusable card component
│   ├── SectionWrapper.tsx  # Section wrapper with animations
│   ├── AnimatedCounter.tsx # Counter animation component
│   └── LoadingAnimation.tsx # Loading screen
├── sections/           # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProductsSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── MarketOpportunitySection.tsx
│   ├── ProcessSection.tsx
│   ├── SustainabilitySection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design Features

- **Color Scheme**: Dark theme with blue/purple gradients
- **Typography**: Professional font sizing hierarchy
- **Animations**: Smooth scroll reveals, hover effects, and transitions
- **Glass Morphism**: Semi-transparent glassmorphic cards
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Update Company Info
Edit the following files to update company information:
- `src/components/Navbar.tsx` - Logo and navigation
- `src/components/Footer.tsx` - Footer links and contact info
- `src/sections/ContactSection.tsx` - Contact details

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Update primary colors here
  },
  accent: {
    // Update accent colors here
  }
}
```

### Add New Sections
1. Create a new file in `src/sections/`
2. Import and add to `App.tsx`
3. Use `SectionWrapper` component for consistency

## 📝 Form Validation

The contact form includes validation for:
- Required fields
- Email format validation
- Provides clear error messages
- Success notification after submission

## 🎯 SEO

The website includes:
- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Image alt text support
- Performance optimization

## 📤 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder ready for deployment.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Other Hosting Options
- GitHub Pages
- AWS S3 + CloudFront
- Heroku
- Firebase Hosting

## 🤝 Contributing

Feel free to fork, modify, and enhance this template for your needs.

## 📄 License

This project is open source and available for commercial and personal use.

## 📞 Support

For questions or issues related to this website template, please create an issue or contact support.

## 🙏 Credits

- Built with React, Vite, and Tailwind CSS
- Animations powered by Framer Motion
- Icons from Lucide React

---

**Ready to launch your export business online?** This template provides everything you need to showcase your products and connect with global buyers effectively!
