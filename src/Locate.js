import './App.css';
import Map from './map.png';
import { Button } from '@chakra-ui/react';


function Locate() {
  return (
    <div id = "locate">
      <header className="Locate-Header">

      <img src={Map} className="Map-Image" alt="logo"/>
        
        <div className='column'>

          <text className='title'>
            Private clinic<br></br> in Ratia
          </text>

          <text className="description">
            Cure your pains like never before <br></br>
            Come to <b>Kakar Hospital</b> for a quick checkup.
          </text>

        </div>

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

export default Locate;