import react, { useState } from "react";
import React,{Component} from 'react';
import './CSS/Forgot.css';
import $ from 'jquery';
import DataService from '../DataService';


class Forgotp extends Component {
    constructor(props){
        super(props);
        this.state={
          email:"",
        }
     
      
       
        this.componentDidMount=()=>{
          // localStorage.clear()
          var requestObject={
            success:(response)=>{
              this.setState({Forgot:response});
            },
            error:function(error){
              console.log(error)
            }
          }
          
          this.onSubmit=(e)=>{
            e.preventDefault();
            localStorage.setItem("email",this.state.email)
            requestObject.data={email:this.state.email}
            DataService.Forgot(requestObject);
 
            // alert("Form submit");
            
          }
        }

        $(function(){
          $("#span1").hide();
        $("#email_error_msg").hide();
        var error_email = false;
        $("#email").focusout(function() {check_email();});
        function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== '')
         {
         $("#email_error_msg").hide();
         $("#email").css("border-bottom","2px solid #34F458");
         } 
      else
       {
         $("#email_error_msg").html("Invalid Email");
         $("#email_error_msg").show();
         $("#email").css("border-bottom","2px solid #F90A0A");
         error_email = true;
      }
   }
   
   $('#submitbtn').click(function(){
       error_email = false;
       check_email();
       if ( error_email === false ){
          $("#span1").show();
       }
       else{
        alert("Please Fill Correctly");
  
       }
  
  
   });
  
      });

        
        
      }
    render(){


    
        return(
            <>
              <div className='md-4'>&nbsp;</div>
              <div className='col-lg-12 d-flex justify-content-center '>
            <form className="text-center align-items" id="gradient-custom" onSubmit={this.onSubmit}>      
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-8 col-lg-12">
                    <div className="card bg-light text-black" style={{borderRadius: '1rem'}}>
                      <div className="card-body p-5 text-center">
                        
                          <h2 className="fw-bold mb-2 " style={{paddingBottom: 10}}>
                            Reset Password
                          </h2>
                          <div className="form-outline form-white mb-4" style={{textAlign: 'left'}}>
             <label className="form-label">Enter E-Mail</label>
             <input id="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} required type="text" name="email" className="form-control form-control-lg"/>

        </div>
                        
          
                          <span className="error_form" id="email_error_msg" />
                          <span id="span1">
                            <div style={{backgroundColor: 'chartreuse'}}>
                              <p className>
                                The Reset Link has been sent to Your Registered Email
                              </p>
                            </div>
                          </span>
                          <input className="btn btn-primary" id="submitbtn" type="submit" defaultValue="submit"  />
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            </div>
          
          
                      </>
          

        )
    }
}

export default Forgotp;