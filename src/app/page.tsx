import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import MenuGrid from '../components/MenuGrid'
import Articles from '../components/Articles'
import Membership from '../components/Membership'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />
      <MenuGrid />
      <Articles />
      <Membership />
      <FAQ />
      <Footer />
    </main>
  )
}
