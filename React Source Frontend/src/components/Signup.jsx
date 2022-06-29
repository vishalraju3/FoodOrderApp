
 import Nav from './Nav';
 import './CSS/Signup.css';

import { useFormik } from 'formik';
import {Link} from 'react-router-dom';
import Footer from './footer';
import SignupNav from './SignupNav';
import Kravings from './Images/kravingsLogo.jpeg';

import DataService from '../DataService';
import React, { Component } from 'react';
class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      Fname:"",
      Lname:"",
      Address:"",
      City:"",
      Gender:"",
      Mobile:"",
      Pincode:"",
      Email:"",
      Password:""
    }
 
  
   
    this.componentDidMount=()=>{
      var requestObject={
        success:(response)=>{
          this.setState({signup:response});
        },
        error:function(error){
          console.log(error)
        }
      }
      
      this.onSubmit=(e)=>{
        e.preventDefault();
        requestObject.data={Fname:this.state.Fname,Lname:this.state.Lname,Address:this.state.Address,City:this.state.City,Pincode:this.state.Pincode,Gender:this.state.Gender,Mobile:this.state.Mobile,Email:this.state.Email,Password:this.state.Password}
        DataService.insertSignup(requestObject);
        window.location.href="/components/LoginView";
        //alert("Form submit");
        
      }
    }
    
    
  }
  
  render(){
    return (
      <div>
        <SignupNav />
<div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
  <div className="wrapper wrapper--w790">
    <div className="card card-5">
      <div className="card-heading">
        <h2 className="title">SIGN UP</h2>
      </div>
      <div className="card-body">
        <form onSubmit={this.onSubmit}>
          <div className="form-row m-b-55">
            <div className="name">Name</div>
            <div className="value">
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group-desc">
                    <input className="input--style-5" type="text" name="Fname" id="Fname" value={this.state.Fname} onChange={(e)=>this.setState({Fname:e.target.value})} required/>
                    <label className="label--desc">first name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group-desc">
                    <input className="input--style-5" type="text" name="Lname" id="Lname" value={this.state.Lname} onChange={(e)=>this.setState({Lname:e.target.value})} required/>
                    <label className="label--desc">last name</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Address</div>
            <div className="value">
              <div className="input-group">
                <input className="input--style-5" type="text" name="Address" id="Address" value={this.state.Address} onChange={(e)=>this.setState({Address:e.target.value})} required />
              </div>
            </div>
          </div>
          <div className="form-row m-b-55">
            <div className="name">Area</div>
            <div className="value">
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group-desc">
                    <input className="input--style-5" type="text" name="City" id="City" value={this.state.City} onChange={(e)=>this.setState({City:e.target.value})} required />
                    <label className="label--desc">City</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group-desc">
                    <input className="input--style-5" type="text" name="Pincode" id="Pincode" value={this.state.Pincode} onChange={(e)=>this.setState({Pincode:e.target.value})} required />
                    <label className="label--desc">PinCode</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Gender</div>
                <div className="col-md-4">
                  <select id="Gender" className="form-select" name="Gender" value={this.state.Gender} onChange={(e)=>this.setState({Gender:e.target.value})} required>
                    <option selected>Choose one</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
            </div>
            <div className="form-row">
            <div className="name">Mobile</div>
            <div className="value">
              <div className="input-group">
                <input className="input--style-5" type="mobile" name="Mobile" id="Mobile" value={this.state.Mobile} onChange={(e)=>this.setState({Mobile:e.target.value})} required />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Email</div>
            <div className="value">
              <div className="input-group">
                <input className="input--style-5" type="email" name="Email" id="Email" value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})} required />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Password</div>
            <div className="value">
              <div className="input-group">
                <input className="input--style-5" type="password" name="Password" id="Password" value={this.state.Password} onChange={(e)=>this.setState({Password:e.target.value})} required />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" onClick={this.onSubmit} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
          </div>
          <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer/>
</div>

    )
  }
}

export default Signup;


// import Nav from './Nav';
// import './CSS/Signup.css';
// import {useFormik} from "formik";


// import {Link} from 'react-router-dom';
// import Footer from './footer';

// import Kravings from './Images/kravingsLogo.jpeg';

// import DataService from '../DataService';
// import React, { Component } from 'react';
// const Signup=()=> {
//   const [ signup, setSignup ] = useState('');
//      var requestObject={
//        success:(response)=>{
//          setSignup({signup:response});
//        },
//        error:function(error){
//          console.log(error)
//        }
//      }
 
//  const formik=useFormik({
//    initialValues:{
//        fname:"",
//        lname:"",
//        address:"",
//        city:"",
//        gender:"",
//        pincode:"",
//        mobile:"",
//        email:"",
//        password:""

//    },
//    onSubmit:values=>{
//        alert("Form submit");
//        DataService.insertSignup(requestObject);
//      }
// })

//    return (
//      <div>
//        <Nav />
// <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
//  <div className="wrapper wrapper--w790">
//    <div className="card card-5">
//      <div className="card-heading">
//        <h2 className="title">SIGN UP</h2>
//      </div>
//      <div className="card-body">
//        <form method="POST">
//          <div className="form-row m-b-55">
//            <div className="name">Name</div>
//            <div className="value">
//              <div className="row row-space">
//                <div className="col-6">
//                  <div className="input-group-desc">
//                    <input className="input--style-5" type="text" name="fname" id="fname" value={formik.values.fname} onChange={formik.handleChange} />
//                    <label className="label--desc">first name</label>
//                  </div>
//                </div>
//                <div className="col-6">
//                  <div className="input-group-desc">
//                    <input className="input--style-5" type="text" name="lname" id="lname" value={formik.values.lname} onChange={formik.handleChange} />
//                    <label className="label--desc">last name</label>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//          <div className="form-row">
//            <div className="name">Address</div>
//            <div className="value">
//              <div className="input-group">
//                <input className="input--style-5" type="text" name="address" id="address" value={formik.values.address} onChange={formik.handleChange} />
//              </div>
//            </div>
//          </div>
//          <div className="form-row m-b-55">
//            <div className="name">Area</div>
//            <div className="value">
//              <div className="row row-space">
//                <div className="col-6">
//                  <div className="input-group-desc">
//                    <input className="input--style-5" type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} />
//                    <label className="label--desc">City</label>
//                  </div>
//                </div>
//                <div className="col-6">
//                  <div className="input-group-desc">
//                    <input className="input--style-5" type="text" name="pincode" id="pincode" value={formik.values.pincode} onChange={formik.handleChange} />
//                    <label className="label--desc">PinCode</label>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//          <div className="form-row">
//            <div className="name">Gender</div>
//                <div className="col-md-4">
//                  <select id="Gender" className="form-select" name="Gender" value={formik.values.gender} onChange={formik.handleChange}>
//                    <option selected>Choose one</option>
//                    <option>Male</option>
//                    <option>Female</option>
//                    <option>Other</option>
//                  </select>
//                </div>
//            </div>

//          <div className="form-row">
//            <div className="name">Email</div>
//            <div className="value">
//              <div className="input-group">
//                <input className="input--style-5" type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
//              </div>
//            </div>
//          </div>
//          <div className="form-row">
//            <div className="name">Password</div>
//            <div className="value">
//              <div className="input-group">
//                <input className="input--style-5" type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
//              </div>
//            </div>
//          </div>
//          <div className="d-flex justify-content-center">
//            <button type="submit" onClick={formik.handleSubmit} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
//          </div>
//          <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
//        </form>
//      </div>
//    </div>
//  </div>
// </div>
// <Footer/>
// </div>

//    )
//  }

// export default Signup;

