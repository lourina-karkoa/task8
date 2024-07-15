import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Servise from './component/Servise'
import Cards from './component/Cards'
import Footer from './component/Footer'


function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <Servise />
    <Cards />
    <Footer />
    </>
  )
}

export default App
