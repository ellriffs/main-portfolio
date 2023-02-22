import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

export default Routes
