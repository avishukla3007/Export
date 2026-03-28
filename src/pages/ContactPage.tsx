import BuyerBenefitsSection from '../sections/BuyerBenefitsSection'
import ContactSection from '../sections/ContactSection'

export default function ContactPage() {
  return (
    <div>
      <div className="pt-24 md:pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Get In Touch</h1>
      </div>
      <BuyerBenefitsSection />
      <ContactSection />
    </div>
  )
}
