import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='services'>
      <h2>Experiences and Projects</h2>
      <div className="container servicesContainer">
        <article className="service">
          <div className="serviceHead">
            <h3>Internships</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <div>
              <h4>Innovate 120 - UX/UI Design</h4>
              <small className='text-light'>Worked with Fortune 500 compaines</small>
              </div>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="serviceHead">
            <h3>Software Related Projects</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <div>
                <h4>Notes Website</h4>
                <small className='text-light'>Allows new users to create an account and exisiting users to log in and out of their exisiting account.
                Stores individuals data(notes) in a SQL database. Users are able to add and remove notes from the database.</small><br/>
                <small>Python, Flask, SQL</small>
              </div>
            </li>
            <li>
              <div>
              <h4>Personal Website</h4>
              <small className='text-light'>Website that you are currently using. This website has a responsive design and is hosted through github pages</small><br/>
              <small>React.js, Javascript, HTML/CSS</small>
              </div>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="serviceHead">
            <h3>Finance Related Projects</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <div>
                <h4>Statistical Arbitrage Trading</h4>
                <small className='text-light'>Uses statistical arbitrage on Ford and GM stock prices, 
                incorperated Markov Chains to find confidence levels of future moves. Method retured 93% over 265 trading days.</small>
              </div>
            </li>
            <li>
              <div>
                <h4>Google Price Forecasting</h4>
                <small className='text-light'>Uses Markov Chains and Monte Carlo Simulations 
                to predict future movements with Google stock Price</small>
              </div>
            </li>
            <li>
              <small></small>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Portfolio