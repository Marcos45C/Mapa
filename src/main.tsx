import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Principa } from './Principa.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Principa />
  </StrictMode>,
)
