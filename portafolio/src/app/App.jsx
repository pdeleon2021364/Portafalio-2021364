import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../sections/Hero/Hero.jsx'
import About from '../sections/About/About.jsx'
import Skills from '../sections/Skills/Skills.jsx'
import Projects from '../sections/Projects/Projects.jsx'
import Experience from '../sections/Experience/Experience.jsx'
import Certifications from '../sections/Certifications/Certifications.jsx'
import Contact from '../sections/Contact/Contact.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <div className="app-shell">
      <Navbar initials="PL" />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
