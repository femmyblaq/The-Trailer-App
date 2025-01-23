import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap5/src/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import "../src/Services/api.js"

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
