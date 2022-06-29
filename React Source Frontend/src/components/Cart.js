import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import DataService from "../DataService";
import { data } from "jquery";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const [Order, setOrder] = useState({
    Email: "",
    PName: "",
    Price: "",
    Qnt: "",
    TotalPrice: "",
    Status: "",
  });
  const myemail = localStorage.getItem("Email");
  const Amount = localStorage.getItem("Amount");

  // let [Ocart, setOCart] = useState([]);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.status, 0));
  }, [cart]);
  console.log(cart);
  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(cart));
  // }, [cart]);
  // console.log(cart);
  // c;
  var requestObj = {
    success: (response) => {
      this.setState({
        Order: response,
      });
    },
    error: function (error) {
      console.log(error);
    },
  };

  const submitButton = (e) => {
    for (var j = 0; j < cart.length; j++) {
      requestObj.data = {
        Email: myemail,
        PName: cart[j].pname,
        Price: cart[j].price,
        Qnt: cart[j].status,
        TotalPrice: cart[j].price*cart[j].status,
        Status: "PENDING",
      };
      DataService.insertOrders(requestObj);

      // useEffect(() => {
      //   var requestObject = {
      //     success: (response) => {
      //       setOCart(response);

      //       console.log(response);
      //     },
      //     error: function (error) {
      //       console.log(error);
      //     },
      //   };
      //   DataService.insertOrders(requestObject);
      // }, [setOCart]);
    }
    console.log("end");
    window.location.href = "/components/Payment";
  };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.pid}>
              <Row>
                <Col md={2}>
                  <Image
                    src={`data:image/png;base64,${prod.foodImage}`}
                    alt={prod.ImageName}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{prod.pname}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>

                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.status}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          pid: prod.pid,
                          status: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.pid).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>

        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>

        <Button
          type="button"
          onClick={submitButton}
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;