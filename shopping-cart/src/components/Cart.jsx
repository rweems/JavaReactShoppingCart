import React, { Component } from 'react';
import axios from 'axios';
import {Table,Container, Row}from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

class Cart extends Component {
    constructor(){
        super();
        this.getcart();
    }
    state = { orders:[], carttotal:0 }

    
    getcart=() =>{
        axios.get(`http://localhost:8080/orders`).then(res => {
            const orderlist = res.data;
            this.setState({ orders:orderlist });
            this.updatetotal(this.state.orders.length);
          })
    }

    delete=(id)=>{
        axios.delete(`http://localhost:8080/orders/`+id).then((res)=>{
            this.getcart();
        });
    }
    updatetotal=(len)=>{
      var total=0;
      for (var i=0; i<len;i++) {
        total+=(this.state.orders[i]['quantity']*this.state.orders[i]['prod']['price']);
      }
      this.setState({carttotal:total})
    }

    addqty=(id,orderqty)=>{
      orderqty++;
      const params = new URLSearchParams();
        params.append('id', id);
        params.append('qty', orderqty);
      axios.put(`http://localhost:8080/orders/plus`,params).then((res)=>{
        this.getcart();
    });
    }

    subqty=(id,orderqty)=>{
      orderqty--;
      if(orderqty===0){
        this.delete(id);
      }else{
      const params = new URLSearchParams();
        params.append('id', id);
        params.append('qty', orderqty);
      axios.put(`http://localhost:8080/orders/minus`,params).then((res)=>{
        this.getcart();
    });
   }
    }
    render() { 
      var olen = this.state.orders.length;
        return (
            <Container style={{minHeight:"700px"}} > 
              {olen>0 &&
              <Row className="mt-5">
                <Table responsive className="text-center" style={{background:"white", marginTop:"5%"}}>
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
                    <td><FontAwesomeIcon onClick={(e)=>this.addqty(order.id,order.quantity)} icon={faPlus} className="mr-2" />
                          <input style={{width:"50px",textAlign:"center"}} value={order.quantity}/>
                        <FontAwesomeIcon onClick={(e)=>this.subqty(order.id,order.quantity)} icon={faMinus}className="ml-2"  />
                    <FontAwesomeIcon icon={faTrashAlt} style={{color:"red"}} onClick={(e) => this.delete(order.id)} className="float-right pr-auto mt-1"/>
                    </td>
                    <td>{(order.quantity * order.prod.price).toFixed(2)}</td>
                  </tr>))}
                </tbody>
                <tfoot>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td> <h3>Cart Total: {(this.state.carttotal).toFixed(2)}</h3></td>
                 
                </tfoot>
              </Table>
                </Row>}
              {olen===0 && 
          <Row className="row h-100">
            <h3 className="m-auto">No Items in Cart</h3>
          </Row>}
          </Container>
          );
    }
}
 
export default Cart;