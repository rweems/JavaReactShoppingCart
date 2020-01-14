import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class AddProduct extends Component {
    constructor(){
        super();
    
    this.state = { 
        selectedFile: '',
        pname: '',
        description: '',
        price:''
        
     }
    }
    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        
    }
    display = (e) => {
        const formData = new FormData();
        formData.append('product',JSON.stringify(this.state));
        formData.append('file',this.state.selectedFile);
        axios.post(`http://localhost:8080/products`, formData).then(res => {
            alert("Added");
          });
    }

    render() { 
        return ( 
            <div className="container mt-5" style={{maxWidth:"500px"}}> 
                <Form onSubmit={this.display}>
                <Form.Group  value={this.state.pname} onChange={this.onChange} controlId="PName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="pname"type="text" placeholder="IPhone X Max" required/>
                </Form.Group>
            
                <Form.Group value={this.state.descriptioin} onChange={this.onChange}  controlId="PDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows="3" required/>
                </Form.Group>

                <Form.Group value={this.state.price} onChange={this.onChange} controlId="PPrice">
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control name="price" type="text" placeholder="1000.00" required/></InputGroup>
                </Form.Group>

                <Form.Group value={this.state.selectedFile} onChange={this.fileSelectHandler} controlId="PImage">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control name="selectedFile" type="file" required/>
                </Form.Group>
                <Button type="submit">Submit form</Button>
             </Form>
            </div>
         );
    }
}
 
export default AddProduct;