import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {MdLibraryBooks} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLibraryBooks/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
    </nav>
  )
}

export default Nav