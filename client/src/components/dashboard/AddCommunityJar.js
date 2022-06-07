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

    const [secondStepErrors, setSecondStepErrors] = React.useState({
        errorFirst: false,
        errorSecond: false,
        errorThird: false
    })

    function setDepositFrequency(event) {
        const value = event.target.value;
        setNewJar(prevJar => {return {...prevJar, depositFrequency: value}})
    }

    function setDepositAmount(event) {
        const value = event.target.value;
        setNewJar(prevJar => {return {...prevJar, depositAmount: value}})
    }

    function setWithdrawFrequency(event) {
        const value = event.target.value;
        setNewJar(prevJar => {return {...prevJar, withdrawFrequency: value}})
    }

    function updateFirstStep() {
        if (!addJarSteps.firstStep) {
            setAddJarSteps(prevSteps => {
                return {
                    ...prevSteps, 
                    firstStep: true}
                }
            );
        }
    };

    function updateSecondStep(jarType) {
        setAddJarSteps(prevSteps => {return {...prevSteps, secondStep: true}});
        setNewJar(prevJar => {return {...prevJar, jarType: jarType}});

    };

    function updateThirdStep() {
        var error=false;
        if (newJar.depositFrequency) {
            setSecondStepErrors(prevErrs => {return {...prevErrs, errorFirst: false}})
        } else {
            setSecondStepErrors(prevErrs => {return {...prevErrs, errorFirst: true}})
            error=true;
        }

        if (newJar.depositAmount) {
            setSecondStepErrors(prevErrs => {return {...prevErrs, errorSecond: false}})
        } else {
            setSecondStepErrors(prevErrs => {return {...prevErrs, errorSecond: true}})
            error=true;
        }
        if (newJar.withdrawFrequency) {
            setSecondStepErrors(prevErrs => {return {...prevErrs, errorThird: false}})
        } else {
            if (newJar.jarType === 3) {
                setSecondStepErrors(prevErrs => {return {...prevErrs, errorThird: false}})
            }
            else {
                setSecondStepErrors(prevErrs => {return {...prevErrs, errorThird: true}})
                error=true;
            }   
        }

        if (error) {
            console.log(secondStepErrors)
            setAddJarSteps(prevSteps => {return {...prevSteps, thirdStep: false}});
        } else {
            setAddJarSteps(prevSteps => {return {...prevSteps, thirdStep: true}});
        }
            
    };
    

    return (
        <div id="add-community-jar">
            <h1>Welcome, <span className="user-name">{props.fName}</span></h1>
            {noJars ? <h3>Create your first CommunityJar</h3> : <h3>Create a CommunityJar</h3>}
            <a href="#firstStep" type="button" onClick={updateFirstStep}><img className="add-jar-img" src="add-jar.png" alt='add-community-jar' /></a>
            <br />
            {addJarSteps.firstStep && <FirstStep updateStep={updateSecondStep}/>}
            {addJarSteps.secondStep && <SecondStep 
            jarType={newJar.jarType} 
            updateStep={updateThirdStep} 
            functions={[setDepositFrequency, setDepositAmount, setWithdrawFrequency]} 
            values={[newJar.depositFrequency, newJar.depositAmount, newJar.withdrawFrequency]}
            errors={secondStepErrors}
            />
            }

            {addJarSteps.thirdStep && <ThirdStep />}
        </div>
        )
}

export default AddCommunityJar;