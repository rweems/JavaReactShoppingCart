import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct"
import { Tab } from 'react-bootstrap';

class App extends Component{
    render(){
        return(
            <div>
                <nav>
                    <a href="/">Products</a> <br />
                    <a href="/addproduct">Add Product</a> <br />
                    <a href="/cart">Cart</a>
                </nav>
            <Router>
                <Switch>
                    <Route exact path='/' component={Products}/>
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/addproduct' component={AddProduct} />
                    
                </Switch>
            </Router>
        </div>
    );
}

}

export default App;
