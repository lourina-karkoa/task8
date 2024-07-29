import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pges/Dashboard/Dashboard'
import Home from './Pges/Home/Home'
import Creat from './Pges/Creat/Creat'
import Edit from './Pges/Edit/Edit'


function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dash' element={<Dashboard />} />
    <Route path='/creat' element={<Creat />} />
    <Route path='/edit' element={<Edit />} />
   </Routes>
    </>
  )
}

export default App
