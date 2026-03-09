import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'
import '@app/_reset.css'
import './main.css'
import { RouterProvider } from './app/router-provider.tsx'

/** fonts */
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
)
