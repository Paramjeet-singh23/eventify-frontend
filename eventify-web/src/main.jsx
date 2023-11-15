import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from './components/Signup/Signup.jsx'
import Home from './components/Home/Home.jsx'
import Signin from './components/Signin/Signin.jsx'
import Layout from './Layout.jsx'
import Landing from './components/Landing/Landing.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Landing />} />
      <Route path='signup' element={<Signup />} />
      <Route path='signin' element={<Signin />} />
    </Route>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
