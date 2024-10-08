import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { BrightProvider, initBrightBase } from 'brightside-developer'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

initBrightBase(SUPABASE_URL, SUPABASE_ANON_KEY)

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <BrightProvider>
      <RouterProvider router={router} />
    </BrightProvider>
  )
}
