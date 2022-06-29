
import Nav from './Nav';
import './CSS/LoginView.css';
import DataService from '../DataService';
import {Link} from 'react-router-dom';
import Footer from './footer';
import React from 'react';
import Kravings from './Images/kravingsLogo.jpeg';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Email:"",
      Password:""
    }
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          this.setState({Login:response});
          console.log(response);
          if(this.state.Email=="admin@gmail.com" && this.state.Password == "admin"){
                window.location.href="/components/Owner";
              }
              else{
                window.location.href="/Menu";
              }
          
        },
        error:function(error){
          console.log(error);
          window.location.href="/components/Invalid";
        }
      }
      
      this.onSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("Email",this.state.Email);
        requestObject.data={Email:this.state.Email,Password:this.state.Password};
        DataService.Login(requestObject);
      }
    }
    
    
  }
  render(){

    return (
      <div>
      <div className='row' id='login'>
         <Nav />
        <div className='md-4'>&nbsp;</div>
  
  
        <div className='col-lg-4'></div>
             
        <div className='col-lg-4'>
        <form className="form1" onSubmit={this.onSubmit}>
            <h2 style={{"textAlign":"center"}}>
            <img id="nav-logo" src={Kravings} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
              Kravings</h2><br/>
            <div className="form-group d-flex flex-column g-2">
                
        <label htmlFor="email" className="form-label m-2 h5">Email</label>
        <input type="email" name="Email" id="Email" className="form-control-lg" placeholder="Email" value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})} required/></div>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="password" className="form-label m-2 h5">Password</label>
        <input type="password" name="Password" id="Password" className="form-control-lg" placeholder="Password" value={this.state.Password} onChange={(e)=>this.setState({Password:e.target.value})} required/>
        </div>
        <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
        <div className="col-md-12 d-flex justify-content-center">
         
          <a href="/components/ForgotP">Forgot password?</a>
        </div>
        <hr/>
         <span>Don't have an account?  |   <Link to="/components/Signup">Register Here</Link></span> 
      </form>
      </div>
    <div className='col-lg-4'></div>
    <div className='md-4'>&nbsp;</div>
    
  </div>
  <Footer />
  </div>
    )
    
}
}

export default Login;