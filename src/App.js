import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
    }
    else
    {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>} /> */}
        {/* <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} /> */}
        <TextForm mode={mode} showAlert={showAlert}/>
      {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
