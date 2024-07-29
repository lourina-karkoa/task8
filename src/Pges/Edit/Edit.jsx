import React, { useEffect, useState } from 'react'
// import {data} from './../../component/Servise'
import { Link, useNavigate } from 'react-router-dom'
import './../Edit/Edit.css'

export default function Edit() {
    const [name ,setname] =useState('')
    const [names ,setnames] =useState('')
    const [namet ,setnamet] =useState('')
    const [nameti ,setnameti] =useState('')
    const [id ,setid] =useState('')

    let history = useNavigate();

    // let index = data.map(function (e){
    //     return e.id
        
    //   }).indexOf(id);
      
      const handelsubmit =(e)=> {
        e.preventDefault();
        // localStorage.setItem('datalocal',JSON.stringify(data))
       
    const data = JSON.parse(localStorage.getItem('datalocal'))
    console.log(data);
    
       data.forEach(item => {
        if(item.id == localStorage.getItem('id')){
        localStorage.setItem('h3',name)
        item.h3 =name;
        item.p=names;
        item.h4=namet;
        item.serv=nameti;
        localStorage.getItem('id')
      }
       
       });   
        history('/dash')
        
      }
      useEffect(()=>{
        setname(localStorage.getItem('h3'))
        setnames(localStorage.getItem('p'))
        setnamet(localStorage.getItem('h4'))
        setnameti(localStorage.getItem('serv'))
        setid(localStorage.getItem('id'))
        
      },[])
  return (
    <>
      <form className='creat-form'>
        <input type='text' placeholder='services' value={name} onChange={e=>setname(e.target.value)} ></input>
        <input type='text' placeholder='Description' value={names} onChange={e=>setnames(e.target.value)}></input>
        <input type='text' placeholder='We offered' value={namet} onChange={e=>setnamet(e.target.value)}></input>
        <input type='text' placeholder='title' value={nameti} onChange={e=>setnameti(e.target.value)}></input>
        <button type='submit' className='creat-lk-button' onClick={(e) =>{handelsubmit(e)}}>Update</button>
       
      </form>
    </>
  )
}
