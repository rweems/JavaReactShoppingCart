import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import './App.css';
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    render(){
        return(
            <div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <a class="navbar-brand" href="#">Shopping Cart</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="/">Products <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/addproduct">Add Product</a>
                      </li>
                    </ul>
                    <span class="navbar-text">
                      <a class="nav-link" href="/cart">Cart</a>
                    </span>
                  </div>
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
