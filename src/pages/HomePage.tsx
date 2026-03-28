import { useState, useEffect } from 'react'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ProductsSection from '../sections/ProductsSection'
import CompanyInfoSection from '../sections/CompanyInfoSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CompanyInfoSection />
    </div>
  )
}
