import './CSS/ContactUs.css';
import DataService from '../DataService';
import React, { Component } from 'react';
import ContactUsNav from './ContactUsNav';
class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state={
          FullName:"",
          Email:"",
          Message:""
        }
        this.componentDidMount=()=>{
          var requestObject={
            success:(response)=>{
              this.setState({contactUs:response});
            },
            error:function(error){
              console.log(error)
            }
          }
          
          this.onSubmit=(e)=>{
            e.preventDefault();
            requestObject.data={FullName:this.state.FullName,Email:this.state.Email,Message:this.state.Message}
            DataService.insertContact(requestObject);
            alert("Form submit");
            window.location.href="/Menu";
            
            
          }
        }
      }
    render() { 

        return (
            <div>
               <ContactUsNav />
                <div className="container formdiv">
                    <form onSubmit={this.onSubmit}>
                        <h3>Contact Us</h3>
                        <input type="text" id="FullName" name="FullName" value={this.state.FullName} onChange={(e)=>this.setState({FullName:e.target.value})} placeholder="Full Name" required />
                        <input type="email" id="Email" name="Email" value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})} placeholder="Email Id" required />
                        <textarea id="Message" name="Message" value={this.state.Message} onChange={(e)=>this.setState({Message:e.target.value})} rows={4} placeholder="How can We help you?" />
                        <button type="submit" onClick={this.onSubmit}>Send</button>
                    </form>
                </div>
            </div>
   
        );
    }
    
}
 
export default ContactUs;

    

  
