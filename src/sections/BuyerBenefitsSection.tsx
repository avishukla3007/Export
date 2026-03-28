import { motion } from 'framer-motion'
import { Package, Truck, BarChart3, ShieldCheck, Zap, Award } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function BuyerBenefitsSection() {
  const benefits = [
    {
      icon: Package,
      title: 'Premium Quality Products',
      description: 'Direct access to India\'s finest spices, herbal products, and nutraceuticals with guaranteed quality standards.',
    },
    {
      icon: ShieldCheck,
      title: 'Complete Traceability',
      description: 'Every product source verified with complete compliance documentation and quality certificates.',
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Fast, efficient global shipping with real-time tracking and door-to-door delivery options.',
    },
    {
      icon: Zap,
      title: 'Competitive Pricing',
      description: 'Direct sourcing means better margins and wholesale pricing for bulk orders.',
    },
    {
      icon: BarChart3,
      title: 'Customizable Orders',
      description: 'Flexible quantities, packaging options, and custom formulations to meet your specific needs.',
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'All products certified organic, fair trade, and compliant with international standards.',
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <SectionWrapper className="bg-slate-900/50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold text-lg">Why Buyers Choose Us</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Premium Products, Exceptional Value
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Join hundreds of businesses worldwide who trust us for their premium agricultural product needs.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon
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
              <div className="glass-effect p-8 rounded-2xl h-full flex flex-col hover:glow transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {benefit.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4 group-hover:glow-lg transition-shadow origin-left"
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-effect p-8 md:p-12 rounded-2xl text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Contact us now to discuss your product requirements, bulk ordering options, and customize your shipment.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="button-primary"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { stat: '100%', label: 'Quality Certified' },
          { stat: 'Non-GMO', label: 'All Products' },
          { stat: '30-Day', label: 'Money Back Guarantee' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="glass-effect p-6 md:p-8 rounded-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 + idx * 0.1 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              {item.stat}
            </motion.div>
            <p className="text-gray-400 text-sm md:text-base">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
