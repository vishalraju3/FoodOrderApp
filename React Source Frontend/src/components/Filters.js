import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: { sort },
  } = CartState();


  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span><h5>Price</h5></span>
      <span>
        
        <Form.Check
          inline
          label="Low to High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
     
      </span>
      
      
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
