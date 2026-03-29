import { motion } from 'framer-motion'
import { Leaf, Heart, Recycle } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function SustainabilitySection() {
  const initiatives = [
    {
      icon: Heart,
      title: 'Professional Standards',
      description: 'Ethical sourcing practices and professional partnerships with certified suppliers.',
      benefits: ['Ethical Sourcing', 'Fair Practices', 'Compliance', 'Transparency'],
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Organic farming, water conservation, and soil health ensure long-term agricultural viability.',
      benefits: ['Organic Farming', 'Water Saving', 'Soil Health', 'Biodiversity'],
    },
    {
      icon: Recycle,
      title: 'Environmental Care',
      description: 'Carbon-neutral operations and eco-friendly packaging minimize our environmental footprint.',
      benefits: ['Renewable Energy', 'Eco Packaging', 'Waste Reduction', 'Carbon Offset'],
    },
  ]

  return (
    <SectionWrapper className="bg-gradient-to-b from-slate-800/30 to-slate-900/30">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-green-400 font-semibold text-lg">Sustainability</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
          Committed to a Greener Future
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Our commitment to sustainability goes beyond compliance. It's embedded in every decision we make.
        </p>
      </motion.div>

      {/* Initiatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {initiatives.map((initiative, idx) => {
          const Icon = initiative.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : idx === 2 ? 50 : 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full flex flex-col hover:glow transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-xl flex items-center justify-center border-2 border-green-400/50">
                    <Icon size={32} className="text-green-400" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {initiative.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {initiative.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <p className="text-green-400 font-semibold text-xs uppercase tracking-wider">Benefits:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {initiative.benefits.map((benefit, bIdx) => (
                      <motion.div
                        key={bIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + bIdx * 0.05 }}
                        className="text-xs text-gray-300 flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect p-8 md:p-12 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Impact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { stat: 'ISO', label: 'Quality Certified' },
            { stat: 'FSSAI', label: 'Approved' },
            { stat: '100%', label: 'Testing Compliance' },
            { stat: '4', label: 'Premium Categories' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2"
              >
                {item.stat}
              </motion.div>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
