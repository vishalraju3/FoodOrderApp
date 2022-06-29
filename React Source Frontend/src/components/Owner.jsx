import React, { Component } from 'react';
import ViewProduct from './Images/ViewProducts2.jpg';
import AddProduct from './Images/AddProduct.jpg';
import DeleteProduct from './Images/DeleteProduct.jpg';
import UpdateProduct from './Images/UpdateProduct.jpeg';
import ViewOrder from './Images/ViewOrders.jpg';
import ViewPayment from './Images/ViewPayments.jpg';
import ViewFeedback from './Images/ViewFeedback.png';
import ViewReports from './Images/ViewReports.png';
import { Table, Button 
} from "reactstrap";
// import OwnerFooter from './OwnerFooter';

import { Link } from 'react-router-dom';

import Kravings from './Images/kravingsLogo.jpeg';
class Owner extends Component {
    
    render() { 

        return (
            <div>
                
             <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">

    <Link to="/" className="navbar-brand">
      <img id="nav-logo" src={Kravings} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      
      <span className="nav-title" style={{"margin":"10px"}}>Kravings</span>
    </Link>
    <div className="d-inline-flex m-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         </div>
    <div  style={{'textAlign':'right'}}>
            <Link to="/components/AddProduct"><Button color="success"  className='m-2'>Add Product</Button> </Link>
            <Link to="/components/ListOrders"><Button color="primary" className='m-2'>View Orders</Button></Link>
            <Link to="/components/ListPayments"><Button className='m-2'>View Payments</Button></Link>
            <Link to="/components/ListFeedback"><Button color="success" className='m-2'>View Feedback</Button></Link>
            <Link to="/components/BarGraph"><Button className='m-2'>View Reports</Button></Link>
            </div>
          </nav>
    </div>
        <br></br>
                <section id="first-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                        <img src={ViewProduct} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" href="/components/ListProducts">View Products</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={AddProduct} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" src="#" href="/components/AddProduct">
                            Add Products
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={DeleteProduct} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" src="#" href="/components/DeleteProduct">
                            Delete Products
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={UpdateProduct} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" src="#" href="/components/UpdateProducts">
                            Update Products
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={ViewOrder} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" href="/components/ListOrders">View Orders</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={ViewPayment} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" href="/components/ListPayments">View Payments</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={ViewFeedback} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" href="/components/ListFeedback">View Feedbacks</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <img src={ViewReports} />
                        <div className="card-bottom">
                            <a className="h4 m-0 mt-2 text-center nav-link" href="/components/BarGraph">View Reports</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* <OwnerFooter /> */}
            </div>
        )
    }
}
export default Owner;