/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './App.css';
import { Button,Card,Navbar,form } from "react-bootstrap"
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
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="home" class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href >Action</a></li>
            <li><a class="dropdown-item" href >Another action</a></li>
           
            <li><a class="dropdown-item" href >Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
   
    </div>
  </div>
</nav>

<div id="section1" class="container text-center">
  <div class="container section2">
  <div class="row">

    <div class="col">
    <h1 class="text-white display-2" >We do E-Commerce.</h1>
    </div>
    <div class="row">
    <div class="col">
  <input style={{marginLeft:"268px"}} type="text" class="form-control w-50" placeholder="Company Name"/>
    </div>
    </div>
    <div class="row">
    <div class="col">
    <input type="submit" class="btn btn-danger w-50" />
      </div>
      </div>
  </div>

  </div>



</div>

  

</div>





  
 
    </div>
    
    
  );
}

export default App;
