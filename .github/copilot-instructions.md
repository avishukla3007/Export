# Vantage & Company Website - Development Instructions

## Project Overview

This is a modern, professional export business website for Vantage & Company built with React (Vite), Tailwind CSS, and Framer Motion. The site showcases premium agricultural products with focus on quality, sustainability, and global logistics.

## Tech Stack

- React 18 with TypeScript
- Vite - Fast build tool
- Tailwind CSS - Utility-first CSS
- Framer Motion - Advanced animations
- Lucide React - Icon library

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

✓ Fully responsive design (mobile-first)
✓ Dark theme with gradient accents
✓ Smooth animations and transitions
✓ Interactive form with validation
✓ Animated counters for market stats
✓ Reusable component architecture
✓ SEO-friendly structure
✓ Performance optimized

## Project Structure

```
src/
├── components/       # Reusable UI components
├── sections/        # Page sections
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Component Architecture

### Reusable Components
- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Complete footer with links
- **Card**: Reusable card component with hover effects
- **SectionWrapper**: Consistent section styling
- **AnimatedCounter**: Animated number display
- **LoadingAnimation**: Initial loading screen

### Page Sections
- HeroSection - Hero banner with CTA
- AboutSection - Company introduction
- ProductsSection - Product categories
- WhyChooseUsSection - Competitive advantages
- MarketOpportunitySection - Market stats
- ProcessSection - 4-step process
- SustainabilitySection - CSR initiatives
- TestimonialsSection - Client testimonials
- ContactSection - Contact form
- Footer - Footer with links

## Development Guidelines

### Adding New Sections

1. Create file in `src/sections/` with naming pattern: `SectionName.tsx`
2. Wrap content with `SectionWrapper` component
3. Import in `App.tsx` and add to render
4. Use `motion` components from Framer Motion for animations

### Styling

- Use Tailwind CSS utility classes
- Follow dark theme color scheme
- Apply `glass-effect` and `glass-effect-lg` for glassmorphism
- Use gradient classes from custom config
- Ensure mobile responsiveness with `md:` and `lg:` breakpoints

### Animation Pattern

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Form Validation

ContactSection uses client-side validation with:
- Email format validation
- Required field checks
- Clear error display
- Success notification

## Customization

### Update Company Information
- Edit company details in Navbar.tsx
- Update footer links in Footer.tsx
- Modify contact info in ContactSection.tsx

### Change Colors
Edit `tailwind.config.js` colors section to update theme colors

### Add Products
Edit ProductsSection.tsx items array to add/remove products

## Performance Tips

✓ Images are optimized
✓ CSS is minified with Tailwind
✓ Code splitting with Vite
✓ Lazy loading with scroll reveal
✓ Animation optimization with GPU acceleration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

```bash
# Build production
npm run build

# Deploy dist/ folder to hosting

# Recommended: Vercel, Netlify, GitHub Pages
```

## Troubleshooting

**Styles not loading**: Clear node_modules and reinstall
**Animations not smooth**: Check browser compatibility
**Form submission issues**: Check console for errors

## Future Enhancements

- [ ] Backend integration for form handling
- [ ] Blog section
- [ ] Product gallery with filters
- [ ] Client dashboard
- [ ] Multi-language support
- [ ] Newsletter subscription

## Files to Know

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind customization
- `postcss.config.js` - PostCSS configuration
