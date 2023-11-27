import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={ <About />} />
            <Route path='/services' element={ <Services />} />
            <Route path='/contact' element={ <Contact />} />
          </Routes>

      <footer class="footer">
        <div class="contained">
          <div class="row">
            <div class="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact us</a></li>
                    <li><a href="#">service</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>contact</h4>
                
                  <ul>
                    <li><a href="#"><i class="fa-solid fa-phone"></i>+91 9551758115</a></li><br></br>
                    <li><a href="#"><i class="fa-solid fa-envelope"></i>projects@desbeyond.com</a></li><br></br>
                    <li><a href="#"><i class="fa-solid fa-location-pin"></i>2, GK Moopanar Road, New Perungalathur, Chennai - 63, Tamil Nadu, India</a></li><br></br>
                  </ul>
                
            </div>
            <div class="footer-col">
                <h4>social</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61552194054868&mibextid=kFxxJD">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/desbeyond-global/"><i class="fa fa-linkedin"></i></a>
                    <a href="https://instagram.com/desbeyond_global?igshid=NzZlODBkYWE4Ng=="><i class="fa fa-instagram"></i></a>
                    </div>
            </div>

          </div>
        </div>
    
      </footer>

      </div>
    </>
  )
}

export default App
