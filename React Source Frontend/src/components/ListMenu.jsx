import './CSS/Menu.css';
import DataService from '../DataService';
import React, { Component } from 'react';
class ListMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      image:[]
    }
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          
          this.setState({image:response});
          
          console.log(response);
        },
        
        error:function(error){
          console.log(error)
        }
      }
      DataService.listImage(requestObject);
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
                  this.state.image.map(user=>
                    <tr>
                      <td scope="row">{user.imageId}</td>
                      <td><img src={`data:image/png;base64,${user.foodImage}`} /></td>
                      <td>{user.imageName}</td>
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
export default ListMenu;