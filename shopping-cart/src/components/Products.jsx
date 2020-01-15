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
        prodcuts:[],
        qty:''
    }
    onchange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    display = () => {
        axios.get(`http://localhost:8080/products`).then(res => {
        const productlist = res.data;
        this.setState({ prodcuts:productlist });
      })
    }
    addtocart = (id) =>{
      const params = new URLSearchParams();
        params.append('id', id);
        params.append('qty', this.state.qty);
        axios.post(`http://localhost:8080/orders`, params).then((res)=>{
             alert("Added to Cart");
         });
         document.getElementById('qty').value='';
       
    }

    render() {
        
        return (
            
            <Container>
                <Row>
                    {this.state.prodcuts.map((product) =>(
            <Col sm={4}> <div class="card" style={{width:'20rem',marginTop:'30px'}}>
            <img src={`data:image/png;base64,${product.image}`} style={{height:'20rem'}}class="card-img-top" />
            <div class="card-body">
                
                <p class="card-text"style={{width:'20rem'}}>{product.description.length} </p>
                <h5 class="card-title">{product.name}<span>{product.price}</span></h5>
                <div className="cardstuff">
                    Qty:<input type="number" id="qty" name="qty" onChange={this.onchange}style={{width:"50px"}} min="1" maxlength="3" name="qty"/> 
                    <button onClick={(e) => this.addtocart(product.id)}><FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div></Col>))}
                </Row>
            </Container>


        );
    }
}

export default Products;
