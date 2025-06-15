import React from 'react';
import NavBar from './Components/NavBar'
import Home from './Pages/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoursesList from './Pages/CoursesList';
import './App.css';
import CourseDetails from './Pages/CourseDetails';
import AddressForm from './Components/Form';
import JoinForm from './Components/joinUs ';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Courses' element={<CoursesList />} />
            <Route path='read' element={<JoinForm />} />
            <Route path="/Courses/:courseName" element={<CourseDetails />} />
            <Route path="/Form/:courseName" element={<AddressForm />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
