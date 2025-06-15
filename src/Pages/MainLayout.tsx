import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Courses from '../Components/Courses'
import Categories from '../Components/Categories'
import "../App.css"
function MainLayout() {
  

  return (
    <>
        <Home />
        <Categories/>
        <Courses />
        <About />
        <Contact/>
        
    </>
  )
}

export default MainLayout