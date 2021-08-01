/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './App.css';
import { Button,Card,Navbar,form} from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
    <div className="cont">
      <div class="vid-wrapper3">
      <video loop="true" autoplay="autoplay" playsinline muted >
  <source src={require('./images/newest-vid-1.mp4').default}></source>
</video>
      <div class="vid-wrapper">
  < div class="vid-wrapper2">
  </div>

  </div>
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  
  <img src={require('../src/images/LOGO.png').default}  alt=".."/> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="home" class="nav-link active" aria-current="page" href="#">What We Offer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Who we are</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Team
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href >Action</a></li>
            <li><a class="dropdown-item" href >Another action</a></li>
           
            <li><a class="dropdown-item" href >Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="tel:+250782251506" ><i class="bi bi-telephone"></i>+250782251506</a>
        </li>
      </ul>
   
    </div>
  </div>
</nav>

<div id="section1" class="container text-center">
  <div class="container section2">
  <div class="row">

    <div class="col">
    <h1 class="text-white display-2" >We do E-Commerce<small>.</small></h1>
    <p class="text-white">Save up to <span>50%</span>from working with us and your will Thank us Later. <br/>
    We are Helping more Than 200 companies around the globe.</p>
    </div>
    </div>
    <form>
    <div class="row">

   
<div class="col text-center">
 
  <input  type="text" class="placehol" placeholder="Company Name"/>
  

</div>

</div>
<div class="row">
    <div class="col">
    <input type="submit" class="btn btn-danger w-25" />
      </div>
    
      </div>
    
    </form>
 
   
 
  </div>



</div>

  

</div>





  
 
    </div>
    
    
  );
}

export default App;
