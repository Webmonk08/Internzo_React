import React from 'react'
import { Link,useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (

    <section className="contact" id="contact">
      <div className="main-contact">
        <img src="assets/images/image-removebg-cropped.png" alt="" />
        <div className="contact-content">
          <div>
            <h4>Socials</h4>

            <li><a target="blank"href="https://www.instagram.com/internzo_edu?igsh=MXYwYWttNmVveXJ5Zg%3D%3D&utm_source=qr">Instagram</a></li>
            <li><a href="#insta">Facebook</a></li>
            <li><a target="blank" href="https://x.com/internzo?s=21">Twitter</a></li>
            <li><a target="blank" href="https://www.linkedin.com/company/internzo/">Linked In</a></li>
          </div>

        </div>

        <div className="contact-content">
          <div>

            <h4 >Quick Access</h4>
            {isHome ? (
              <>
                <li><a href="/">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#about">Join Us</a></li>
              </>

            ) : (


              <>
                <li><a href="/">Home</a></li>
                <li><Link to="/#categories">Categories</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/#about">Join Us</Link></li>
              </>
            )}
          </div>
        </div>



        <div className="contact-content">
          <div>
            <h4>Contact Through</h4>
            <li><a href="#add">2/34 Pothiyampallam,Karur-3</a></li>
            <li><a href="#email">info@internzo.com</a></li>
            <li><a href="#pho">9344742778</a></li>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact