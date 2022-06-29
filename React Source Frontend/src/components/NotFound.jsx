import react from 'react';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
 class Notfound extends React.Component{
    render(){
        function f(){
            window.location.href="/components/Signup";

        }
        return(
            <>
            <div>
                <p>The Entered Email has Not been registered in Our Database </p>
            </div>
            <div >
                <p>Pls Register</p>
            <button className="btn btn-success " onClick={f}>Click here to sign up!</button>
            </div>
            
            </>
        );

    }

 }

 export default Notfound;