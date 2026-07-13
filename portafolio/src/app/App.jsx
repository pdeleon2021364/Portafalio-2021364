import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import StarBackground from '../components/layout/StarBackground.jsx'
import PixelTrail from '../components/ui/PixelTrail.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

import HomePage from '../pages/HomePage.jsx'
import './App.css'

function AppContent() {
  useScrollReveal([])

  return (
    <div className="app-shell">
      <StarBackground />
      <div className="pixel-trail-container">
        <PixelTrail
          gridSize={50}
          trailSize={0.08}
          maxAge={300}
          interpolate={5}
          color="#ffffff"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        />
      </div>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
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
