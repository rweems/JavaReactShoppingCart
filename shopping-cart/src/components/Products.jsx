import React, {Component} from "react";
import {Card} from 'react-bootstrap';
import cardstuff from '../css/Products.css';

class Products extends Component{
    state = {}
    render() {
        return (
            <div>
                
                <Card style={{width:'20rem', border:'solid 2px', margin:'10px 30px', display:'inline-block'}}>
                    
                    <br />
                        <Card.Img src={require('../img/mac.jpg')}  alt="card img"/>
                    
                    <Card.Body>Designed for those who defy limits and change the world, the new MacBook Pro 
                        is by far the most powerful notebook we’ve ever made. 
                    </Card.Body>
                    <Card.Title style={{textAlign:'center'}}>Macbook Pro <span>$1000</span></Card.Title>
                    Qty:<input type="number" name="qty"/> <button>Add to Cart</button>
                </Card>

            </div>
        );
    }
}

export default Products;
