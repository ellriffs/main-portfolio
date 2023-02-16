import * as React from 'react'
import './Body.css'
import Logo from '../../assets/Logo.png'
import IconBar from '../icon-bar/IconBar'

const Body: React.FC = () => {
  return (
    <div className='body-container'>
      <img src={Logo} alt='selfie' className='body-img' />
      <p className='subtitle-1'>CREATIVE/</p>
      <p className='subtitle-2'>FRONTEND DEVELOPER</p>
      <p className='firstName'>ELLIOT</p>
      <p className='secondName'>ROBERTSON</p>
      <div className='icon-container'>
        <IconBar />
      </div>
    </div>
  )
}

export default Body
