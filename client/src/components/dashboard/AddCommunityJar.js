import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import "./AddCommunityJar.css";

function AddCommunityJar(props) {

    const [addJarSteps, setAddJarSteps] = React.useState({firstStep: false, secondStep: false, thirdStep: false});
    const noJars = (props.jars.length === 0)
    // const [newJar, setNewJar] = React.useState(null);

    return (
        <div id="add-community-jar">
            <h1>Welcome, <span className="user-name">{props.fName}</span></h1>
            {noJars ? <h3>Create your first CommunityJar</h3> : <h3>Create a CommunityJar</h3>}
            <a href="#firstStep" type="button" onClick={() => !addJarSteps.firstStep ? setAddJarSteps({...addJarSteps, firstStep: true}) : null}><img className="add-jar-img" src="add-jar.png" alt='add-community-jar' /></a>
            <br />
            {addJarSteps.firstStep && <FirstStep />}
            {!addJarSteps.secondStep && <SecondStep />}
        </div>
        )
}

export default AddCommunityJar;