import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/' },
    { label: 'Process', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (path: string) => {
    navigate(path)
    setIsOpen(false)
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
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div 
              animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.3)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 md:w-20 md:h-20 rounded-lg overflow-hidden flex items-center justify-center border border-blue-400/30 shadow-lg backdrop-blur-sm"
            >
              <img 
                src="https://cdn.gamma.app/q6jph620zp1encj/generated-images/CJAV7oUPxu95_moOJCXcJ.png" 
                alt="Vantage & Company Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-2xl font-bold text-white">Vantage</h1>
              <p className="text-xs text-gray-300">& Company</p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 lg:gap-2">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleNavClick(link.path)}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('/contact')}
          className="hidden sm:block button-primary"
        >
          Contact Us
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
                key={link.label}
                whileHover={{ x: 10 }}
                onClick={() => handleNavClick(link.path)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('/contact')}
              className="w-full button-primary"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
