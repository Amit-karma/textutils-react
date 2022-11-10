
import './App.css';
import React, {useState} from 'react'

// import About from './components/About';
// import before using it |
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const [mode1, setMode1] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(()=>{
        setAlert(null);
       },2000)
  }
   
  const toggleMode1 = () =>{

    if (mode1 === 'light') {
      setMode1('dark');
      // document.body.style.backgroundColor ='#121212';
      document.body.style.backgroundColor =' #e7ebad';
      document.body.style.color ='black';
      showAlert("Read mode has been enabled","success");
  }  else {
    setMode1('light');
    document.body.style.backgroundColor ='white';
    document.body.style.color ='black';
    showAlert("Light mode has been enabled","success");
  }

}
  const toggleMode = () =>{
  

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#121212';
      // document.body.style.backgroundColor =' #e7ebad';
      document.body.style.color ='white';
      showAlert("Dark mode has been enabled","success");

    } else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      showAlert("Light mode has been enabled","success");
    }
   }

  return (
    <> 
    {/* <Router> */}
    <Navbar title= "Nav" mode={mode} mode1={mode1} toggleMode={toggleMode}  toggleMode1={toggleMode1} />
    <Alert alert={alert}/>
    <div className='container my-3'> 
    {/* <Switch> */}
      {/* exact is used to access exact path
      eg /a --> 1
      /a/b -->  2 if exact use nhi kiya toh 2nd pe bhi 1st access ho jayega  */}
          {/* <Route exact path="/about">
          <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} mode1={mode1}/>
          {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
  }
export default App;