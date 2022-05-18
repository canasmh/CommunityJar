import React from "react";
import AddCommunityJar from "../components/AddCommunityJar";

function Dashboard() {
    const [userData, setUserData] = React.useState({fName: null, lName: null, email: null, jars: []});

    

    React.useEffect(() => {
        fetch("/fetchData")
        .then((res) => res.json())
        .then((userData) => setUserData({fName: userData.fName, lName: userData.lName, email: userData.email, jars: userData.jars}));
    }, [])

    return (
        <AddCommunityJar fName={userData.fName} jars={userData.jars}/>)
}

export default Dashboard;