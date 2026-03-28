import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company/Business name is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Vantageandcompany@gmail.com',
      link: 'mailto:Vantageandcompany@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 - Contact for details',
      link: 'tel:+91...',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#',
    },
  ]

  return (
    <SectionWrapper id="contact" className="contact-section-bg bg-gradient-to-b from-slate-900/30 to-slate-800/50 relative overflow-hidden">
      {/* Export business background with order/shipping theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-blue-400 font-semibold text-lg">Export Order</span>
        <h2 className="heading-md mt-4 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
          Request Your Bulk Order
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          Contact our export team to discuss your order requirements, MOQ (Minimum Order Quantity), pricing, shipping options, and delivery timelines. Professional service for serious buyers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {/* Contact Methods */}
        {contactMethods.map((method, idx) => {
          const Icon = method.icon
          return (
            <motion.a
              key={idx}
              href={method.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 md:p-8 rounded-2xl text-center hover:glow transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="mb-4 inline-block"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-xl flex items-center justify-center">
                  <Icon size={28} className="text-blue-400 group-hover:text-indigo-300 transition-colors" />
                </div>
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400">{method.value}</p>
            </motion.a>
          )
        })}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-effect p-8 md:p-12 rounded-2xl max-w-2xl mx-auto relative z-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-white font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors ${
                errors.name ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-white font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors ${
                errors.email ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-white font-semibold mb-2">Company/Business Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors ${
                errors.company ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.company && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.company}
              </motion.p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-white font-semibold mb-2">Order Details & Requirements *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your product needs, quantities, and delivery timeline..."
              rows={5}
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-white/20'
              }`}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.message}
              </motion.p>
            )}
          </motion.div>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300"
            >
              ✓ Thank you! We've received your inquiry and will contact you shortly with pricing and availability details.
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Processing...
              </>
            ) : (
              <>
                <MessageCircle size={20} />
                Submit Order Inquiry
              </>
            )}
          </motion.button>
        </form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm text-center">
            We typically respond within 24 hours. Looking forward to collaborating with you!
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
