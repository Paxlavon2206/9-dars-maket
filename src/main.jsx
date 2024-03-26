import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from './config/query-client.js'
import 'react-loading-skeleton/dist/skeleton.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </QueryClientProvider>
)
