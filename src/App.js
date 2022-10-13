// import logo from './logo.svg';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
 
//   Route,
//   Routes,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
document.body.style.backgroundColor ='rgba(0,0,0,.84) ';
document.body.style.color ='white';
showAlert(" Dark mode has been enabled","success");
document.title ='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white ';
       document.body.style.color ='black';
       document.title ='TextUtils - Light Mode';
       showAlert(" Light mode has been enabled","success");
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert=(message ,type)=>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(()=>{
      setAlert(null);},1500
    );
  }

  return (
    <>

    {/* <Router> */}
<Navbar title="Text Editor & Word Counter" about = "About me" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container">
  
  {/* <Routes>
    <Route exact path='/AboutUs'element={<AboutUs/>}>
    </Route> */}
    {/* <Route exact path='/' element={ */}
    <Textform showAlert={showAlert} heading="Enter the Text" mode={mode} />
    {/* }> */}
    {/* </Route> */}
   
  {/* </Routes> */}
 </div>
  {/* </Router> */}
 

 </>
  );
}

export default App;
