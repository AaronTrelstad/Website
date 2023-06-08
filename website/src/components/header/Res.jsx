import React from 'react'
import Resume from '../../assets/Resume.pdf'

const Res = () => {
  return (
    <div className='res'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default Res