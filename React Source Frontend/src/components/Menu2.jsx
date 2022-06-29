import './CSS/Menu.css';
import DataService from '../DataService';
import React, { Component } from 'react';
class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
    }
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          this.setState({products:response});
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
          <section className="first-section">
            
            <table className="table table-bordered" style={{textAlign: 'center'}}>
              <thead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity(Avail)</th>
                  <th scope="col">Price(1 pcs)</th>
                </tr>
              </thead>
              <tbody style={{textAlign: 'center'}}>
                {
                  this.state.products.map(user=>
                    <tr>
                      <td scope="row">{user.pid}</td>
                      <td>{user.pname}</td>
                      <td>{user.status}</td>
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
export default Menu;