
import './App.css';
import React from "react";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AllProducts from './Pages/Products/AllProducts/AllProducts';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Orders from './Pages/Orders/Orders';
import Footer from './Pages/Footer/Footer';
import AllOrders from './Pages/Admin/AllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './Pages/Payment/Payment';
import Deshboard from './Pages/Deshboard/Desjboard/Deshboard';


function App() {
  return (
    <div className="App">
         
         <Router>
            <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/orders/home">
                <Home />
              </Route>
              <Route path="/allProducts">
                <AllProducts></AllProducts>
              </Route>
              <Route path="/deshboard">
                <Deshboard></Deshboard>
              </Route>
              <Route path="/orders/allProducts">
                <AllProducts></AllProducts>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/orders/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/orders/register">
                <Register></Register>
              </Route>
              <Route path="/allOrders">
                <AllOrders></AllOrders>
              </Route>
              <Route path="/orders/allOrders">
                <AllOrders></AllOrders>
              </Route>
              <Route path="/myorders">
                <MyOrders></MyOrders>
              </Route>
              <Route path="/orders/myorders">
                <MyOrders></MyOrders>
              </Route>
              <Route path="/addproduct">
                <AddProduct></AddProduct>
              </Route>
              <Route path="/orders/addproduct">
                <AddProduct></AddProduct>
              </Route>
              <Route path="/payment">
                <Payment></Payment>
              </Route>
              <Route path="/orders/payment">
                <Payment></Payment>
              </Route>
              <Route path="/orders/:id">
                <Orders></Orders>
              </Route>
              
            </Switch>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
