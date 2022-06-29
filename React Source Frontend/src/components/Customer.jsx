
import dessert from './Images/dessert.jpg';
import g1 from './Images/g-1.jpg';
import g2 from './Images/g-2.jpg';
import g3 from './Images/g-3.jpg';
import Chinese from './Images/chinese.jpg';
import './CSS/Customers.css';
import Footer from './footer';
import CategoryBar from './CategoryBar';

import React, { Component } from 'react';
import CustomerNav from './CustomerNav';
class Customer extends Component {
           
           render() { 
       
               return (
                   <div>
                     <CustomerNav />
                     
                      <section className="gallery" id="gallery">
                        <h1 className="heading text-center" style={{border: 'ridge', textShadow: '2px 2px', backgroundColor: 'cadetblue'}}> Our Speciality</h1>
                        
                        <CategoryBar />
                        <div className="d-flex justify-content-center mt-4">
                            <input type="text" placeholder="Search" className="search-box" />
                            <button className="search-btn">Search</button>
                          </div>
                          
                        <div className="box-container">
                          <div className="box">
                            <img src={g1} alt />
                            <div className="content">
                              <h3>BURGERS</h3>
                              <p>
                                delicious veg and non-ver combos available
                              </p>
                              <a href="/User/ORDER" className="btn"><strong>order now</strong></a>
                            </div>
                          </div>
                          <div className="box">
                            <img src={g2} alt />
                            <div className="content">
                              <h3>Sandwichs</h3>
                              <p>
                                Roast,grill every thing is here
                              </p>
                              <a href="/User/ORDER" className="btn">order now</a>
                            </div>
                          </div>
                          <div className="box">
                            <img src={g3} alt />
                            <div className="content">
                              <h3>Rolls</h3>
                              <p>
                              </p>
                              <a href="/User/ORDER" className="btn">order now</a>
                            </div>
                          </div>
                          <div className="box">
                            <img src={dessert} alt />
                            <div className="content">
                              <h3>Desserts</h3>
                              <p>
                                Sweeter like never before 
                              </p>
                              <a href="/User/ORDER" className="btn">order now</a>
                            </div>
                          </div>
                          <div className="box">
                            <img src={Chinese} alt />
                            <div className="content">
                              <h3>Chinese</h3>
                              <p>
                                hotter
                              </p>
                              <a href="/User/ORDER" className="btn">order now</a>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="first-section text-center">
                        <div className="col-md-12">
                          <button type="button" className="btn btn-primary align-items" data-toggle="button" id="cart">          
                          <a href="/User/ORDER" style={{color: 'inherit', textDecoration: 'none'}}> ORDER</a>
                          </button>
                        </div>
                      </section>
                      <section className="second-section">
                        <div className="col-12 text-center" style={{textDecoration: 'none', paddingTop: 10}}>
                          <a className="h1 m-0 mt-2 text-center" href="/User/ContactUs" style={{textDecoration: 'none', paddingTop: 10}}>CONTACT DETAILS</a>
                        </div>
                      </section>
                      <Footer />
                    </div>
               );
           }
       }
       export default Customer;

  