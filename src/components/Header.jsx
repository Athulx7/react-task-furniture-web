import React from 'react'
import { useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

   

  return (
    <>
    <div className='container-fluid d-flex justify-content-between  navbar1   ' style={{height:"7rem"}}>
        <div className='m-5 btn' onClick={() => setOpen(!open)}><i class="fa-solid fa-bars" style={{fontSize:'20px'}} ></i></div>

        
        
        <Link to='/'><div className='m-5' ><img src="https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png" alt="" /></div></Link>
        <div className='m-5 btn'><i class="fa-solid fa-cart-shopping" style={{fontSize:'20px'}}></i></div>
    </div>
    </>
  )
}

export default Header
