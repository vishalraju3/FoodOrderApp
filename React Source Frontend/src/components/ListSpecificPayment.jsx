import './CSS/Menu.css';
import DataService from '../DataService';
import { Table, Input, Button , Container, Modal, ModalBody, ModalHeader,
  FormGroupm, ModalFooter, FormGroup
} from "reactstrap";
import React, { Component } from 'react';

class ListSpecificPayment extends Component {
  constructor(props){
    super(props);
    this.state={
      payments:[],
      Email:""
    }
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          this.setState({payments:response,Email:localStorage.getItem(this.state.Email)});
        },
        error:function(error){
          console.log(error)
        }
      }
      DataService.listSpecificPayments(requestObject);
    }
    
    
  }
    render() { 

        return (
          <div>
          <section className="first-section">
            
          <Table responsive>
            <thead>
              <tr style={{textAlign: 'center',backgroundColor:'brown'}}>
                    <th scope="col">Payment Id</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">BankName</th>
                    <th scope="col">CardNo</th>
                    <th scope="col">CVV</th>


                </tr>
              </thead>
              <tbody style={{textAlign: 'center',backgroundColor:'antiquewhite'}}>
                {
                  this.state.payments.map(user=>
                    <tr>
                      <td scope="row">{user.pid}</td>
                      <td>{user.email}</td>
                      <td>{user.type}</td>
                      <td>{user.bankName}</td>
                      <td>{user.cardNo}</td>
                      <td>{user.cvv}</td>
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
export default ListSpecificPayment;