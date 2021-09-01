import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  // const titles=["Home","About","Contact"];
  function searched() {
    alert("fdj")
  }
  return (
    <div >
      <Navbar title="TextUtils" search={searched}></Navbar>
      <div className="container my-3">  
      <TextForm heading="Enter Text to Analyz"/>
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
