import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            y: [-100, 100, -100],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [100, -100, 100],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm md:text-base font-medium">
            🌍 Connecting Global Markets
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-4 md:mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Cultivating Global Flavors, Naturally
        </motion.h1>

        {/* Subheading text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 md:mb-12 leading-relaxed"
        >
          Connecting India's agricultural heritage with global buyers. Premium spices, herbal products, and nutraceuticals delivered with excellence.
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
            onClick={() => scrollToSection('products')}
            className="button-primary"
          >
            Explore Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="button-secondary"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl"
        >
          {[
            { icon: '✓', text: 'Premium Quality' },
            { icon: '✓', text: 'Global Exports' },
            { icon: '✓', text: 'Sustainable Practices' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-effect p-4 md:p-6 rounded-xl"
            >
              <div className="text-2xl text-blue-400 mb-2">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-blue-400/30 bg-white/5 hover:bg-white/10 transition-colors"
        >
          <ChevronDown size={24} className="text-blue-400" />
        </button>
      </motion.div>
    </section>
  )
}
