import { motion } from 'framer-motion'
import { Globe, Leaf, Award } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function AboutSection() {
  const highlights = [
    {
      icon: Leaf,
      title: 'Premium Sourcing',
      description: 'Directly from certified farms across India',
    },
    {
      icon: Globe,
      title: 'Global Exports',
      description: 'Serving international markets with excellence',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification standards',
    },
  ]

  return (
    <SectionWrapper id="about" className="bg-slate-800/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-blue-400 font-semibold text-lg">Who We Are</span>
          </motion.div>

          <h2 className="heading-md mb-6 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            Bridging Continents with Quality
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Vantage & Company is a leading export company specializing in India's finest agricultural products. With deep roots in sustainable farming and a commitment to excellence, we connect India's heritage with global buyers who value premium quality and authenticity.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            Our mission is to empower Indian farmers while delivering world-class products to discerning international customers. Every product tells a story of dedication, sustainability, and unwavering quality standards.
          </p>
        </motion.div>

        {/* Right Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ x: 10 }}
                className="glass-effect p-6 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20 border border-blue-400/50">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
