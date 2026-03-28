import { motion } from 'framer-motion'
import { Sprout, Beaker, Package, Truck } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Sprout,
      title: 'Supplier Verification',
      description: 'Certified suppliers meeting international quality and compliance standards.',
      highlights: ['Compliance Check', 'Quality Verification', 'Documentation'],
    },
    {
      number: '02',
      icon: Beaker,
      title: 'Quality Control',
      description: 'Rigorous laboratory testing ensures safety and potency standards.',
      highlights: ['Lab Testing', 'Certifications', 'Standards Compliance'],
    },
    {
      number: '03',
      icon: Package,
      title: 'Packaging',
      description: 'Premium, eco-friendly packaging maintains product integrity and brand value.',
      highlights: ['Eco-Friendly', 'Custom Branding', 'Security Features'],
    },
    {
      number: '04',
      icon: Truck,
      title: 'Export Logistics',
      description: 'Seamless global delivery with real-time tracking and documentation.',
      highlights: ['Door-to-Door', 'Real-time Tracking', 'Documentation'],
    },
  ]

  return (
    <SectionWrapper id="process" className="process-section-bg bg-slate-900/50 relative overflow-hidden">
      {/* Export business background shipping imagery */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          className="absolute -bottom-40 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-blue-400 font-semibold text-lg">Export Process</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
          Global Delivery Excellence
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          From certified sourcing through final delivery, we ensure international quality standards at every step. Seamless export process for reliable partnerships.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="relative z-10">
        {/* Connecting line - desktop only */}
        <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-effect p-6 md:p-8 rounded-2xl h-full flex flex-col relative z-10">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center border-2 border-blue-400/50 group-hover:glow transition-shadow">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div whileHover={{ rotateY: 15 }} className="mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Icon size={28} className="text-blue-400" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {step.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + hIdx * 0.05 }}
                        className="flex items-center gap-2 text-blue-300 text-xs font-medium"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrow - desktop only */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/3 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl text-blue-400/50"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center relative z-10"
      >
        <p className="text-gray-300 mb-6">Ready to place your order?</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-primary"
        >
          Place Your Order
        </motion.button>
      </motion.div>
    </SectionWrapper>
  )
}
