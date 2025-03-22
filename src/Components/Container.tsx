import React from 'react'

function Container() {
  return (
    <div className='Icons-cont'>
      <section className="container">
        <div className="container-box" id= "div1">
          <div className="container-img">
            <img src="assets/images/Courses.jpg" alt="" width="70%" />

          </div>
          <div className="container-text">
            <h4>7+</h4>
            <p>Online Courses</p>
          </div>
        </div>
        <div className="container-box" id='div2'> 
          <div className="container-img">
            <img src="assets/images/Tutor.jpg" alt="" width="70%" />

          </div>
          <div className="container-text">
            <h4>10+</h4>
            <p>Tutors</p>
          </div>
        </div>
        <div className="container-box" id='div3'>
          <div className="container-img">
            <img src="assets/images/Students.jpg" alt="" width="70%" />
          </div>
          <div className="container-text">
            <h4>1000+</h4>
            <p>Students</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Container