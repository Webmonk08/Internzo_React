import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about" id="about">
        <div className="about-img">
          <img src="assets/images/Aboutbg.png" width="100%" alt=""/>
        </div>

        <div className="about-text">
          <h2>Want to share Your Knowledge? Join Us Mentor</h2>
          <p>High-definition video is video of Higher resolutionand high Standard-definition. while there is no
            standardisation meaning</p>
          <h4>Best Courses</h4>
          <h5>Top rated Instructors</h5>

          <button className="btn"><Link to="/read">Join Us</Link></button>

        </div>

      </section>
  )
}

export default About