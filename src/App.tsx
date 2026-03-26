import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProductsSection from './sections/ProductsSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import MarketOpportunitySection from './sections/MarketOpportunitySection'
import ProcessSection from './sections/ProcessSection'
import SustainabilitySection from './sections/SustainabilitySection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'
import LoadingAnimation from './components/LoadingAnimation'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <MarketOpportunitySection />
      <ProcessSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
