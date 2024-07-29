import React, { useState } from 'react'
import {data} from './../../component/Servise'
import { json, Link, useNavigate } from 'react-router-dom'
import './Creat.css'
export default function Creat() {


    const [name ,setname] =useState('')
    const [names ,setnames] =useState('')
    const [namet ,setnamet] =useState('')
    const [nameti ,setnameti] =useState('')
    
    let history = useNavigate();

    const handelsubmit =(e)=> {
        e.preventDefault();
        const unique = crypto.randomUUID();
        let a = name,
        b =names,
        c= namet,
        d =nameti;
        data.push({id:unique,h3:a,p:b,h4:c,serv:d});
        localStorage.setItem('data',JSON.stringify(data))
        localStorage.getItem('data')
        history('/dash')
        localStorage.setItem('h3',a)
        localStorage.setItem('p',b)
        localStorage.setItem('h4',c)
        localStorage.setItem('serv',d)
        localStorage.setItem('id',unique)
       
        // localStorage.setItem('datalocal',JSON.stringify(data))
        // console.log(localStorage.getItem('datalocal',JSON.parse(data)))
      
      }
  return (
    <>
     <form className='creat-form'>
        <input type='text' placeholder='services' onChange={e=>setname(e.target.value)}></input>
        <input type='text' placeholder='Description' onChange={e=>setnames(e.target.value)}></input>
        <input type='text' placeholder='We offered' onChange={e=>setnamet(e.target.value)}></input>
        <input type='text' placeholder='title' onChange={e=>setnameti(e.target.value)}></input>
        <button type='submit' className='creat-lk-button' onClick={(e) =>{handelsubmit(e)}}>Save</button>
       
      </form>
    </>
  )
}
