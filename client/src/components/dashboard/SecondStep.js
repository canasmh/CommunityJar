import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import payOptions from "./payOptions";
import "./AddCommunityJar.css";

function SecondStep(props) {

    function PayOptions(payOption) {

        const evenColumns = (props.id % 2 === 0);
        const lastColumn = (props.id === payOptions.length);

        return (
            <Col lg={(props.jarType !== 3) ? "4" : "6"} md={ (!evenColumns && lastColumn) ? "12" : "6"}>
                
                {payOption.id === 1 ? <div><h4 className="jar-options-header">{payOption.title}</h4><span>Every</span> 
                <Form.Select onChange={props.functions[0]} aria-label={payOption.title} value={props.values[0]}>
                    <option value={null}>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </Form.Select> <span>Week(s)</span><p>{payOption.description}</p></div> : null}
                
                { (payOption.id === 2) && <div><h4 className="jar-options-header">{payOption.title}</h4><span>$</span>
                <Form.Control onChange={props.functions[1]} value={props.values[1]} type="text" placeholder="0.00" id="withdrawAmount" name="withdrawAmount" /><p>{payOption.description}</p></div>}

                { (payOption.id ===3 && props.jarType !== 3) ? <div><h4 className="jar-options-header">{payOption.title}</h4><span>Every</span> 
                <Form.Select onChange={props.functions[2]} aria-label={payOption.title} value={props.values[2]}>
                    <option value={null}>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </Form.Select> <span>Week(s)</span><p>{payOption.description}</p></div> : null}
                
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
            <a href="#thirdStep"><button type="button" onClick={props.updateStep}>Continue</button></a>
        </div>
    )
}

export default SecondStep;