import { motion } from 'framer-motion'
import { Globe, Users, Leaf, Zap, Award, TrendingUp } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function CompanyInfoSection() {
  const highlights = [
    {
      icon: Globe,
      title: 'International Standard Certifications',
      description: 'ISO certified facilities, FSSAI approved, and international export compliance.',
      stat: 'Certified',
    },
    {
      icon: Award,
      title: 'Product Range',
      description: 'Comprehensive portfolio including spices, herbal products, and nutraceuticals.',
      stat: '50+',
    },
    {
      icon: Leaf,
      title: 'Quality Assurance',
      description: 'Lab testing and quality control at every production stage.',
      stat: 'Tested',
    },
    {
      icon: TrendingUp,
      title: 'Reliability',
      description: 'Consistent product quality and on-time delivery commitment.',
      stat: 'Proven',
    },
    {
      icon: Users,
      title: 'Custom Solutions',
      description: 'Flexible MOQ, packaging options, and tailored product specifications available.',
      stat: 'Flexible',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick order processing and efficient export logistics - 7-14 days typical.',
      stat: '7-14 Days',
    },
  ]

  return (
    <SectionWrapper className="bg-slate-800/40 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-lg">About Vantage & Company</span>
          <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            Reliable Export Partner for Global Trade
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Vantage & Company is a verified exporter of premium agricultural products from India. With years of experience in international trade, we maintain strict quality standards and deliver consistently to our global clientele.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="glass-effect p-6 rounded-2xl h-full hover:glow transition-all duration-300">
                  {/* Stat */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-between mb-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {highlight.stat}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect p-8 md:p-12 rounded-2xl max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            When you choose Vantage & Company, you're partnering with an experienced export business that understands international trading, customs compliance, quality standards, and timely delivery. We handle the complexities of global trade so you can focus on growing your business.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
