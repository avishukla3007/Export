import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Products', 'Process', 'Contact']

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass-effect-lg"
    >
      <div className="section-container flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg overflow-hidden flex items-center justify-center border border-blue-400/30">
            <img 
              src="https://cdn.gamma.app/q6jph620zp1encj/generated-images/AgNBG51bmwgH468iSPL4b.png" 
              alt="Vantage & Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold text-white">Vantage</h1>
            <p className="text-xs text-gray-300">& Company</p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 lg:gap-2">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="hidden sm:block button-primary"
        >
          Place Your Order
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-white/10 px-4 py-4"
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <motion.button
                key={link}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(link.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="w-full button-primary"
            >
              Place Your Order
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
