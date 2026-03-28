import { motion } from 'framer-motion'
import { ChevronDown, Globe, Truck, Award } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="hero-section-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Professional export business background with shipping theme */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs - shipping container colors */}
        <motion.div
          animate={{
            y: [-100, 100, -100],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [100, -100, 100],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        />

        {/* Animated shipping/trade icons as background decorations */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-40 text-blue-500/20"
        >
          <Truck size={200} strokeWidth={0.5} />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 left-20 text-indigo-500/20"
        >
          <Globe size={200} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
        {/* Subheading with export business focus */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block px-4 py-2 bg-blue-600/30 border border-blue-400/60 rounded-full text-blue-300 text-sm md:text-base font-medium">
            � Spices • Herbals • Nutraceuticals
          </span>
        </motion.div>

        {/* Main Heading - Export Business Focused */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-4 md:mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Premium Spices, Agricultural & Nutraceutical Products
        </motion.h1>

        {/* Professional subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 md:mb-12 leading-relaxed"
        >
          Premium spices, herbal, and nutraceutical export services. Professional sourcing, quality assurance, and reliable export processing for international buyers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="button-primary"
          >
            Place Your Order
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('products')}
            className="button-secondary"
          >
            Explore Products
          </motion.button>
        </motion.div>

        {/* Key metrics - Export business credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl"
        >
          {[
            { icon: Award, text: 'ISO Certified', subtext: 'Quality Standards', color: 'text-blue-400' },
            { icon: Globe, text: 'Export Ready', subtext: 'Fast Processing', color: 'text-indigo-400' },
            { icon: Truck, text: 'Professional Service', subtext: 'Expert Team', color: 'text-blue-300' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.05 }}
                className="export-card p-4 md:p-8 rounded-xl group"
              >
                <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon size={40} />
                </div>
                <p className="text-lg md:text-xl font-bold text-white mb-1">{item.text}</p>
                <p className="text-gray-400 text-sm">{item.subtext}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust indicators */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-gray-400 text-sm md:text-base"
        >
          ✓ 100% Quality Certified • ✓ Professional Support
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-blue-400/30 bg-white/5 hover:bg-blue-400/20 transition-colors"
        >
          <ChevronDown size={24} className="text-blue-400" />
        </button>
      </motion.div>
    </section>
  )
}
