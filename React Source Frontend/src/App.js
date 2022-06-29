import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Home from "./components/Home";
import LoginView from './components/LoginView';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import Customer from './components/Customer';
import Owner from './components/Owner';
import CategoryBar from './components/CategoryBar';
import Order from './components/Order';
import Feedback from './components/ListFeedback';
import ListPayments from './components/ListPayments';
import ListOrders from './components/ListOrders';
import Invalid from './components/Invalid';
import AddProduct from "./components/AddProducts";
import ListMenu from "./components/ListMenu";
import Menu2 from './components/Menu2';
import Payment from "./components/Payment";
import DeleteProduct from "./components/DeleteProducts";
import ListProducts from "./components/ListProducts";
import UpdateProducts from "./components/UpdateProduct";
import Horizontalchart from "./components/BarGraph";
import ListSpecificOrders from "./components/ListSpecificOrders";
import ListSpecificPayment from "./components/ListSpecificPayment";
import GooglePay from "./components/GooglePay";
import Forgotp from "./components/Forgot";
import Reset from "./components/Reset";
function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact>
        
          <Home />
        </Route>
        <Route path="/components/Menu2" exact>
        
          <Menu2 />
        </Route>
        <Route path="/components/LoginView" exact>
        
          <LoginView />
        </Route>
       
        <Route path="/components/Signup" exact>
        
          <Signup />
        </Route>
        <Route path="/components/ListMenu" exact>
        
          <ListMenu />
        </Route>
        <Route path="/components/ContactUs" exact>
        
          <ContactUs />
        </Route>
        <Route path="/components/Customer" exact>
        
          <Customer />
        </Route>
        <Route path="/components/Owner" exact>
        
          <Owner />
        </Route>
        <Route path="/components/CategoryBar" exact>
        
          <CategoryBar />
        </Route>
        <Route path="/components/Listpayments" exact>
        
          <ListPayments />
        </Route>
        <Route path="/components/ListSpecificpayment" exact>
        
          <ListSpecificPayment />
        </Route>
        <Route path="/components/Order" exact>
        
          <Order />
        </Route>
        <Route path="/components/ListFeedback" exact>

          
        
          <Feedback />
        </Route>
        <Route path="/components/BarGraph" exact>

          
        
          <Horizontalchart />
        </Route>
        <Route path="/components/ListOrders" exact>
        
          <ListOrders />
        </Route>
        <Route path="/components/ListSpecificOrders" exact>
        
          <ListSpecificOrders />
        </Route>
        
        <Route path="/components/ListProducts" exact>
        
          <ListProducts />
        </Route>
        <Route path="/components/Invalid" exact>
        
          <Invalid />
        </Route>
        <Route path="/Menu" exact>
        <Header />
          <Menu />
        </Route>
        <Route path="/cart" exact>
        <Header />
          <Cart />
        </Route>
        <Route path="/components/AddProduct" exact>
          <AddProduct />
        </Route>
        <Route path="/components/DeleteProduct" exact>
          <DeleteProduct />
        </Route>
        <Route path="/components/Payment" exact>
          <Payment />
        </Route>
        <Route path="/components/UpdateProducts" exact>
          <UpdateProducts />
        </Route>
        <Route path="/components/GooglePay" exact>
          <GooglePay />
        </Route>
        <Route path="/components/ForgotP" exact>
          <Forgotp />
        </Route>
        <Route path="/components/Reset" exact>
          <Reset />
        </Route>
        
        
    </BrowserRouter>
  );
}

export default App;
