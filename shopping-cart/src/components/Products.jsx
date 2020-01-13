import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../css/Products.css';


class Products extends Component{
    state = {}
    render() {
        return (
            <div class="container">
                
                <div class="card" style={{width:'20rem'}}>
                    <img src={require('../img/mac.jpg')} class="card-img-top" />
                    <div class="card-body">
                        
                        <p class="card-text">Designed for those who defy limits and change the world, the new MacBook Pro 
                        is by far the most powerful notebook we’ve ever made. </p>
                        <h5 class="card-title">Macbook Pro<span>$1000</span></h5>
                        <div className="cardstuff">
                            Qty:<input type="number" style={{width:"50px"}} min="1" maxlength="3" name="qty"/> 
                            <button><FontAwesomeIcon icon={faShoppingCart} /></button>
                        </div>
                    </div>
                </div>
  
            </div>


        );
    }
}

export default Products;
