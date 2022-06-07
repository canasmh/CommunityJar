import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./NavigationMenu.css";

function NavigationMenu() {

    const [isAuth, setIsAuth] = React.useState(false);

    React.useEffect(() => {
        fetch("/isAuth")
        .then(response => response.json())
        .then (data => setIsAuth(data.isAuth))
    })


    return (
    <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
            <Navbar.Brand href="/">CommunityJar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/#about">About</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
                {isAuth && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
                {isAuth && <form action="/logout" method="POST"><button className="btn btn-login" type="submit">Log Out</button></form>}
                {!isAuth && <a href="/login"><button className="btn btn-login" type="button">Log In</button></a>}
                {!isAuth && <a href="/signup"><button className="btn btn-signup" type="button">Sign Up</button></a>}
                
                
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default NavigationMenu;
