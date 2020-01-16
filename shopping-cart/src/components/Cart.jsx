import React, { Component } from 'react';
import axios from 'axios';
import {Table,Container}from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';



class Cart extends Component {
    constructor(){
        super();
        this.getcart();
        this.updatetotal();
    }
    state = { orders:[], carttotal:0 }

    
    getcart=() =>{
        axios.get(`http://localhost:8080/orders`).then(res => {
            const orderlist = res.data;
            this.setState({ orders:orderlist });
            console.log(this.state.orders);
          })
    }

    delete=(id)=>{
        axios.delete(`http://localhost:8080/orders/`+id).then((res)=>{
            this.getcart();
        });
    }
    updatetotal=()=>{
      for (const [index, value] of this.state.orders.entries()) {
        this.state.carttotal+=value;
      }
    }
    render() { 
        return (
            <Container>
            <Table responsive borderless className="text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody  >
            {this.state.orders.map((order) =>(<tr>
                <td>{order.prod.name}</td>
                <td>{order.prod.price}</td>
                <td>{order.quantity}
                <FontAwesomeIcon icon={faTrashAlt} onClick={(e) => this.delete(order.id)} className="float-right pr-auto mt-1"/>
                </td>
                <td>{order.quantity * order.prod.price}</td>
              </tr>))}
            </tbody>
          </Table>
    <h1>Total: {this.state.carttotal}</h1>
          </Container>
          );
    }
}
 
export default Cart;