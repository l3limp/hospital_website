import './App.css';
import NavBar from './Navbar';
import Landing from './Landing';
import Locate from './Locate';
import { Button, Wrap, WrapItem } from '@chakra-ui/react';

import {useNavigate} from "react-router-dom";

function App() {
  let history = useNavigate();
  
  return (
    
    <div>
      <NavBar />
      <Landing />
      <Locate />
      
    </div>
    
  );
}

export default App;
