import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class AddProduct extends Component {
    state = { 
        selectedFile:null
     }
    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    render() { 
        return ( 
            <div className="container mt-5" style={{maxWidth:"500px"}}> 
                <Form>
                <Form.Group controlId="PName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="IPhone X Max" required/>
                </Form.Group>
            
                <Form.Group controlId="PDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" required/>
                </Form.Group>

                <Form.Group controlId="PPrice">
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                        </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="1000.00" required/></InputGroup>
                </Form.Group>

                <Form.Group controlId="PImage">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="file" onChange={this.fileSelectHandler} required/>
                </Form.Group>
                <Button type="submit">Submit form</Button>
             </Form>
            </div>
         );
    }
}
 
export default AddProduct;