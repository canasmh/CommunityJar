import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import "./AddCommunityJar.css";

function AddCommunityJar(props) {

    const [addJarSteps, setAddJarSteps] = React.useState({
        firstStep: false, 
        secondStep: false, 
        thirdStep: false
    });

    const noJars = (props.jars.length === 0)

    const [newJar, setNewJar] = React.useState({
        title: null,
        creator: null,
        dateCreated: null,
        jarType: null,
        depositFrequency: null,
        depositAmount: null,
        withdrawFrequency: null,
        members: []
    });

    function updateFirstStep() {
        if (!addJarSteps.firstStep) {
            setAddJarSteps(prevSteps => {
                return {
                    ...prevSteps, 
                    firstStep: true}
                }
            );
        }

        console.log(addJarSteps);
        
    };

    function updateSecondStep(jarType) {
        setAddJarSteps(prevSteps => {return {...prevSteps, secondStep: true}});
        setNewJar(prevJar => {return {...prevJar, jarType: jarType}});

    };

    function updateThirdStep() {
        setAddJarSteps(prevSteps => {return {...prevSteps, thirdStep: true}});
    };
    

    return (
        <div id="add-community-jar">
            <h1>Welcome, <span className="user-name">{props.fName}</span></h1>
            {noJars ? <h3>Create your first CommunityJar</h3> : <h3>Create a CommunityJar</h3>}
            <a href="#firstStep" type="button" onClick={updateFirstStep}><img className="add-jar-img" src="add-jar.png" alt='add-community-jar' /></a>
            <br />
            {addJarSteps.firstStep && <FirstStep updateStep={updateSecondStep}/>}
            {addJarSteps.secondStep && <SecondStep jarType={newJar.jarType} updateStep={updateThirdStep}/>}
            {addJarSteps.thirdStep && <ThirdStep />}
        </div>
        )
}

export default AddCommunityJar;