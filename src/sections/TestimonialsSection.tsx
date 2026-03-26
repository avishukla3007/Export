import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Emma Richardson',
      company: 'Europa Supplements GmbH',
      country: 'Germany',
      image: '👩‍💼',
      rating: 5,
      text: 'Vantage & Company transformed our supply chain. The quality consistency and reliability are unmatched. Our customers notice the premium quality immediately.',
      specialization: 'Nutraceutical Director',
    },
    {
      name: 'James Foster',
      company: 'Heritage Foods Inc.',
      country: 'Canada',
      image: '👨‍💼',
      rating: 5,
      text: 'Working with them has been seamless. Their transparency in sourcing and commitment to sustainability align perfectly with our company values.',
      specialization: 'Supply Chain Manager',
    },
    {
      name: 'Sofia Garcia',
      company: 'Wellness Hub Ltd.',
      country: 'USA',
      image: '👩‍💼',
      rating: 5,
      text: 'The herbal products are exceptional. Not only superior in quality, but the partnership model they offer is genuinely collaborative and fair.',
      specialization: 'Procurement Lead',
    },
  ]

  return (
    <SectionWrapper className="bg-slate-900/50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold text-lg">Success Stories</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          What Our Partners Say
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Hear from our international partners about their transformative experiences.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="glass-effect p-8 rounded-2xl h-full flex flex-col hover:glow transition-all duration-300 relative">
              {/* Quote Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity"
              >
                <Quote size={32} className="text-blue-400" />
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.15 }}
                className="flex gap-1 mb-4"
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ rotate: 0, scale: 0 }}
                    whileInView={{ rotate: [0, 180, 360], scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic flex-grow">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-3xl"
                  >
                    {testimonial.image}
                  </motion.div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400 text-xs font-semibold">
                      {testimonial.specialization}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium">{testimonial.company}</span>
                  <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded">
                    {testimonial.country}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect p-8 md:p-12 rounded-2xl text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Join Our Success Stories</h3>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Ready to transform your business? Connect with us today and discover the Vantage & Company difference.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-primary"
        >
          Start Your Partnership
        </motion.button>
      </motion.div>
    </SectionWrapper>
  )
}
