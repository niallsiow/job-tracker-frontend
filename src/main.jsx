import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobTracker } from './components/jobtracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobTracker />
  </StrictMode>,
)
