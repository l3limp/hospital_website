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
            Locate us on<br></br> Google Maps
          </text>

          <text className="description">
            Follow Google Maps to come <br></br>
            straight to us.
          </text>

        </div>

      </header>
    </div>
  );
}

export default Locate;