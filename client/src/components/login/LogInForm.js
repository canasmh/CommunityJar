import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LogInForm.css";

function LogInForm() {
    return(
        <div class="login">
            <h2>Welcome Back!</h2>
            <p>Enter your account details below:</p>
            <Form className="login-form" action="/login" method="post">
                <Form.Control type="email" placeholder="Email Address" id="email" name="email" />
                <Form.Control type="password" id="password" name="password" placeholder="Password" />
                <br />
                <Button type="submit">Log In</Button>
    
            </Form>
            <p>Don't have an account yet? Sign up <a href="/signup">here!</a></p>
        </div>
    )
}

export default LogInForm;