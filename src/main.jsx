import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import roder from './Roder/roder'
import AuthProvider from './AuthProvider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={roder}></RouterProvider>
      
    </AuthProvider>
  </React.StrictMode>,
)
