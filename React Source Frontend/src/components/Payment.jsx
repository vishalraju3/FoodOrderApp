import "./CSS/payment.css";
import DataService from "../DataService";
import React, { Component } from "react";
import Footer from "./footer";
import HomeNav from "./HomeNav";
import Kravings from "./Images/kravingsLogo.jpeg";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import GooglePay from "./GooglePay";
// import Money from "./Images/money-con.jpg";
// import UPI from "./Images/UPIIcon.png";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Type: "",
      CardNo: "",
      CVV: "",
      Amount: "",
      BANKNAME: "",
      UPI: "",
      NAMEONCARD: "",
      EXPIRY: "",
    };

    this.componentDidMount = () => {
      const myemail = localStorage.getItem("Email");
      const Amount = localStorage.getItem("Amount");
      const Orders = localStorage.getItem("items");

      var requestObject = {
        success: (response) => {
          this.setState({
            Payment: response,
          });
        },
        error: function (error) {
          console.log(error);
        },
      };

      this.onSubmitCod = (e) => {
        e.preventDefault();
        requestObject.data = {
          Type: "cash",
          Amount: Amount,

          Email: myemail,
        };
        DataService.insertPayments(requestObject);
        window.location.href = "/components/LoginView";
        //alert("Form submit");
      };
      this.onSubmitUPI = (e) => {
        e.preventDefault();
        requestObject.data = {
          Type: "Upi",
          BANKNAME: this.state.BANKNAME,
          Email: myemail,
          Amount: Amount,

          UPI: this.state.UPI,
        };
        DataService.insertPayments(requestObject);
        window.location.href = "/components/LoginView";
        //alert("Form submit");
      };
      this.onSubmitCard = (e) => {
        e.preventDefault();
        requestObject.data = {
          Type: "Card",
          CardNo: this.state.CardNo,
          BANKNAME: this.state.BANKNAME,
          Email: myemail,
          Amount: Amount,

          EXPIRY: this.state.EXPIRY,
          CVV: this.state.CVV,
          NAMEONCARD: this.state.NAMEONCARD,
        };
        DataService.insertPayments(requestObject);
        window.location.href = "/";
        //alert("Form submit");
      };
    };
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="d-flex justify-content-center ">
          <div className="col-lg-9 ">
            <div className="col-12 mt-4 bg-light">
              <div className="card p-3">
                <p className="mb-0 fw-bold h4 ">Payment Methods</p>
              </div>
            </div>
            <div className="col-12 rounded">
              <div className="card p-3 bg-dark">
                <div className="card-body border p-2">
                  <p>
                    <a
                      className="btn btn-danger w-100 h-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="collapse"
                      href="#collapseExample1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseExample1"
                    >
                      <span className="fw-bold">pay on delivery</span>
                      <span className="fas fa-money-bill-wave"></span>
                    </a>
                  </p>
                  <div className="collapse p-3 pt-0" id="collapseExample1">
                    <div className="row">
                      <div className="col-8">
                        {/* <img src={Money} height="100" width="100"></img> */}
                        <p className="mb-0">
                          <span className="fw-bold h4">
                            cash<br></br>
                          </span>
                          <span className="c-blue">
                            Pay cash at the time of delivery. We recommend you
                            use online payments for contactless delivery
                          </span>
                        </p>
                        <form onSubmit={this.onSubmitCod}>
                          <div className="form-group">
                            <div className="fw-bold p-2">EMail</div>
                            <input
                              className="form-control input-lg"
                              id="Email"
                              name="Email"
                              type="text"
                              value={this.state.Email}
                              placeholder="Email"
                              onChange={(e) =>
                                this.setState({ Email: e.target.value })
                              }
                              required
                            ></input>
                          </div>
                          <button
                            type="submit"
                            onClick={this.onSubmitCod}
                            className="btn btn-success"
                          >
                            Confirm Order
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body border border-dark p-2">
                  <p>
                    <a
                      className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="collapse"
                      href="#collapseExample2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseExample2"
                    >
                      <span className="fw-bold">UPI</span>
                      <span className="fas fa-money-bill-wave"></span>
                    </a>
                  </p>
                  <div className="collapse p-3 pt-0" id="collapseExample2">
                    <div className="row">
                      <div className="col-6">
                        <img
                          // src={UPI}
                          height="100"
                          width="200"
                          className="col-6"
                        ></img>
                        <div className="col-12">
                          Transfer money from your bank account using UPI with
                          your registered VPA
                        </div>
                      </div>
                    </div>
                    <form
                      className="d-flex justify-content-center"
                      onSubmit={this.onSubmitUPI}
                    >
                      <div className="form-group">
                        <div className="fw-bold p-2">ENTER BANKNAME</div>
                        <input
                          className="form-control input-lg"
                          id="BANKNAME"
                          name="BANKNAME"
                          type="text"
                          placeholder="BANKNAME"
                          value={this.state.BANKNAME}
                          onChange={(e) =>
                            this.setState({ BANKNAME: e.target.value })
                          }
                          required
                        ></input>
                      </div>

                      <div className="form-group">
                        <div className="fw-bold p-2 b">pay via upi</div>
                        <input
                          className="form-control input-lg"
                          id="UPI"
                          name="UPI"
                          type="text"
                          placeholder="Enter VPA"
                          value={this.state.UPI}
                          onChange={(e) =>
                            this.setState({ UPI: e.target.value })
                          }
                          required
                        ></input>
                      </div>
                      <GooglePay></GooglePay>
                      <button
                        type="submit"
                        onClick={this.onSubmitUPI}
                        className="btn btn-success"
                      >
                        pay
                      </button>
                    </form>
                  </div>
                </div>
                <div className="card-body border p-2">
                  <p>
                    <a
                      className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                    >
                      <span className="fw-bold">CrediT/Debit Card</span>
                      <span>
                        <span className="fab fa-cc-amex" />
                        <span className="fab fa-cc-mastercard" />
                        <span className="fab fa-cc-discover" />
                      </span>
                    </a>
                  </p>
                  <div className="collapse show p-3 pt-0" id="collapseExample">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-7 ">
                        <form
                          className="d-flex justify-content-center"
                          onSubmit={this.onSubmitCard}
                          style={{
                            border: "ridge",
                            margin: "5px",
                          }}
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="form__div">
                                <input
                                  type="text"
                                  id=" CardNo"
                                  name=" CardNo"
                                  className="form-control"
                                  placeholder="CARD NUMBER"
                                  value={this.state.CardNo}
                                  onChange={(e) =>
                                    this.setState({ CardNo: e.target.value })
                                  }
                                  required
                                />
                              </div>
                              <div className="form__div">
                                <input
                                  className="form-control"
                                  id="BANKNAME"
                                  name="BANKNAME"
                                  type="text"
                                  placeholder="BANK NAME"
                                  value={this.state.BANKNAME}
                                  onChange={(e) =>
                                    this.setState({ BANKNAME: e.target.value })
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form__div">
                                <input
                                  className="form-control"
                                  id="EXPIRY"
                                  name="EXPIRY"
                                  type="text"
                                  placeholder="MM/YY"
                                  value={this.state.EXPIRY}
                                  onChange={(e) =>
                                    this.setState({ EXPIRY: e.target.value })
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form__div">
                                <input
                                  type="password"
                                  id="CVV"
                                  name="CVV"
                                  className="form-control"
                                  placeholder="CVV"
                                  value={this.state.CVV}
                                  onChange={(e) =>
                                    this.setState({ CVV: e.target.value })
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form__div">
                                <input
                                  type="text"
                                  id=" NAMEONCARD"
                                  name=" NAMEONCARD"
                                  className="form-control"
                                  placeholder="NAME ON CARD"
                                  value={this.state.NAMEONCARD}
                                  onChange={(e) =>
                                    this.setState({
                                      NAMEONCARD: e.target.value,
                                    })
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button
                                className="btn btn-success w-100"
                                style={{ margin: "10px" }}
                                type="submit"
                                onClick={this.onSubmitCard}
                              >
                                PAY
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default Payment;