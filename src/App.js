import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert'

function App() {

  const [alert, showalert] = useState(null);
  function toggleMode() {
    if (Mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#2a2f47';
      showalert({msg:" Dark Mode has been Enabled!",Type:"success "});
      document.title="TextUtils - Dark Mode"
    }
    else
    {
      setMode('light')    
      document.body.style.backgroundColor='white';
      showalert({msg:" Light Mode has been Enabled!",Type:"success "});
      document.title="TextUtils - Light Mode"
    }
  }
  const [Mode, setMode] = useState('light');


  const SetAlert=(message,type)=>{
    showalert({
      msg:message,
      Type:type
    })
    setTimeout(()=> showalert(null),1000)
  }
  return (
    <div >
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3"> 
        <TextForm showalert={SetAlert} heading="Enter Text to Analyz" mode={Mode} toggleMode={toggleMode}/>        
      </div>
    </div>
  );
}

export default App;
