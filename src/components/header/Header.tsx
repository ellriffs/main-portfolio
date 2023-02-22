import * as React from 'react'
import './Header.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const headerName = location.pathname !== '/'

  const handleHome: VoidFunction = () => {
    navigate('/')
  }

  const handleContact: VoidFunction = () => {
    navigate('/contact')
  }

  const handlePortfolio: VoidFunction = () => {
    navigate('/portfolio')
  }

  const handleAbout: VoidFunction = () => {
    navigate('/about')
  }

  const handleBlog: VoidFunction = () => {
    navigate('/blog')
  }

  return (
    <>
      <div className='header'>
        <div className='container'>
          <p onClick={handleAbout} className='about'>
            ABOUT
          </p>
          <p onClick={handleBlog} className='blog'>
            BLOG
          </p>
          <p onClick={handlePortfolio} className='portfolio'>
            PORTFOLIO
          </p>
          {headerName && (
            <p onClick={handleHome} className='home'>
              HOME
            </p>
          )}
          <p onClick={handleContact} className='contact'>
            CONTACT
          </p>
        </div>
      </div>
    </>
  )
}
export default Header
