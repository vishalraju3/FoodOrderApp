import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
// import ScrollArea from "react-scrollbar";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    
    <div className="products">
      {/* <ScrollArea> */}
      <Card>
        <Card.Img variant="top" src={`data:image/png;base64,${prod.foodImage}`}alt={prod.ImageName} />
        <Card.Body>
          <Card.Title>{prod.pname}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.toString().split(".")[0]}</span>
            
              <div>Fast Delivery</div>
            
          </Card.Subtitle>
          {cart.some((p) => p.pid === prod.pid) ? (
            localStorage.setItem("pnames",JSON.stringify(prod.pname)),
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                  
                })
                
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
      {/* </ScrollArea> */}
    </div>
  );
};

export default SingleProduct;