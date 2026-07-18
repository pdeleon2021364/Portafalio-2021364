import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Ferrofluid from '../components/ui/Ferrofluid.jsx'
import PixelTrail from '../components/ui/PixelTrail.jsx'
import Loading from '../components/ui/Loading.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

import HomePage from '../pages/HomePage.jsx'
import './App.css'

function AppContent() {
  useScrollReveal([])

  return (
    <div className="app-shell">
      <div className="ferrofluid-bg">
        <Ferrofluid
          colors={["#ffffff","#ffffff","#ffffff"]}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>
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
  return (
    <>
      <Loading />
      <AppContent />
    </>
  )
}

export default App
