import React from "react";
import Form from "react-bootstrap/Form"
import "./AddCommunityJar.css";



function ThirdStep(props) {

    const [membersInvited, setMembersInvited] = React.useState([])
    const [newMember, setNewMember] = React.useState()

    function addNewMember(event) {
        const value = event.target.value;
        setNewMember(value);
    }

    function inviteMember(event) {
        setMembersInvited(prevMembers => {return [...prevMembers, newMember]})
        setNewMember()
    }

    return (
        <div id="thirdStep">
            <i  class="fa-solid fa-arrow-down"></i>
            <h2>Step Three</h2>
            <h3>Add users to your jar</h3>
            <p>Click the icon below to invite a friend to your CommunityJar. Add as many friends as you like!</p>
            {(membersInvited.length === 0) && <div><Form.Control onChange={addNewMember} name="userEmail" type="email" placeholder="Friends@Email.com" value={(membersInvited.length === 0) ? newMember : membersInvited[0]}></Form.Control><a type="button" onClick={inviteMember}><i class="fa-solid fa-user-plus"></i></a></div>}
            {(membersInvited.length > 0) && <div><Form.Control onChange={addNewMember} name="userEmail" type="email" placeholder="Friends@Email.com" value={(membersInvited.length === 1) ? newMember : membersInvited[1]}></Form.Control><a type="button" onClick={inviteMember}><i class="fa-solid fa-user-plus"></i></a></div>}
            {(membersInvited.length > 1) && <div><Form.Control onChange={addNewMember} name="userEmail" type="email" placeholder="Friends@Email.com" value={(membersInvited.length === 2) ? newMember : membersInvited[2]}></Form.Control><a type="button" onClick={inviteMember}><i class="fa-solid fa-user-plus"></i></a></div>}
            {(membersInvited.length > 2) && <div><Form.Control onChange={addNewMember} name="userEmail" type="email" placeholder="Friends@Email.com" value={(membersInvited.length === 3) ? newMember : membersInvited[3]}></Form.Control><a type="button" onClick={inviteMember}><i class="fa-solid fa-user-plus"></i></a></div>}
            {(membersInvited.length > 3) && <div><Form.Control onChange={addNewMember} name="userEmail" type="email" placeholder="Friends@Email.com" value={(membersInvited.length === 4) ? newMember : membersInvited[4]}></Form.Control><a type="button" onClick={inviteMember}><i class="fa-solid fa-user-plus"></i></a></div>}
            {(membersInvited.length > 4) && <div><p class="max-invites">You can add more members after creating the jar.</p></div>}
            
            <a href="#thirdStep" ><button class="finished-btn" type="button" onClick={props.updateStep}>Finished</button></a>
            
        </div>
    )
}

export default ThirdStep;
