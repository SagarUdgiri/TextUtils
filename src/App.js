import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

function App() {
  // const titles=["Home","About","Contact"];
  function searched() {
    alert("fdj")
  }
  function toggleMode() {
    if (Mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else
    {
      setMode('light')    
      document.body.style.backgroundColor='white'
    }
  }
  const [Mode, setMode] = useState('light');
  return (
    <div >
      <Navbar title="TextUtils" search={searched} mode={Mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">  
      <TextForm heading="Enter Text to Analyz" mode={Mode} toggleMode={toggleMode}/>
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
