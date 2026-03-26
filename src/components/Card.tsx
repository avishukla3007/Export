import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
            }
          : {}
      }
      className={`glass-effect-lg p-6 md:p-8 rounded-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
