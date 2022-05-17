import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropDown";
import Container from "react-bootstrap/Container";
import "./NavigationMenu.css";

    //         <% if (isAuth) { %>
    //           <li class="nav-item ">
    //             <a class="nav-link" href="/dashboard">Dashboard</a>
    //           </li>
    //           </ul>
            //   <form action="/logout" method="POST">
            //     <button class="btn btn-login" type="submit">Log Out</button>
            //   </form>
    //         <% } else { %>
    //           </ul>
    //           <form >
    //             <a href="/login"><button class="btn btn-login" type="button">Log In</button></a>
    //           </form>
    //           <form >
    //             <a href="/signup"><button class="btn btn-signup" type="button">Sign Up</button></a>
    //           </form>
    //         <% } %>
    //     </div>
    //   </div>
    // </nav>

function NavigationMenu(props) {
    return (
    <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
            <Navbar.Brand href="#home">CommunityJar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/#about">About</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
                {props.isAuth && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
                {props.isAuth && <form action="/logout" method="POST"><button class="btn btn-login" type="submit">Log Out</button></form>}
                {!props.isAuth && <a href="/login"><button class="btn btn-login" type="button">Log In</button></a>}
                {!props.isAuth && <a href="/signup"><button class="btn btn-signup" type="button">Sign Up</button></a>}
                
                
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default NavigationMenu;
