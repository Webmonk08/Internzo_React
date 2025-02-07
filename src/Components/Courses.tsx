import React from 'react'
import { Heart } from 'lucide-react'
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
            <img src="assets/images/Group.webp" alt="" />
            <div className="course-text">
              <h5>1000/-</h5>
              <h3>The Complete Html Css Js Course</h3>
              <h6>1-Month</h6>
            </div>
            <div className='heart'><Heart /></div>
          </div>

          <div className="row">
            <img src="assets/images/Group.webp" alt="" />
            <div className="course-text">
              <h5>1000/-</h5>
              <h3>The Complete Html Css Js Course</h3>
              <h6>1-Month</h6>
            </div>
            <div className='heart'><Heart /></div>
          </div>
          <div className="row">
            <img src="assets/images/Group.webp" alt="" />
            <div className="course-text">
              <h5>1000/-</h5>
              <h3>The Complete Html Css Js Course</h3>
              <h6>1-Month</h6>
            </div>
            <div className='heart'><Heart /></div>
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