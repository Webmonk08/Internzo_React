import React from 'react'

function Categories() {
  return (
    <section className="categories" id="categories">
    <div className="center-text">
      <h5>CATEGORIES</h5>
      <h2>Popular Catergories</h2>
    </div>

    <div className="categories-container">
      <div className="box">
        <img src="assets/images/Webdev.png" alt=""/>
          <h3>Web Development</h3>
      </div>
      <div className="box">
        <img src="assets/images/Appdev.png" alt=""/>
          <h3>App Development</h3>
      </div>
      <div className="box">
        <img src="assets/images/React.png" alt=""/>
          <h3>Cyber Security</h3>
      </div>
      <div className="box">
        <img src="assets/images/React.png" alt=""/>
          <h3>AI ML</h3>
      </div>
    </div>
  </section>

  )
}

export default Categories