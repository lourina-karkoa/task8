import React, { useEffect, useState } from 'react'
import logo from "./../../../public/images/logo22.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGauge, faHome, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {data} from './../../component/Servise'
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom'
export default function Dashboard() {

  function loacal() {
    localStorage.setItem('datalocal',JSON.stringify(data))
  }
  loacal()

 let data2 =( localStorage.getItem('datalocal') ) ? JSON.parse(localStorage.getItem('datalocal')) : [];
 
  let history = useNavigate();
  const handleDelete =(id) =>{
    let index = data2.map(function (e){
      return e.id
      
    }).indexOf(id);
    data2.splice(index,1)
    console.log(index);
    // loacal()
    history('/dash')

  }
   const handleEdit = (id,h3,p,h4,serv) =>{
    localStorage.setItem('h3',h3)
    localStorage.setItem('p',p)
    localStorage.setItem('h4',h4)
    localStorage.setItem('serv',serv)
    localStorage.setItem('id',id)
 
    
   }
  //  let newdata = localStorage.getItem('localdata')
  //  newdata =JSON.parse(newdata)
  //  useEffect(()=>{
  //    newdata= JSON.pares(localStorage.getItem('localdata'))

  //  },[localStorage.getItem('localdata')])
 
  return (
    
    
 
    <div className='dashboard'>
     
        <div className='dash-son-O'>
            <div className="dashboard-focal">focal <img src={logo} /></div>
            <ul className='dash-ul'>
            <li className="dash-li"> <FontAwesomeIcon icon={faGauge} /> Dashboard</li>
            <Link to={'/'} className="dash-link"><li className="dash-li"> <FontAwesomeIcon icon={faHome}/> Home</li></Link>
            <li className="dash-li"> <FontAwesomeIcon icon={faRightFromBracket} /> Logout</li></ul>

        </div>
        <div className='dash-son-S'>
        <div className='dashboard-serch-father'>
        <button className='dash-serch'>search</button>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='dash-icon-serch'/>
        </div>
        <div className='dash-son-S-part1'>
        <h1 className='dashboard-h1'>Our Services</h1>

      <Link to={'/creat'}>
        <button className='dash-addrow'>Add New Services</button>
        </Link>
        </div>
        <table className='lk-table'>
          <thead>
            <tr>
             <th className="lk-th">Service</th>
             <th className="lk-th">Description</th>
             <th className="lk-th">We offered</th>
             <th className="lk-th">title</th>
             <th className="lk-th">Action</th>
            </tr>
          </thead>
          <tbody>
           {
           data2.map((item)=>(
                <tr key={item.id}>
                  <td>{item.h3}</td>
                  <td>{item.p}</td>
                  <td>{item.h4}</td>
                  <td>{item.serv}</td>
                  <td className='u-d-dash'>
                  <Link to={`/edit`}>
                    <button onClick={()=>handleEdit(item.id,item.h3,item.p,item.h4,item.serv)}>edit</button>
                    </Link>
                    <button onClick={()=>handleDelete(item.id)}>delete</button>

                  </td>
  
                </tr>
              )
            )

           }
          
          </tbody>
        </table>
            
        </div>
    </div>
    
    
  )


}
