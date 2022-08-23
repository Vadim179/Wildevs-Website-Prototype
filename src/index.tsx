import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.scss'
import 'animate.css'

const target = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(target)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
