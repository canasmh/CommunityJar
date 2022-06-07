import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import payOptions from "./payOptions";
import "./AddCommunityJar.css";

function SecondStep(props) {

    return (
        <div id="secondStep">
            <i  className="fa-solid fa-arrow-down"></i>
            <h2>Step Two</h2>
            <h3>Select Withdraw & Deposity Frequency</h3>
            <Row>
                <Col lg={(props.jarType != 3) ? "4" : "6"} md="6">
                    <h4 className="jar-options-header">{payOptions[0].title}</h4>
                    {!props.errors.errorFirst ? null : <p className="error">* Please select a valid value</p>}
                    <span>Every</span> 
                    <Form.Select onChange={props.functions[0]} aria-label={payOptions[0].title} value={props.values[0]}>
                        <option value={null}>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </Form.Select>
                    <span>Week(s)</span>
                    <p>{payOptions[0].description}</p>
                </Col>
                <Col lg={(props.jarType != 3) ? "4" : "6"} md="6">
                    <h4 className="jar-options-header">{payOptions[1].title}</h4>
                    {!props.errors.errorSecond ? null : <p className="error">* Please select a valid value</p>}
                    <span>$</span>
                    <Form.Control onChange={props.functions[1]} value={props.values[1]} type="text" placeholder="0.00" id="withdrawAmount" name="withdrawAmount" />
                    <p>{payOptions[1].description}</p>
                </Col>
                
                    { (props.jarType !== 3) ? 
                    <Col lg="4" md="6">
                        <h4 className="jar-options-header">{payOptions[2].title}</h4>
                        {!props.errors.errorThird ? null : <p className="error">* Please select a valid value</p>}
                        <span>Every</span> 
                        <Form.Select onChange={props.functions[2]} aria-label={payOptions[2].title} value={props.values[2]}>
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
                        </Form.Select> 
                        <span>Week(s)</span>
                        <p>{payOptions[2].description}</p></Col> : null}
                
            </Row>
            <a href={(!props.errors.errorFirst && !props.errors.errorSecond && !props.errors.errorThird) ? "#thirdStep" : "#secondStep"}><button type="button" onClick={props.updateStep}>Continue</button></a>
        </div>
    )
}

export default SecondStep;