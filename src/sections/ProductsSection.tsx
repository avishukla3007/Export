import { motion } from 'framer-motion'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      title: 'Premium Spices',
      icon: '🌶️',
      items: ['Turmeric', 'Cardamom', 'Saffron', 'Cumin', 'Black Pepper'],
      description: 'Hand-selected, premium-grade spices with authentic flavor profiles.',
    },
    {
      id: 2,
      title: 'Herbal Products',
      icon: '🌿',
      items: ['Ashwagandha', 'Brahmi', 'Moringa', 'Tulsi', 'Neem'],
      description: 'Organic herbal extracts and powders for wellness and vitality.',
    },
    {
      id: 3,
      title: 'Nutraceuticals',
      icon: '💊',
      items: ['Health Supplements', 'Immunity Boosters', 'Adaptogens', 'Antioxidants'],
      description: 'Advanced formulations supporting health and sustainable living.',
    },
  ]

  return (
    <SectionWrapper id="products" className="bg-slate-900/50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold text-lg">Our Portfolio</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Premium Product Categories
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Discover our diverse range of premium agricultural products sourced directly from India's finest producers.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
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
                className="text-5xl mb-4 inline-block"
              >
                {product.icon}
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
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 rounded-lg text-blue-300 font-medium transition-all"
              >
                Learn More →
              </motion.button>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
