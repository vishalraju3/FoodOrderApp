import './CSS/ListProducts.css';
import { Table, Input, Button , Container, Modal, ModalBody, ModalHeader,
  FormGroupm, ModalFooter, FormGroup
} from "reactstrap";
import './CSS/Menu.css';
import DataService from '../DataService';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Kravings from './Images/kravingsLogo.jpeg';
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
class ListProducts extends Component {
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
      DataService.listProducts(requestObject);
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
            <Link to="/components/AddProduct"><Button color="success"  className='m-2'>Add Product</Button> </Link>
            <Link to="/components/ListOrders"><Button color="primary" className='m-2'>View Orders</Button></Link>
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
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
              <tbody style={{textAlign: 'center',backgroundColor:'antiquewhite'}}>
                {
                  this.state.orders.map(user=>
                    <tr>
                      <td scope="row">{user.pid}</td>
                      <td>{user.pname}</td>
                      <td>{user.price}</td>
                      <td>
                      <Link to="/components/UpdateProducts"><Button color="warning"><BsFillPencilFill/></Button></Link>
                      <Link to="/components/DeleteProduct"><Button color="danger"><BsTrash/></Button> </Link>
                        </td>
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
export default ListProducts;