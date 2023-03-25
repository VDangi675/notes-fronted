import { useState } from 'react';
import './App.css';
import Signup from './Component/Signup/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './Component/Signin/Signin';
import Homepage from './Component/HomePage/Homepage';
import AddNote from './Component/Addnotes/Addnotes';

function App() {

 
  const [data, setData] = useState(""); 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/Homepage'  element={<Homepage  />}/>
        <Route path='/Addnotes' element={<AddNote />}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
