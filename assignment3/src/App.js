import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const images = require.context('../public/images', true);
const imageList = images.keys().map(image => images(image));

function App() {
  const [imageNo, setImageNo] = useState(0);
  const [canGo, setCanGo] = useState(false)
  function mouseClicked(event){
    console.log(event.pageX, event.pageY)
    setCanGo(false)
    setImageNo(imageNo+1)
  }
  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div id="container" style={{width: '300px', height: '300px'}}>
            {canGo && <img key={imageNo} style={{cursor: 'pointer'}} src={imageList[imageNo]} alt={`${imageNo}`} onClick={mouseClicked} />}
        </div>
        {canGo &&  <div style={{"margin": "50px", width: '125px', 'fontSize': '25px'}}>
          Click the red circle to continue.
        </div> }
        {!canGo && <Button variant="primary"  style={{marginLeft: '10px', marginRight: '-10px', marginTop:'auto', marginBottom:'auto'}} onClick={()=>setCanGo(true)}>Continue</Button>}
      </div>
    </div>
  );
}

export default App;
