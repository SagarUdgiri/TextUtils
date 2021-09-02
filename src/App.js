import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert'
// import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'

function App() {
  // const titles=["Home","About","Contact"];
  function searched() {
    alert("fdj")
  }

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
      {/* <Router> */}
      <Navbar title="TextUtils" search={searched} mode={Mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3"> 
      {/* <Switch> */}
      {/* <Route exact path="/about" ><About/></Route> */}
      {/* <Route path="/"> */}
        <TextForm showalert={SetAlert} heading="Enter Text to Analyz" mode={Mode} toggleMode={toggleMode}/>
      {/* </Route>         */}
      {/*  */}
      {/* </Switch>  */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
