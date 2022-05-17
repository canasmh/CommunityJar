import React from 'react';
import NavigationMenu from "./NavigationMenu"

function App() {
  const [data, setData] = React.useState({fName: null, lName: null, email: null, jars: []});

  React.useEffect(() => {
    fetch("/fetch-data")
      .then((res) => res.json())
      .then((data) => setData({fName: data.fName, lName: data.lName, email: data.email, jars: data.jars}));
  }, [])

  return (
    <div>
      <NavigationMenu isAuth={data.fName}/>
      <header>
        <p>{!data.fName ? "Loading..." : "Hello, " + data.fName + " " + data.lName}</p>
        
      </header>
    </div>
  );
}

export default App;
