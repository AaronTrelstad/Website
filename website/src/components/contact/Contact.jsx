import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <HiOutlineMail className="contactOption-icon"/>
            <h4>Email</h4>
            <h4>trelstadaaron@gmail.com</h4>
            <a href="mailto:trelstadaaron@gmail.com">Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='This is a Demo if you want to contact me please use email' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact