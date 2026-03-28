import { motion } from 'framer-motion'
import { Package, Leaf, TrendingUp } from 'lucide-react'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      title: 'Premium Spices',
      icon: Package,
      items: ['Turmeric Powder', 'Cardamom (Green/Black)', 'Cumin Seeds', 'Black Pepper', 'Coriander Seeds', 'Fenugreek Seeds'],
      description: 'Premium-grade spices from certified suppliers meeting international quality and export compliance standards.',
      color: 'text-yellow-400',
    },
    {
      id: 2,
      title: 'Herbal & Organic',
      icon: Leaf,
      items: ['Moringa Powder', 'Neem Powder', 'Isabgol (Psyllium Husk)', 'Ashwagandha', 'Brahmi Extract', 'Tulsi Powder'],
      description: 'Organic herbal products and plant-based extracts certified for international export with strict testing.',
      color: 'text-green-400',
    },
    {
      id: 3,
      title: 'Nutraceuticals & Seeds',
      icon: TrendingUp,
      items: ['Flax Seeds', 'Sesame Seeds', 'Mustard Seeds', 'Chia Seeds', 'Hemp Seeds', 'Spirulina Powder'],
      description: 'Advanced health formulations and nutrient-rich seeds meeting international compliance and safety standards.',
      color: 'text-blue-400',
    },
  ]

  return (
    <SectionWrapper id="products" className="products-section-bg bg-slate-900/50 relative overflow-hidden cargo-section">
      {/* Export business background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        {/* Subtle shipping pattern */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-blue-400 font-semibold text-lg">Export Portfolio</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
          Available for Export
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          Wide range of certified spices, herbal, and nutraceutical products available for bulk export. All items meet international quality and compliance standards.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {products.map((product, idx) => {
          const Icon = product.icon
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col group">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-5xl mb-4 inline-block ${product.color}`}
                >
                  <Icon size={56} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Items List */}
                <div className="mb-6">
                  <p className="text-blue-400 font-semibold text-sm mb-3">Key Products:</p>
                  <ul className="space-y-2">
                    {product.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + itemIdx * 0.05 }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30 border border-blue-400/30 rounded-lg text-blue-300 font-medium transition-all"
                >
                  Request Quote →
                </motion.button>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
