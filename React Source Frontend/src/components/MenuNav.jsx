
import React, { Component } from 'react';
class MenuNav extends Component {
    
    render() { 

        return (
            <div>
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#">LOGO</a>
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <a
                              id="register"
                              class="nav-link active float-right"
                              aria-current="page"
                              href="/User/C_OrderPage"
                              >Home</a
                            >
                          </li>
                       
            
                        
                          <li class="nav-item">
                            <a
                              id="register"
                              class="nav-link active float-right"
                              aria-current="page"
                              href="/User/LoginView"
                              >Log Out</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  </div>
                  )
                }
            }
            export default MenuNav;
