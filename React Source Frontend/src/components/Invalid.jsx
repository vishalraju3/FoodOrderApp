import './CSS/Invalid.css';
import React, { Component } from 'react';
class Invalid extends Component {
    render(){
        return(
           <div className='invalid'>
                <section className="w3l-error-9">
                    <div className="error-page">
                    <div className="wrapper-full">
                        <div className="main-content">
                        <h2>Sorry</h2>
                        <h4>User Does Not Exist...</h4>
                        <div className="buttons">
                            <a href="/User/Signup" className="btn brk-btn-bg brk-btn">
                            Sign Up
                            </a>
                            <a href="/Home/Index" className="btn brk-btn">
                            Go to home page
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}
export default Invalid;