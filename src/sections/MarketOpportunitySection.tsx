import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import SectionWrapper from '../components/SectionWrapper'

export default function MarketOpportunitySection() {
  const markets = [
    {
      title: 'Global Spice Market',
      value: 314,
      unit: 'B',
      description: 'Booming demand for premium spices worldwide',
    },
    {
      title: 'Herbal Products Growth',
      value: 75,
      unit: '%',
      description: 'Annual growth rate in herbal supplements',
    },
    {
      title: 'Nutraceutical Market',
      value: 778,
      unit: 'B',
      description: 'Explosive growth in health and wellness sector',
    },
  ]

  return (
    <SectionWrapper className="bg-slate-800/30">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold text-lg">Market Growth</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Explosive Market Opportunities
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          The global demand for premium agricultural products is skyrocketing, creating unprecedented opportunities for growth.
        </p>
      </motion.div>

      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {markets.map((market, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="glass-effect p-8 rounded-2xl h-full text-center hover:glow transition-all duration-300">
              {/* Stat Number */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-4"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <AnimatedCounter
                    end={market.value}
                    suffix={market.unit}
                    prefix="$"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {market.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {market.description}
              </p>

              {/* Growth indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="mt-6 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full origin-left group-hover:glow transition-shadow"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Opportunity Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect p-8 md:p-12 rounded-2xl max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Why Now?</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            🌱 <strong>Consumer Shift:</strong> Growing global awareness of health and wellness is driving unprecedented demand for natural, organic products.
          </p>
          <p>
            🚀 <strong>Export Potential:</strong> India's agricultural sector is primed to dominate international markets with premium quality offerings.
          </p>
          <p>
            💰 <strong>Profit Margins:</strong> Premium products command higher margins, creating lucrative opportunities for strategic partners.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
