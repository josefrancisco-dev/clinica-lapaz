import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
