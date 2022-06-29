// import './LoginView.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';
import Kravings from './Images/kravingsLogo.jpeg';
import React, { Component } from 'react';
class Nav extends Component {
    
    render() { 

        return (
          <>
          <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/*className="navbar-dark d-inline-flex align-items-center flex-grow-1" */}
  
      <Link to="/" className="navbar-brand">
        <img id="nav-logo" src={Kravings} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
        
        <span className="nav-title">Kravings</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button> 
                  
      
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <div className="d-inline-flex m-2 logincategory">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         </div>
         
      <div className="d-inline-flex m-2 logincategory">
        <Link to="" className="btn btn-outline-light btn-lg text-white loginbtn me-2" data-bs-toggle="offcanvas" data-bs-target="#about-hotel" data-bs-keyboard="true" role="button">Home</Link>
        <div className="">
        <Link to="/components/Signup"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Sign up</button></Link></div>
        <div className="">
        <Link to="/components/ContactUs"><button type="button" className="btn btn-light btn-lg me-2">Contact Us</button></Link>
          </div>
          </div>
          
          </div>
          </nav>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
          <div className="offcanvas-header">
            <h2 className="offcanvas-title" id="about-hotel">who are we?</h2>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body px-3">
            <hr/>
            <div>
            Our technology platform connects customers from different ends of the country serving their needs in every way possible. This platform enables consumers to order the food from one restaurant, the one who runs this application. Customers use our platform to register themselves, create an account on the platform and order food of their wish. On the other hand, the administrator of the application can take a look at the existing products and manipulate the records I.e., add, update and delete the product.
  He/She can also analyze the statistics so far by the reports recorded. We enable the restaurant to add their products and engage them and acquire people to grow their business while also providing reliable services in every operation. We also include the ratings and reviews of the restaurant to give the consumer the freedom of choice to select the food they desire for.<br /> The proverb goes "the customer perception is your reality". With this bringing into physical realization, we count every feedback to be only a step to perfection and aim to bring all their requirements onto one platform,Kravings. 
            </div>
           <hr/>
           <div className="d-flex flex-wrap">
           <Link to="/menu"><button type="button" className="btn btn-outline-success rounded-pill btn-sm m-2 mx-1">Menu</button></Link>
           <Link to="/login"><button type="button" className="btn btn-outline-danger rounded-pill btn-sm m-2 mx-1">Login</button></Link>
           <Link to="/register"><button type="button" className="btn btn-outline-dark rounded-pill btn-sm m-2 mx-1">Signup</button></Link>
           <Link to="#"><button type="button" className="btn btn-outline-dark btn-sm rounded-pill m-2 mx-1">Admin</button></Link>
           </div>
          </div>
          </div>
          
        </div>
        </>
        );
    }
    
}


export default Nav;