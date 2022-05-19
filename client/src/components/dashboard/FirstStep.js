import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import jarOptions from "./jarOptions";
import "./AddCommunityJar.css";

function JarOptions(props) {
    return (
        <Col lg="4" md="6">
            <h4 className="jar-options-header">{props.title}</h4>
            <img className="jar-options-img" src={props.src} alt={props.alt}></img>
            <p>{props.description}</p>
        </Col>
    )
};

function FirstStep() {
    return (
        <div id="firstStep">
            <i  class="fa-solid fa-arrow-down"></i>
            <h2>Step One:</h2>
            <h3>Select Your CommunityJar</h3>
            <p>Select the image that best describes your CommunityJar.</p>
            <Row>
                {jarOptions.map((jar) => (
                    <JarOptions key={jar.id} title={jar.header} description={jar.description} src={jar.src} alt={jar.alt} id={jar.id}/>
                ))};
            </Row>
        </div>
    )
}

export default FirstStep;

