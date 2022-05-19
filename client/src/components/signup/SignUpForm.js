import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpForm.css";

function SignUpForm() {
    return (
        <div class="signup">
            <h2>Don't Worry,</h2>
            <p>Making an account is <span class='easy'>easy</span>.</p>
            <Form className="signup-form" action="/signup" method="post">
                <Form.Control type="text" placeholder="First Name or Nickname" name="fName" />
                <Form.Control type="text" placeholder="Last Name" name="lName" />
                <Form.Control type="email" placeholder="Email Address" name="email" />
                <Form.Control type="password" placeholder="Password" name="password" />
                <br />
                <Button type="submit">Sign Up</Button>
            </Form>
            <p>Already have an acount? Log in <a href="/login" class='easy'>here!</a></p>
        </div>
    )
}

export default SignUpForm;