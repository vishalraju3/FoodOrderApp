import './CSS/Menu.css';
import DataService from '../DataService';
import React, { Component } from 'react';
class ListSpecificOrders extends Component {
  constructor(props){
    super(props);
    this.state={
      orders:[],
      Email:""
    }
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          
          this.setState({orders:response,Email:localStorage.getItem(this.state.Email)});
          console.log(response);
        },
        
        error:function(error){
          console.log(error)
        }
      }
      DataService.listSpecificOrders(requestObject);
    }
    
    
  }
    render() { 

        return (
          <div>
          <section className="first-section">
            
            <table className="table table-bordered" style={{textAlign: 'center'}}>
              <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Email</th>
                <th scope="col">Price</th>

                </tr>
              </thead>
              <tbody style={{textAlign: 'center'}}>
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
            </table>
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
export default ListSpecificOrders;