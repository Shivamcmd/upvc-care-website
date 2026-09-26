
import Hero from "../components/Hero"
import TrustBar from "../components/TrustBar"
import ServicesSection from "../components/servicesection"
import WhyChooseUs from "../components/whychooseus"
import HowItWorks from "../components/howitworks"

import ReviewsSection from "../components/ReviewsSection"
import FAQSection from "../components/FAQSection"
import AreasWeServe from "../components/AreasWeServe"
import ContactSection from "../components/ContactSection"


function Home() {
  return (
    <>
    

      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <WhyChooseUs />
        <HowItWorks />
      
        <ReviewsSection />
        <FAQSection />
        <AreasWeServe />
        <ContactSection />
      </main>

    
     
    </>
  )
}

export default Home