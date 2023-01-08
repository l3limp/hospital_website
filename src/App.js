import './App.css';
import NavBar from './Navbar';
import Landing from './Landing';
import Locate from './Locate';
import About from './About';
import { Button, Wrap, WrapItem } from '@chakra-ui/react';

import {useNavigate} from "react-router-dom";

function App() {
  let history = useNavigate();
  
  return (
    
    <div className = "App">
      <NavBar />
      <Landing />
      <Locate />
      <About />
      
    </div>
    
  );
}

export default App;
