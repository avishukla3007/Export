import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <div className="w-full h-screen bg-gradient-dark flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Animated circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-4 border-4 border-transparent border-t-purple-500 border-r-blue-500 rounded-full"
        />
        
        {/* Center logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-20 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Vantage & Company</h2>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}
