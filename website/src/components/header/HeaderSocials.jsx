import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"


const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://linkedin.com/in/aarontrelstad" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="https://github.com/AaronTrelstad" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials