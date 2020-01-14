import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../css/Products.css';
import axios from 'axios';
import {Container,Row,Col}from 'react-bootstrap';



class Products extends Component{
    constructor(){
        super();
        this.display();
    }
    state = {
        prodcuts:[]
    }

    display = () => {
        axios.get(`http://localhost:8080/products`).then(res => {
        const productlist = res.data;
        this.setState({ prodcuts:productlist });
      })
    }
    addtocart = (id) =>{
        console.log(id);
    }

    render() {
        const productList = this.state.prodcuts.map(function(product){
            return (<Col sm={4}> <div class="card" style={{width:'20rem',marginTop:'30px'}}>
            <img src={`data:image/png;base64,${product.image}`} style={{height:'20rem'}}class="card-img-top" />
            <div class="card-body">
                
                <p class="card-text"style={{width:'20rem'}}>{product.description.length} </p>
                <h5 class="card-title">{product.name}<span>{product.price}</span></h5>
                <div className="cardstuff">
                    Qty:<input type="number" style={{width:"50px"}} min="1" maxlength="3" name="qty"/> 
                    <button onClick={this.addtocart.bind(this,1)}><FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div></Col>);
          });
        return (
            
            <Container>
                <Row>
                    {productList}
                </Row>
            </Container>


        );
    }
}

export default Products;
