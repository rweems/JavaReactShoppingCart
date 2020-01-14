import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class AddProduct extends Component {
    state = { 
        selectedFile: '',
        pname: '',
        descriptioin: '',
        price:''
     }
     

    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
    }
    display = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() { 
        return ( 
            <div className="container mt-5" style={{maxWidth:"500px"}}> 
                <Form onSubmit={this.display}>
                <Form.Group  value={this.state.pname} onChange={this.onChange} controlId="PName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="IPhone X Max" required/>
                </Form.Group>
            
                <Form.Group value={this.state.descriptioin} onChange={this.onChange}  controlId="PDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" required/>
                </Form.Group>

                <Form.Group value={this.state.price} onChange={this.onChange} controlId="PPrice">
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control  type="text" placeholder="1000.00" required/></InputGroup>
                </Form.Group>

                <Form.Group value={this.state.selectedFile} onChange={this.onChange} controlId="PImage">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control  type="file" required/>
                </Form.Group>
                <Button type="submit">Submit form</Button>
             </Form>
            </div>
         );
    }
}
 
export default AddProduct;