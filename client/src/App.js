import React from 'react';
import NavigationMenu from "./components/NavigationMenu"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Dashboard from './pages/dashboard'
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
