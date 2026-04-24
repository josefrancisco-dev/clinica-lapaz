import { Hero } from '@/src/components/hero'
import { Services } from '@/src/components/services'
import { About } from '@/src/components/about'
import { Team } from '@/src/components/team'
import { Contact } from '@/src/components/contact'

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
