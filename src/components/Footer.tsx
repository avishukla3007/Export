import { Mail, Linkedin, Twitter, Instagram, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Company', links: ['About', 'Careers', 'Blog'] },
    { title: 'Products', links: ['Spices', 'Herbal', 'Nutraceuticals'] },
    { title: 'Support', links: ['Contact', 'FAQ', 'Shipping'] },
  ]

  const socialLinks = [
    { icon: Mail, href: 'mailto:Vantageandcompany@gmail.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-white/10 backdrop-blur-xl">
      <div className="section-container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Vantage & Company</h3>
                <p className="text-sm text-gray-400">Premium Agricultural Exports</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Connecting India's agricultural heritage with global buyers through premium quality, sustainability, and seamless logistics.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    className="p-2 bg-white/10 hover:bg-blue-500/20 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-blue-400" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const getPath = (linkName: string) => {
                    if (linkName === 'Contact') return '/contact'
                    if (linkName === 'About') return '/about'
                    return '#'
                  }
                  const path = getPath(link)
                  return (
                    <li key={link}>
                      {path === '#' ? (
                        <a
                          href="#"
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          {link}
                        </a>
                      ) : (
                        <button
                          onClick={() => navigate(path)}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm bg-transparent border-none cursor-pointer p-0 text-left"
                        >
                          {link}
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-blue-400" />
            <div>
              <p className="text-gray-400 text-sm">Email us</p>
              <a
                href="mailto:Vantageandcompany@gmail.com"
                className="text-white font-semibold hover:text-blue-400 transition-colors"
              >
                Vantageandcompany@gmail.com
              </a>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/contact')}
            className="button-primary"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Founder Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-6 md:p-8 mb-8"
        >
          <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">👤</span> Founder & Vision
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-300 font-semibold mb-2">Founder</p>
              <p className="text-white text-lg font-bold mb-4">Aviral Shukla</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aviral Shukla is the founder and driving force behind Vantage & Company. With a passion for sustainable agriculture and global trade, Aviral has built this company to bridge India's agricultural excellence with international markets.
              </p>
            </div>
            <div>
              <p className="text-blue-300 font-semibold mb-2">Direct Contact</p>
              <a
                href="mailto:Vantageandcompany@gmail.com"
                className="text-white font-semibold hover:text-blue-400 transition-colors mb-4 flex items-center gap-2"
              >
                <Mail size={18} className="text-blue-400" />
                Vantageandcompany@gmail.com
              </a>
              <p className="text-gray-400 text-sm mt-4">
                Connect directly with Aviral to discuss strategic opportunities, large orders, or partnerships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vantage & Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
