import './CSS/Menu.css';
import DataService from '../DataService';
import React, { Component } from 'react';
import { Table, Input, Button , Container, Modal, ModalBody, ModalHeader,
  FormGroupm, ModalFooter, FormGroup
} from "reactstrap";

import { Link } from 'react-router-dom';

import Kravings from './Images/kravingsLogo.jpeg';
class ListOrders extends Component {
  constructor(props){
    super(props);
    this.state={
      orders:[]
    }
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          
          this.setState({orders:response});
          console.log(response);
        },
        
        error:function(error){
          console.log(error)
        }
      }
      DataService.listOrders(requestObject);
    }
    
    
  }
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
            <Link to="/components/ListProducts"><Button color="primary" className='m-2'>View Products</Button></Link>
            <Link to="/components/AddProduct"><Button color="success"  className='m-2'>Add Product</Button> </Link>
            <Link to="/components/ListPayments"><Button className='m-2'>View Payments</Button></Link>
            <Link to="/components/ListFeedback"><Button color="success" className='m-2'>View Feedback</Button></Link>
            <Link to="/components/BarGraph"><Button className='m-2'>View Reports</Button></Link>
            </div>
          </nav>
    </div>
        <br></br>
          <section className="first-section">
            
          <Table responsive>
            <thead>
              <tr style={{textAlign: 'center',backgroundColor:'brown'}}>
                <th scope="col">Order Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Email</th>
                <th scope="col">Price</th>

                </tr>
              </thead>
              <tbody style={{textAlign: 'center',backgroundColor:'antiquewhite'}}>
                {
                  this.state.orders.map(user=>
                    <tr>
                      <td scope="row">{user.oid}</td>
                      <td>{user.pname}</td>
                      <td>{user.email}</td>
                      <td>{user.price}</td>
                    </tr>
                  )
                }
                
              </tbody>
              </Table>
          </section>
          <section className="third-section">
            <div className="col-12 text-center" style={{textDecoration: 'none', paddingTop: 10}}>
              <a className="h1 m-0 mt-2 text-center" href="#" style={{textDecoration: 'none', paddingTop: 10}}>CONTACT DETAILS</a>
            </div>
          </section>
        </div>

        )
    }
}
export default ListOrders;