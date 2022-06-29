// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';


import React, { Component } from 'react';
import './CSS/Footer.css';
class Footer extends Component {
    
    render() { 

        return (
          
 <footer className="text-center text-lg-start bg-dark text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom" style={{backgroundColor: 'lightgoldenrodyellow'}}>
    <div className="me-5 d-none d-lg-block">
      <span className=" fw-bold mb-4">Get connected with us on social networks:</span>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <div>
      <a href className="me-4 text-reset">
        <i className="fa-brands fa-facebook-square fa-2x" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fa-brands fa-twitter-square fa-2x" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fa-brands fa-google fa-2x" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fa-brands fa-instagram fa-2x" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fa-brands fa-github fa-2x" />
      </a>
    </div>
  </section>
  <section>
  <div className="  ">
    <div className="row mt-3">
      <div className='col-md-3' style={{padding:"25px"}}>
        <h6 className="text-uppercase fw-bold mb-4">
        <i class="fa-solid fa-utensils me-3"/>Kravings
        </h6>
        <p>Order! Delicious Food Right at Your Doorstep</p>
        </div>

      <div className="col-md-3 ">
      
      </div> 
      <div className="col-md-3 ">
      
      </div> 
      <div className='col-md-3'>
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3" /> Hyderabad</p>
        <i className="fas fa-envelope me-3" />kravings007@gmail.com
     </div>
    </div>
  </div>
</section>

  <div className="text-center p-1"style={{backgroundColor:"##000000"}} >
    © 2022 All Rights Reserverd!
  </div>
</footer>



        )
    }
}
export default Footer;