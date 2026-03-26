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
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => scrollToSection('home')}
      className="fixed right-6 bottom-24 z-40 cursor-pointer"
    >
      {/* Glowing background effect */}
      <motion.div
        animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.3)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-blue-400/30"
      >
        <div className="text-center">
          <motion.div className="text-white font-bold text-2xl">V&C</motion.div>
          <motion.div className="text-blue-200 text-xs font-semibold mt-0.5">Export</motion.div>
        </div>
      </motion.div>

      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-20 bottom-5 bg-slate-800/95 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg border border-blue-400/20 whitespace-nowrap pointer-events-none"
      >
        Vantage & Company
      </motion.div>
    </motion.div>
  )
}
