import React from 'react'
import './header.css'
import RES from './Res'
import HeaderSocials from './HeaderSocials'
import SpinningCube from '../cube/cube'


const Header = () => {
  return (
    <header>
      <div id='header' className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Aaron Trelstad</h1>
        <h5 className="text-light">Student</h5>
        <RES />
        <HeaderSocials />
        
        <div>
          <SpinningCube />
        </div>
        
        <a href="#about" className='scrollDown'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header