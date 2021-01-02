import React from 'react';
import Col from '../Col';
import Button from '../Button'


function Form() {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="Name" placeholder="Enter name"
                        id="name" class="form-text">We'll never share your info with anyone. /</Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="message" placeholder="Message" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}

export default Form;