import React from 'react';
import NavigationMenu from "./components/NavigationMenu"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Dashboard from './pages/dashboard'

function App() {
  const [data, setData] = React.useState({fName: null, lName: null, email: null, jars: []});

  React.useEffect(() => {
    fetch("/fetch-data")
      .then((res) => res.json())
      .then((data) => setData({fName: data.fName, lName: data.lName, email: data.email, jars: data.jars}));
  }, [])

  return (
    <Router>
      <NavigationMenu isAuth={data.fName}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
