import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import jarOptions from "./jarOptions";
import "./AddCommunityJar.css";



function FirstStep(props) {

    function secondStep(event) {
        const whichJarOption = event.target.alt;
        var jarType = null;

        if (whichJarOption === "option-one") {
            jarType = 1
        } else if (whichJarOption === "option-two") {
            jarType = 2
        } else if (whichJarOption === "option-three") {
            jarType = 3
        }
        props.updateStep(jarType)
    };

    function JarOptions(options) {

        const evenColumns = (options.id % 2 === 0);
        const lastColumn = (options.id === jarOptions.length);

        return (
            <Col lg="4" md={ (!evenColumns && lastColumn) ? "12" : "6"} className="jar-options-div">
                <h4 className="jar-options-header">{options.title}</h4>
                <a href="#secondStep" type="button" onClick={secondStep} name={options.id}><img className="jar-options-img" src={options.src} alt={options.alt}></img></a>
                <p>{options.description}</p>
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

