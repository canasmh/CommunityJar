import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import jarOptions from "./jarOptions";
import "./AddCommunityJar.css";



function FirstStep() {

    function JarOptions(props) {

        const evenColumns = (props.id % 2 === 0);
        const lastColumn = (props.id === jarOptions.length);

        return (
            <Col lg="4" md={ (!evenColumns && lastColumn) ? "12" : "6"}>
                <h4 className="jar-options-header">{props.title}</h4>
                <img className="jar-options-img" src={props.src} alt={props.alt}></img>
                <p>{props.description}</p>
            </Col>
        )
    };

    return (
        <div id="firstStep">
            <i  class="fa-solid fa-arrow-down"></i>
            <h2>Step One</h2>
            <h3>Select Your CommunityJar</h3>
            <p>Select the image that best describes your CommunityJar.</p>
            <Row>
                {jarOptions.map((jar) => (
                    <JarOptions key={jar.key} title={jar.header} description={jar.description} src={jar.src} alt={jar.alt} id={jar.key}/>
                ))};
            </Row>
        </div>
    )
}

export default FirstStep;

