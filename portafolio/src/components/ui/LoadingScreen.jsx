import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-overlay">
      <div className="loader">
        <svg id="cloud" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" />
          <g>
            <path d="M30 55 Q30 40 42 40 Q42 28 55 28 Q68 28 68 40 Q80 40 80 55 Z" fill="white" opacity="0.15" />
            <g>
              <path d="M28 68 L35 58 L42 68" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M72 68 L65 58 L58 68" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M35 58 L65 58" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </g>
          </g>
          <g id="shapes">
            <g>
              <circle cx="20" cy="60" r="15" fill="white" opacity="0.12" />
              <circle cx="50" cy="45" r="20" fill="white" opacity="0.12" />
              <circle cx="80" cy="60" r="15" fill="white" opacity="0.12" />
            </g>
          </g>
          <g id="lines">
            <g>
              <line x1="30" y1="18" x2="42" y2="18" stroke="white" strokeOpacity="0.3" />
              <line x1="48" y1="18" x2="60" y2="18" stroke="white" strokeOpacity="0.3" />
              <line x1="66" y1="18" x2="78" y2="18" stroke="white" strokeOpacity="0.3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default LoadingScreen
