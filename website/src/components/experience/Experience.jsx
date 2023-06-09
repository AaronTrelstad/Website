import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <div className="container experienceContainer">
        <div className="experienceSkills">
          <h3>Languages</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>HTML/CSS</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
          <h3>Tools</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>Git</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>Tensorflow</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsPatchCheckFill className='experienceDetails-icon'/>
              <div>
              <h4>Flask</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experienceCourses">
          <h3>Courses</h3>
          <div>
            <article className="experienceDetails">
              <div>
              <h4>Computer Science</h4>
              <small className='text-light'>CS50 Intro to Computer Science</small>
              </div>
            </article>
            <article className="experienceDetails">
              <div><h4>Math</h4>
              <small className='text-light'>Calculus (1, 2, 3)</small>
              </div>
            </article>
            <article className="experienceDetails">
              <div>
              <h4>Stats</h4>
              <small className='text-light'>Intro to Statistics</small>
              </div>
            </article>
            <h3>Skills</h3>
            <article className='experienceDetails'>
              <div>
                <h4>Data Structures</h4>
                <small className='text-light'>Leetcode, HackerRank, Code Signal</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <div>
                <h4>Business Communication</h4>
                <small className='text-light'>Internship and Public Speaking course</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <div>
                <h4>Problem Solving</h4>
                <small className='text-light'>Internship and Projects</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience