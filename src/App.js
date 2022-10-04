
import './App.css';
import About from './components/About';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Registration from './components/Forms/Registration';
import Notfound from './components/Notfound';
import AddUser from './components/users/AddUser';
import View from './components/users/View';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import EditUser from './components/users/EditUser';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
    
  }
  const removeBodyClassess = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls)=>{
    removeBodyClassess();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark');
       document.body.style.backgroundColor = "#071834";
       showAlert("Dark mode has been enabled","success");
       document.title = "Own Infotech - Dark Mode";
      //  setInterval(() => {
      //   document.title = "Own Infotech is Amaging";
      //  }, 2000);
      //  setInterval(() => {
      //   document.title = "Install Own Infotech";
      //  }, 2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title = "Own Infotech - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="OwnInfotech" about="About" home="Home" contact="Contact"/> */}
      {/* <Router>  */}
      <Navbar title="OwnInfotech"  home="Home" registration="Home" mode={mode} toggleMode={toggleMode} 
      registrationForm="RegistrationForm"/>
      <Alert alert = {alert}/>
      {/* <div className = "container my-3"> */}
      {/* <Switch>
          <Route exact path="/"> */}
             <TextForm showAlert={showAlert} heading= "Enter text below"  mode={mode} />
          {/* </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/registration" >
             <Home/>
          </Route>
          <Route exact path="/registrationForm" >
              <Registration/>
          </Route>
          <Route exact path="/AddUser">
              <AddUser/>
          </Route>
          <Route exact path="/edituser/:id">
              <EditUser/>
          </Route>
          <Route exact path="/view/:id">
              <View/>
          </Route>
          <Route>
              <Notfound/>
          </Route> */}
          
         
        {/* </Switch> */}
      {/* </div> */}
      {/* </Router> */}
      
      </>
  );
}
export default App;