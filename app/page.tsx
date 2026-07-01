import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Industries from '@/components/industries'
import WhyUs from '@/components/why-us'
import Solutions from '@/components/solutions'
import Approach from '@/components/approach'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <Solutions />
      <Approach />
      <ContactForm />
      <Footer />
    </main>
  )
}
