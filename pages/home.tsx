import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
    </>
  )
}
