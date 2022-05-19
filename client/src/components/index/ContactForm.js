import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ContactForm.css";

function ContactForm() {
    return (
    <div id="contact">
        <h2>Have a Question?</h2>
        <Form method="post" action="/">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" for="fullName">Name: </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Jane Doe" id="fullName" name="fullName" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" for="email">Email: </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" placeholder="your@email.com" id="email" name="email" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" for="message">Message: </Form.Label>
                <Col sm="10">
                    <Form.Control as="textarea" rows={8} placeholder="Write your message here..." id="message" name="message" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" for="submit"></Form.Label>
                <Col sm="10">
                    <Button type="submit">Send</Button>
                </Col>
            </Form.Group>
        </Form>
    </div>
    )
}

export default ContactForm;