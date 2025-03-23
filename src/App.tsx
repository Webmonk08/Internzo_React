import React from 'react';
import NavBar from './Components/NavBar'
import CartProvider  from './context/CourseContext';
import Home from './Pages/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import CoursesList from './Pages/CoursesList';
import './App.css';
import HeartPage from './Pages/HeartPage';
import CourseDetails from './Pages/CourseDetails';
import AddressForm from './Components/Form';
import JoinForm from './Components/joinUs ';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path='/HeartPage' element={<HeartPage />} />
            <Route path='/Courses' element={<CoursesList />} />
            <Route path='read' element={<JoinForm/>}/>
            <Route path="/Courses/:courseName" element={<CourseDetails />} />
            <Route path="/Form/:courseName" element={<AddressForm />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App;
