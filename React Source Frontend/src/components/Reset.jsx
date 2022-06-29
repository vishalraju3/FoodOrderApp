import react from 'react';

import React,{Component} from 'react';
// import './CSS/LoginView.css';

import $ from 'jquery';
import DataService from '../DataService';
import Nav from './Nav';

class Reset extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            psw:""

        }
     
      
       
        this.componentDidMount=()=>{
          var requestObject={
            success:(response)=>{
              this.setState({Updatepsw:response});
            },
            error:function(error){
              console.log(error)
            }
          }
          
          this.onSubmit=(e)=>{
            e.preventDefault();
            requestObject.data={email:localStorage.getItem("email"),password:this.state.psw}
            DataService.Updatepsw(requestObject);
      
            
          }
        }

        $(function(){
          $("#span1").hide();
        $("#email_error_msg").hide();
        // $("#psw_error_msg").hide();
  
        var error_email = false;
        var error_psw = false;
        $("#email").focusout(function() {check_email();});
        // $("#psw").focusout(function() {check_psw();});
  
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
  
//    function check_psw() {
//     var pattern = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
//     var psw = $("#psw").val();
//     if (pattern.test(psw) && psw !== '')
//      {
//      $("#psw_error_msg").hide();
//      $("#psw").css("border-bottom","2px solid #34F458");
//      } 
//   else
//    {
//      $("#psw_error_msg").html("password should contain Minimum eight characters, at least one letter and one number");
//      $("#psw_error_msg").show();
//      $("#psw").css("border-bottom","2px solid #F90A0A");
//      error_psw = true;
//   }
//   }
   
   $('#submitbtn').click(function(){
       error_email = false;
    //    error_psw = false;
  
       check_email();
    //    check_psw(); 
       if ( error_email === false){
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
            <div className='col-lg-12 p-12'>
  <Nav></Nav>
  <div className='md-4'>&nbsp;</div>
  <div className='col-lg-12 d-flex justify-content-center '>
  <form className="  d-flex justify-content-center" id="gradient-custom" onSubmit={this.onSubmit}>      
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-12 col-md-8 col-lg-12 ">
          <div className="card bg-light text-black" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 " style={{paddingBottom: 10}}>
                  Reset Password
                </h2>
                <div className="form-outline form-white mb-4" style={{textAlign: 'left'}}>
                  <label className="form-label" htmlFor="typeEmailX">Enter Your Email :</label>
                  <input type="email" id="email" name="email" className="form-control form-control-lg" value={localStorage.getItem("email")} readOnly  />
                  <span className="error_form" id="email_error_msg" />
                </div>
                <div className="form-outline form-white mb-4" style={{textAlign: 'left'}}>
                  <label className="form-label" htmlFor="typeEmailX">Enter New Password :</label>
                  <input type="password" id="psw" name="psw" className="form-control form-control-lg" value={this.state.psw} onChange={(e)=>this.setState({psw:e.target.value})} required  />
                  <span className="psw_form" id="psw_error_msg" />
                </div>
                <span id="span1">
                  <div style={{backgroundColor: 'chartreuse'}}>
                    <p className>
                      Password is updated Successfully
                    </p>
                  </div>
                </span>
                <input className="btn btn-primary" id="submitbtn" type="submit" defaultValue="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </form>
  </div>


            </div>

        );

    }

}

export default Reset;