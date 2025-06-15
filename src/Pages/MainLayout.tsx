import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Container from '../Components/Container'
import Courses from '../Components/Courses'
import Categories from '../Components/Categories'
import "../App.css"
function MainLayout() {
  

  return (
    <>
        <Home />
        {/* <Container/> */}
        <Categories/>
        <Courses />
        <About />
        <Contact/>
        
    </>
  )
}

export default MainLayout