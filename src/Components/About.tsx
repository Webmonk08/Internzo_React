import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about" id="about">
        <div className="about-img">
          <img src="assets/images/Aboutbg.png" width="100%" alt=""/>
        </div>

        <div className="about-text">
          <h2>Want to share Your Knowledge? Join Us as Mentor</h2>
          <p>Join our team of passionate mentors and inspire the next generation of learners. Share your expertise, connect with like-minded professionals, and make a meaningful impact!</p>
          <h4>Best Courses</h4>
          <h5>Top rated Instructors</h5>

          <button className="btn"><Link to="/read">Join Us</Link></button>

        </div>

      </section>
  )
}

export default About