import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import roder from './Roder/roder'
import AuthProvider from './AuthProvider/AuthProvider'
import {  HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={roder}></RouterProvider>
      
    </AuthProvider>
    </HelmetProvider>
    

    
    
  </React.StrictMode>,
)
