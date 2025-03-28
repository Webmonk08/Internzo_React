import React from 'react'
import { Link } from 'react-router-dom'
// import all_courses from './all_courses'

function Courses() {
  return (
    <>
      <section className="courses" id="courses">
        <div className="center-text">
          <h5>COURSES</h5>
          <h2>Popular Courses</h2>
        </div>
        <div className="courses-content">
          <div className="row">
            <Link to="/Courses/Full Stack Devlopment">
              <img src="assets/images/Webdev.jpg" alt="" />
              <div className="course-text">
                <h3>The Complete Html Css Js Course</h3>
                <h6>1-Month</h6>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/Courses/App Development">
            <img src="assets/images/AppDev.jpg" alt="" />
            <div className="course-text">
              <h3>The Complete App Dev Course</h3>
              <h6>1-Month</h6>
            </div>
            </Link>
          </div>
          <div className="row">
          <Link to="/Courses/AIML">
            <img src="assets/images/Aiml.jpg" alt="" />
            <div className="course-text">
              <h3>The Complete AI and ML Course</h3>
              <h6>1-Month</h6>
            </div>
            </Link>
          </div>

        </div>


        <div className="main-btn">
          <button className="btn"><Link to='/Courses'>All Courses</Link></button>
        </div>
      </section>


    </>
  )
}

export default Courses