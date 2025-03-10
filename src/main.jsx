import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { SpotifyProvider } from './context/spotiffyContext.jsx'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpotifyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SpotifyProvider>
  </StrictMode>,
)
