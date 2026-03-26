import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, Users } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Freshness & Potency',
      description: 'Harvest-to-export within days, maintaining peak nutritional value and flavor intensity.',
    },
    {
      icon: Shield,
      title: 'Complete Traceability',
      description: 'Every product tracked from farm to your facility with transparent documentation.',
    },
    {
      icon: Zap,
      title: 'Custom Solutions',
      description: 'Tailored products, packaging, and quantities to meet your unique requirements.',
    },
    {
      icon: Users,
      title: 'Agile Service',
      description: 'Responsive support, flexible terms, and commitment to long-term partnerships.',
    },
  ]

  return (
    <SectionWrapper className="bg-gradient-to-b from-slate-900/30 to-slate-800/50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold text-lg">Why Partner With Us</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Our Competitive Advantages
        </h2>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect p-6 md:p-8 rounded-2xl h-full flex flex-col hover:glow transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:glow transition-shadow"
                >
                  <Icon size={28} className="text-blue-400" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4 group-hover:glow-lg transition-shadow"
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { number: '15+', label: 'Years Experience' },
          { number: '50+', label: 'Countries Served' },
          { number: '1000+', label: 'Happy Clients' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="glass-effect p-6 md:p-8 rounded-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              {stat.number}
            </motion.div>
            <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
