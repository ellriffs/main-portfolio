import * as React from 'react'
import './Header.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname === '/about' ? '/' : '/about'

  const handleAbout: VoidFunction = () => {
    navigate(pathName)
  }

  return (
    <>
      <div className='header'>
        <div className='container'>
          <p onClick={handleAbout} className='about'>
            {location.pathname === '/about' ? 'HOME' : 'ABOUT'}
          </p>
          <p className='blog'>BLOG</p>
          <p className='portfolio'>PORTFOLIO</p>
          <p className='contact'>CONTACT</p>
        </div>
      </div>
    </>
  )
}
export default Header
