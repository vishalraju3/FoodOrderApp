// import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
class CustomerNav extends Component {
    
    render() { 

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a id="register" className="nav-link active float-right" aria-current="page" href="/User/OrderListcus">Order</a>
                        </li>
                        <li className="nav-item">
                            <a id="register" className="nav-link active float-right" aria-current="page" href="/User/PaymentListcus">Payment</a>
                        </li>
                        <li className="nav-item">
                            <a id="register" className="nav-link active float-right" aria-current="page" href="/User/LoginView">Log Out</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>

        );
    }
}
export default CustomerNav;