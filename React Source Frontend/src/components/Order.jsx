
import React, { Component } from 'react';
import './CSS/Order.css'; 
class Order extends Component {
            
            render() { 
        
                return (
                        <div>
                        <section className="first-class">
                            <h2 style={{textAlign: 'center'}}>MENU</h2>
                            
                            <table className="table table-bordered table-striped " id="menutbl" style={{textAlign: 'center'}}>
                            <thead>
                                <tr>
                                <th scope="col">Product Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price(1 pcs)</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Select</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}><tr>
                                <th scope="row">1</th>
                                <td>Ice cream</td>
                                <td>90</td>
                                <td><input type="number" name="qty" /></td>
                                <td><input type="checkbox" name="check-tab1" />select</td>
                                </tr></tbody>
                            </table>
                        </section>
                        <section className="MyCart">
                            <h2 style={{textAlign: 'center'}}>ORDER</h2>
                            <table className="table table-bordered " id="ordertbl" style={{textAlign: 'center'}}>
                            <thead>
                                <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Product Name</th>
                                <th id="tprice" scope="col">Price(1 pcs)</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Select</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                <tr>
                                <th id="Oid" scope="row"></th>
                                <td id="Pname"></td>
                                <td id="Price"></td>
                                <td id="Qnt"></td>
                                </tr>
                            </tbody>
                            </table>
                            <div className="emailform" style={{textAlign: 'center'}}>
                            <label htmlFor="Email"><h2>Enter your Email</h2></label>
                            <input type="email" className="Email" name="Email" id="Email" />
                            </div>
                        </section>
                        <h2 style={{textAlign: 'center'}}>Total Price: <span id="total" /></h2>
                        <section>
                            <form className="form" id="myform" method="post">
                            <div className="tab tab-btn col-12 text-center">
                                <button type="button" className="btn btn-success col" onclick="tab1_To_tab2()" style={{marginRight: 10}}> <strong>MOVE TO ORDER</strong> </button>
                                <button type="button" className="btn btn-danger col" onclick="tab2_To_tab1()"><strong>Move To Menu</strong></button>
                            </div>
                            <div className="text-center col-sm-12">
                                <button type="submit" onclick="return confirm()" className="btn btn-primary col-sm-6">
                                <a href="/User/Payment" style={{textDecoration: 'none', color: 'antiquewhite', marginRight: 10}}><stron>confirm order</stron></a></button>
                            </div>
                            </form>
                        </section>
                        </div>
                )
            }
        }
        export default Order;


