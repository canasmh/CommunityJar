import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import payOptions from "./payOptions";
import "./AddCommunityJar.css";

function SecondStep() {

    function PayOptions(props) {

        const evenColumns = (props.id % 2 === 0);
        const lastColumn = (props.id === payOptions.length);

        return (
            <Col lg="4" md={ (!evenColumns && lastColumn) ? "12" : "6"}>
                <h4 className="jar-options-header">{props.title}</h4>
                { (props.id !== 2) && <Form.Select aria-label="Default select example">
                    <option>Frequency</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>}
                { (props.id !== 2) && <Form.Select aria-label="Default select example">
                    <option>Unit</option>
                    <option value="1">Week(s)</option>
                    <option value="2">Month(s)</option>
                </Form.Select>}

                { (props.id === 2) && <div><span>$</span><Form.Control type="text" placeholder="5.00" id="withdrawAmount" name="withdrawAmount" /></div>}
                <p>{props.description}</p>
            </Col>
        )
    };

    return (
        <div id="secondStep">
            <i  class="fa-solid fa-arrow-down"></i>
            <h2>Step Two</h2>
            <h3>Select Withdraw & Deposity Frequency</h3>
            <Row>
                {payOptions.map((jar) => (
                    <PayOptions key={jar.key} title={jar.title} description={jar.description} id={jar.key}/>
                ))};
            </Row>
        </div>
    )
}

export default SecondStep;