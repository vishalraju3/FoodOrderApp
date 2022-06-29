// import './LoginView.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';
import Kravings from './Images/kravingsLogo.jpeg';
import React, { Component } from 'react';
class PaymentNav extends Component {
    
    render() { 

        return (
          <>
          <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/*className="navbar-dark d-inline-flex align-items-center flex-grow-1" */}
  
      <Link to="" className="navbar-brand">
        <img id="nav-logo" src={Kravings} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
        
        <span className="nav-title">Kravings</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button> 
                  
      
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <div className="d-inline-flex m-2 logincategory">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         </div>
         
      <div className="d-inline-flex m-2 logincategory">
        <Link to="/" className="btn btn-outline-light btn-lg text-white loginbtn me-2" data-bs-toggle="offcanvas" data-bs-target="#about-hotel" data-bs-keyboard="true" role="button">Home</Link>
        <div className="">
        <Link to="/Menu"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Menu</button></Link></div>
        <div className="">
        <Link to="/components/ContactUs"><button type="button" className="btn btn-light btn-lg me-2">Contact Us</button></Link>
          </div>
          <div className="">
        <Link to="/components/LoginView"><button type="button" className="btn btn-light btn-lg me-2">Log Out</button></Link>
          </div>
          </div>
          
          </div>
          </nav>
          
          
          
          
        </div>
        </>
        );
    }
    
}


export default PaymentNav;