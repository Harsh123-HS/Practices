import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewFun from './newFun.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

createRoot(document.getElementById('root2')).render(
  <NewFun/>
)
