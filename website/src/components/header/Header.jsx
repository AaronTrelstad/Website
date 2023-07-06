import React from 'react'
import './header.css'
import RES from './Res'
import HeaderSocials from './HeaderSocials'
import SpinningCube from '../cube/cube'
import {TypeAnimation} from 'react-type-animation'


const Header = () => {
  return (
    <header>
      <div id='header' className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Aaron Trelstad</h1>
        <h5 className="text-light">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'Creator',
              1000,
              'Student',
              1000,
              'CS+Math',
              1000
            ]}
            wrapper="span"
            speed={50}
            
            repeat={Infinity}
        />
        </h5>
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