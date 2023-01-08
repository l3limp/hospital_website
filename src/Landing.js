import logo from './home_svg.svg';
import './App.css';
import NavBar from './Navbar';
import { Button } from '@chakra-ui/react';

import {useNavigate} from "react-router-dom";

function Landing() {
  let history = useNavigate();
  
  return (
    
    <div>
      <header className="Landing-header">
        
        <div className='column'>

          <text className='title'>
            Private clinic<br></br> in Ratia
          </text>

          <text className="description">
            Cure your pains like never before <br></br>
            Come to <b>Kakar Hospital</b> for a quick checkup.
          </text>

        </div>

        <img src={logo} className="App-logo" alt="logo"/>
        {/* <Button maxWidth = {'350px'}
        fontSize={'2xl'}
        bg={'orange.400'}
        color={'white'}
        _hover={{
          bg:'blue.400',
        }}
        onClick={()=>{
          // window.alert("🦊")
          history("/home");
        }}>

        </Button> */}
      </header>
      
    </div>
    
  );
}

export default Landing;
