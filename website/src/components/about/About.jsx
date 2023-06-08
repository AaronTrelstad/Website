import React from 'react'
import './about.css'
import {FaUserGraduate} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
import {FaRunning} from 'react-icons/fa'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMe-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className="abooutContent">
          <div className="aboutCards">
            <article className='aboutCard'>
              <FaUserGraduate className='aboutIcon'/>
              <h5>Education</h5>
              <small>Iowa State <br/>Class of 2027<br/>BS Computer Science<br/>BS Applied Mathematics</small>
            </article>
            <article className='aboutCard'>
              <BsPersonWorkspace className='aboutIcon'/>
              <h5>Career Interests</h5>
              <small>SWE<br/>Finance<br/>Data Science</small>
            </article>
            <article className='aboutCard'>
              <FaRunning className='aboutIcon'/>
              <h5>Personal Interests</h5>
              <small>Sports<br/>Weight Lifting<br/>Traveling</small>
            </article>
          </div>
          <p>
            I am an incoming freshman at Iowa State University from LeClaire, Iowa. 
            I played basketball throughout high school and I remain a very active person. 
            I have always loved to solve problems and think of innovative ideas to fix real world problems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About