import { motion } from 'framer-motion'
import { Package, Leaf, TrendingUp, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'
import { productsDatabase } from '../data/products'

export default function ProductsSection() {
  const navigate = useNavigate()

  // Map product names to their product IDs
  const getProductIdByName = (name: string): string => {
    const product = productsDatabase.find(p => p.name === name)
    return product?.id || ''
  }
  const products = [
    {
      id: 1,
      title: 'Premium Superfoods & Specialty',
      icon: TrendingUp,
      items: ['Sea Buckthorn Extract & Berries', 'Premium Kashmiri Saffron', 'Black Cardamom Pods', 'Organic Stevia Leaves', 'Dried Kasuri Methi - Fenugreek Leaves'],
      description: 'Premium superfoods and specialty ingredients with global demand, high margins, and limited competition. Sourced from certified organic suppliers meeting international quality standards.',
      color: 'text-purple-400',
    },
    {
      id: 2,
      title: 'Organic Herbal Supplements',
      icon: Leaf,
      items: ['Organic Moringa Leaf Powder', 'Pure Neem Leaf Powder', 'Organic Ashwagandha Root Extract', 'Brahmi Leaf Extract', 'Holy Basil Powder - Tulsi', 'Isabgol - Psyllium Husk'],
      description: 'Certified organic herbal supplements and plant-based extracts with proven health benefits. Highly sought after in USA, Europe, and UAE wellness markets.',
      color: 'text-green-400',
    },
    {
      id: 3,
      title: 'Premium Spices & Seasonings',
      icon: Package,
      items: ['Pure Turmeric Powder - Curcumin Rich', 'Green Cardamom - Premium Grade', 'Dried Cumin Seeds - Hand-Selected', 'Dried Coriander Seeds - Pure', 'White Sesame Seeds - Premium', 'Brown Mustard Seeds - Organic'],
      description: 'Premium-grade spices sourced from certified suppliers. Meeting international quality, food safety, and export compliance standards for demanding global markets.',
      color: 'text-amber-400',
    },
    {
      id: 4,
      title: 'Premium Nutraceuticals',
      icon: TrendingUp,
      items: ['Ashwagandha Extract - KSM-66', 'Organic Turmeric Curcumin Extract - 95%', 'Himalayan Shilajit Extract', 'Bacopa Moniera Extract', 'Triphala Powder - Ayurvedic Blend', 'Cordyceps Militaris Extract'],
      description: 'Premium nutraceutical supplements and standardized extracts with clinical research backing. High-demand products in USA, Europe, UAE wellness and health markets with excellent margins.',
      color: 'text-red-400',
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
                    {product.items.map((item, itemIdx) => {
                      const productId = getProductIdByName(item)
                      return (
                        <motion.li
                          key={itemIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + itemIdx * 0.05 }}
                          whileHover={{ x: 5 }}
                          onClick={() => productId && navigate(`/product/${productId}`)}
                          className={`flex items-center gap-2 text-gray-300 text-sm ${productId ? 'cursor-pointer hover:text-blue-300 transition-colors' : ''}`}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
                          {item}
                          {productId && (
                            <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
