import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AadharProvider } from './Context/AadharContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AadharProvider>
      <App />
    </AadharProvider>
  </StrictMode>,
)
