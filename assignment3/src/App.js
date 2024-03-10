import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


const images = require.context('../public/images', true);
const imageList = images.keys().map(image => images(image));
var timeStart
var timeEnd
var imgStart = 0

function App() {
  const [imageNo, setImageNo] = useState(0);
  const [canGo, setCanGo] = useState(false)
  function mouseClicked(event){
    console.log(event.pageX, event.pageY)
    setCanGo(false)
    setImageNo(imageNo+1)
  }

  function navGraph(event){
    document.getElementById("intro").style.display = "none";
    document.getElementById("break").style.display = "none";
    document.getElementById("graph").style.display = "block";
    if(imgStart == 0){
      document.getElementById("label").textContent = "Sample Graph"
    }
    else{
      document.getElementById("label").textContent = imgStart+"/7" //example number, can change
    }
    timeStart = performance.now()
    
  }

  function navBreak(event){
    timeEnd = performance.now()
    document.getElementById("graph").style.display = "none";
    if(imgStart == 7){
      document.getElementById("end").style.display = "block";
    }
    else{
      document.getElementById("break").style.display = "block";
    }
    console.log(timeEnd-timeStart) //Prints time to click
    imgStart++
  }
  return (
    <div className="App">
      
      <div id="intro" className="text-center intro">
        <h3 className="mx-auto p-2">In this experiment, you are asked to find and click this red circle as fast as you can in a scatterplot. There will be 7 scatterplots in the experiment. We will also start with a sample scatterplot for you to practice and familiarize yourself with. We won't record any other information from you except the time it takes to find and click the red circle.</h3>
        <h3 className="mx-auto p-2">Click the "agree" button to begin.</h3>
        <button className="btn btn-primary" onClick={navGraph}>Agree</button> 
      </div>
      
      <div id="graph">
        <img key={imageNo} style={{cursor: 'pointer'}} src={imageList[imageNo]} alt={`${imageNo}`} onClick={navBreak} />
        <h3 id="label"></h3>
      </div>

      <div id="break">
        <h3 className="mx-auto p-2">Click "next" when you're ready for the next graph.</h3>
        <button className="btn btn-primary" onClick={navGraph}>Next</button> 
      </div>

      <div id="end">
        <h3 className="mx-auto p-2">This is the end of the experiment. Thank you for participating!</h3>
      </div>

    </div>

    // <div className="App">
    //   <div style={{display: 'flex', alignItems: 'center'}}>
    //     <div id="container" style={{width: '300px', height: '300px'}}>
    //         {canGo 
    //         && <img key={imageNo} style={{cursor: 'pointer'}} src={imageList[imageNo]} alt={`${imageNo}`} onClick={mouseClicked} />}
    //     </div>
    //     {canGo 
    //     && <div style={{"margin": "50px", width: '125px', 'fontSize': '25px'}}>
    //       Click the red circle to continue.
    //     </div> }
    //     {!canGo 
    //     // && <h1>Click continue when you're ready for the next graph.</h1>
    //     && <Button variant="primary"  style={{marginLeft: 'auto', marginRight: 'auto', marginTop:'auto', marginBottom:'auto'}} onClick={()=>setCanGo(true)}>Continue</Button> 
    //     }
    //   </div>
    // </div>
  );
}

export default App;