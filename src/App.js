
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState('');
  const [mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode enable", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enable", "success")


    }

  }
  return (

    <>
      <Router>
        <Navbar title="TextUtile" aboutText="About" Link="Link" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route  exact path="/about" element={<About />} />
          </Routes>

          

        </div>
      </Router>
    </>
  );
}

export default App;
