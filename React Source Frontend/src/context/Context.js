import { createContext, useContext, useEffect, useReducer,useState } from "react";
import { cartReducer, productReducer } from "./Reducers";
import DataService from "../DataService";
import React from 'react';
const Cart = createContext();
const Context = ({ children }) => {
  let [cart,setCart]=React.useState([]);
  React.useEffect(() => {
    var requestObject={
      success:(response)=>{
        setCart(response);
        dispatch({type:"ADD_Products",payload:response});
        console.log(response);
      },
      error:function(error){
        console.log(error)
      }
    }
    DataService.listProducts(requestObject);
  },[setCart]);
  
  const products =[];
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
