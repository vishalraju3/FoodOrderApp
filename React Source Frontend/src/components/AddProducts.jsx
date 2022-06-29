
import React from 'react';
import {  Button 
} from "reactstrap";

import { Link } from 'react-router-dom';

import Kravings from './Images/kravingsLogo.jpeg';
import DataService from '../DataService';
class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
          Pname:"",
          Price:"",
          FoodImage:null,
          ImageName:""
        //   Category:"",
        //   Type:""
        }
     
      
       
        this.componentDidMount=()=>{
          
          
          this.getFormData=()=>{
            const img = new FormData();
            img.append('Pname',this.state.Pname);
            img.append('Price',this.state.Price);
            img.append('FoodImage',this.state.FoodImage);
            img.append('imagename',this.state.ImageName);
            return img;
          }
          
          this.onSubmit=(e)=>{
            var requestObject={
              data:this.getFormData(),
              success:(response)=>{
                this.setState({addproducts:response});
                window.location.href="/components/Owner";
              },
              error:function(error){
                console.log(error)
              }
            }
            e.preventDefault();
            DataService.Products(requestObject);
            
            alert("Form submit");
            
          }
          
        }
        
        
      }
    render(){

        return(
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
            <Link to="/components/ListProducts"><Button color="success"  className='m-2'>View Products</Button> </Link>
            <Link to="/components/ListOrders"><Button color="primary" className='m-2'>View Orders</Button></Link>
            <Link to="/components/ListPayments"><Button className='m-2'>View Payments</Button></Link>
            <Link to="/components/ListFeedback"><Button color="success" className='m-2'>View Feedback</Button></Link>
            <Link to="/components/BarGraph"><Button className='m-2'>View Reports</Button></Link>
            </div>
          </nav>
    </div>
                <section className="second-section">
                  <div className="container">
                    <div className="col-12 ">
                      <form id="myform" className="row g-3" onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <div className="row" id="productadd" style={{margin: 10}}>
                            <div className="col">
                              <input type="text" placeholder="Name" id="Pname" name="Pname"  value={this.state.Pname} onChange={(e)=>this.setState({Pname:e.target.value})} />
                            </div>
                            {/* <div className="col">
                              <input type="text" placeholder="Quantity" id="Status" name="Status"  value={this.state.Status} onChange={(e)=>this.setState({Status:e.target.value})} />
                            </div> */}
                            <div className="col">
                              <input type="text" placeholder="Price" id="Price" name="Price"  value={this.state.Price} onChange={(e)=>this.setState({Price:e.target.value})} />
                            </div>
                            <div>
			
                              <div>
                                <input type="file" name='ImageName' id='ImageName'  onChange={(e)=>this.setState({FoodImage:e.target.files[0],ImageName:e.target.files[0].name})} />
                                <span>{this.state.ImageName}</span>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Confirm Changes</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
            </div>
        )
    }
}
export default AddProduct;