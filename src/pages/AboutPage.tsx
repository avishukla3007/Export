import MarketOpportunitySection from '../sections/MarketOpportunitySection'
import ProcessSection from '../sections/ProcessSection'
import SustainabilitySection from '../sections/SustainabilitySection'

export default function AboutPage() {
  return (
    <div>
      <div className="pt-24 md:pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">About Our Process</h1>
      </div>
      <MarketOpportunitySection />
      <ProcessSection />
      <SustainabilitySection />
    </div>
  )
}
