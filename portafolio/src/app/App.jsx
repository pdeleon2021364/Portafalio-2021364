import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import StarBackground from '../components/layout/StarBackground.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import SkillsPage from '../pages/SkillsPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import ExperiencePage from '../pages/ExperiencePage.jsx'
import CertificationsPage from '../pages/CertificationsPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  const location = useLocation()
  useScrollReveal([location.pathname])

  return (
    <div className="app-shell">
      <ScrollToTop />
      <StarBackground />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/habilidades" element={<SkillsPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/experiencia" element={<ExperiencePage />} />
          <Route path="/certificaciones" element={<CertificationsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return <AppContent />
}

export default App
