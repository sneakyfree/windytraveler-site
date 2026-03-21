import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import LiveDemo from './components/LiveDemo'
import Pricing from './components/Pricing'
import Bundles from './components/Bundles'
import Ecosystem from './components/Ecosystem'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-windy-dark">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <LiveDemo />
      <Pricing />
      <Bundles />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
