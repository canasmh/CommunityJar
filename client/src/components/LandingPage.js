import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./LandingPage.css"


function LandingPage() {

    const [isAuth, setIsAuth] = React.useState(null);

    React.useEffect(() => {
        fetch("/isAuth")
        .then(response => response.json())
        .then(data => setIsAuth(data.isAuth))
    });

    return (
    <div className="landing-page">
        <Row>
            <Col lg="6">
                <div className="vertical-center">
                    <h2 className="landing-header">Challenge Yourself</h2>
                    <hr />
                    <h2 className="landing-header">Plan an Experience</h2>
                    {!isAuth && <a href="/login"><button className="my-btn btn-login2" type="button" name="logIn">Log In</button></a>}
                    {!isAuth && <a href="/signup"><button className="my-btn btn-signup2" type="button" name="signUp">Sign Up</button></a>}
                </div>
            </Col>
            <Col lg="6">
                <img className="landing-img" src="logo.png" alt="community-jar-logo" />
            </Col>
        </Row>
    </div> )
};

export default LandingPage;