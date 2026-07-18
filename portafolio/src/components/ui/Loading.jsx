import { useState, useEffect } from 'react'
import './Loading.css'

const LETTERS = ['L', 'O', 'A', 'D', 'I', 'N', 'G']

function Loading() {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const timer = setTimeout(() => setPhase('fading'), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (phase === 'hidden') return null

  return (
    <div
      className={`loading ${phase === 'fading' ? 'loading--fade' : ''}`}
      onTransitionEnd={() => {
        if (phase === 'fading') setPhase('hidden')
      }}
    >
      <div className="loading-text">
        {LETTERS.map((letter, i) => (
          <span key={i} className="loading-text-words" style={{ animationDelay: `${(i / 5)}s` }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Loading
