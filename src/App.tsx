import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProductsSection from './sections/ProductsSection'
import CompanyInfoSection from './sections/CompanyInfoSection'
import MarketOpportunitySection from './sections/MarketOpportunitySection'
import ProcessSection from './sections/ProcessSection'
import SustainabilitySection from './sections/SustainabilitySection'
import BuyerBenefitsSection from './sections/BuyerBenefitsSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'
import LoadingAnimation from './components/LoadingAnimation'
import FloatingLogo from './components/FloatingLogo'

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
      <FloatingLogo />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CompanyInfoSection />
      <MarketOpportunitySection />
      <ProcessSection />
      <SustainabilitySection />
      <BuyerBenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
