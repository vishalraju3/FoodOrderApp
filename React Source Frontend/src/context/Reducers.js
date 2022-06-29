export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, status: 1 }] };
    case "REMOVE_FROM_CART":
      console.log(action);
      console.log(state.cart);
      return {
        ...state,
        cart: state.cart.filter((c) => c.pid !== action.payload.pid),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.pid === action.payload.pid ? (c.status = action.payload.status) : c.status
        ),
      };
      case "ADD_Products":
      return { ...state, products:action.payload  };
    
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {  byRating: 0 };
    default:
      return state;
  }
};
