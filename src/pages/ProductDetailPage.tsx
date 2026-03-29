import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, CheckCircle, Droplet, Leaf, Shield, Heart } from 'lucide-react'
import { productsDatabase } from '../data/products'
import SectionWrapper from '../components/SectionWrapper'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = productsDatabase.find(p => p.id === productId)

  if (!product) {
    return (
      <SectionWrapper className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="button-primary"
          >
            Return to Home
          </button>
        </motion.div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper className="min-h-screen py-20">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Products
      </motion.button>

      {/* Product Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
      >
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden glass-effect p-8"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </motion.div>

        {/* Product Title & Category */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <span className={`text-sm font-semibold mb-2 ${product.color}`}>
            {product.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {product.name}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Quick Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <div className="glass-effect px-4 py-2 rounded-full">
              <p className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">Premium Quality</span>
              </p>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full">
              <p className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">Organic Sourced</span>
              </p>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full">
              <p className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">Lab Tested</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Uses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Leaf size={28} className="text-green-400" />
            <h2 className="text-2xl font-bold text-white">Uses & Applications</h2>
          </div>
          <ul className="space-y-3">
            {product.uses.map((use, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{use}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Heart size={28} className="text-red-400" />
            <h2 className="text-2xl font-bold text-white">Health Benefits</h2>
          </div>
          <ul className="space-y-3">
            {product.benefits.map((benefit, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <Shield size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* How to Consume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect p-8 md:p-12 rounded-2xl mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Droplet size={28} className="text-blue-400" />
          <h2 className="text-2xl font-bold text-white">How to Consume</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          {product.consumption}
        </p>
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
          <p className="text-sm text-blue-300">
            <span className="font-semibold">💡 Tip:</span> For best results, maintain consistency in consumption and consult with a healthcare provider before starting any new supplement regimen.
          </p>
        </div>
      </motion.div>

      {/* Extraction Method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect p-8 md:p-12 rounded-2xl mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Shield size={28} className="text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Extraction & Source</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          {product.extraction}
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg">
            <p className="text-sm text-purple-300 font-semibold">✓ 100% Organic</p>
            <p className="text-xs text-gray-400 mt-1">No chemicals or pesticides</p>
          </div>
          <div className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg">
            <p className="text-sm text-purple-300 font-semibold">✓ Lab Tested</p>
            <p className="text-xs text-gray-400 mt-1">Quality assured</p>
          </div>
          <div className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg">
            <p className="text-sm text-purple-300 font-semibold">✓ Sustainably Harvested</p>
            <p className="text-xs text-gray-400 mt-1">Eco-friendly practices</p>
          </div>
        </div>
      </motion.div>

      {/* Thank You Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-effect p-12 rounded-2xl text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl mb-6"
        >
          🙏
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-4">Thank You for Visiting!</h3>
        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          We're grateful for your interest in our premium {product.name}. Your wellness journey is important to us, and we're here to provide you with the highest quality products and information.
        </p>
        <p className="text-gray-400 mb-8">
          Have questions? <span className="text-blue-400 font-semibold">Contact our team</span> for personalized guidance and recommendations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="button-primary"
          >
            Contact Us for Orders
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="button-secondary"
          >
            View More Products
          </motion.button>
        </div>
      </motion.div>

      {/* Additional Info Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-16 pt-8 border-t border-white/10"
      >
        <p className="text-center text-gray-400 text-sm">
          *These statements have not been evaluated by health authorities. This product is not intended to diagnose, treat, cure, or prevent any disease. 
          Always consult with a healthcare professional before use.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
