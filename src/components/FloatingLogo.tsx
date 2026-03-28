import { motion } from 'framer-motion'

export default function FloatingLogo() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: [0, -15, 0] }}
      transition={{ duration: 0.8, delay: 1, y: { duration: 3, repeat: Infinity, type: 'easeInOut' } }}
      whileHover={{ scale: 1.15 }}
      onClick={() => scrollToSection('home')}
      className="fixed right-6 bottom-24 z-40 cursor-pointer group"
    >
      {/* Glowing background effect */}
      <motion.div
        animate={{ boxShadow: ['0 0 30px rgba(59, 130, 246, 0.4)', '0 0 60px rgba(59, 130, 246, 0.7)', '0 0 30px rgba(59, 130, 246, 0.4)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border-2 border-blue-400/40 overflow-hidden"
      >
        <img 
          src="https://cdn.gamma.app/q6jph620zp1encj/generated-images/CJAV7oUPxu95_moOJCXcJ.png" 
          alt="Vantage & Company Logo"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: -15 }}
        transition={{ duration: 0.2 }}
        className="absolute right-40 bottom-12 bg-slate-800/95 backdrop-blur-md text-white text-sm px-4 py-3 rounded-lg border border-blue-400/30 whitespace-nowrap pointer-events-none font-semibold"
      >
        ↑ Back to Top
      </motion.div>
    </motion.div>
  )
}
