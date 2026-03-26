import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${className}`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-500/10 to-transparent opacity-50" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '0px 0px -200px 0px' }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  )
}
