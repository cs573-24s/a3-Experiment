import './App.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import Scatterplot from "./Scatterplot";
import Datapoint from "./Datapoint";
import * as d3 from "d3";
import csv_0 from "./graphs/random_points_color_0.csv";
import csv_1 from "./graphs/random_points_color_1.csv";
import csv_2 from "./graphs/random_points_color_2.csv";
import csv_3 from "./graphs/random_points_color_3.csv";
import csv_4 from "./graphs/random_points_color_4.csv";


var timeStart
var timeEnd

var timers = []

function App() {
  const csvFiles = [
    csv_0,
    csv_1,
    csv_2,
    csv_3,
    csv_4,
  ];

  const [csvNumber, setcsvNumber] = useState(0);
  const [canGo, setCanGo] = useState(false)
  const [data, setData] = useState([]);
  function mouseClicked(event){
    console.log(event.pageX, event.pageY)
    setCanGo(false)
    setcsvNumber(csvNumber+1)
  }

  useEffect(() => {
    d3.csv(csvFiles[csvNumber]).then(function(csvData) {
      console.log("csvData")
      console.log(csvData)
      const formattedData = csvData.map(d => ({
        id: parseInt(d.line),
        x: parseFloat(d.x),
        y: parseFloat(d.y),
        color: d.Color,
      }));
      setData(formattedData);
    });
  }, [csvNumber]);

  const [dimensions, setDimensions] = useState({
    width: 500,
    height: 500
  });

  function navGraph(event){
    document.getElementById("graph").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("break").style.display = "none";
    timeStart = performance.now()
  }

  function buildEnd(){
    let str = '<ul style="list-style:none">'
    for(let i = 0; i<timers.length; i++){
      str += '<li> Trial '+i+": "+timers[i]/1000+"s<li>"
    }
    str += '<ul>'
    document.getElementById("timerContainer").innerHTML = str;
  }

  function navBreak(event){
    timeEnd = performance.now()
    if(csvNumber == 4){
      document.getElementById("graph").style.display = "none";
      buildEnd();
      document.getElementById("end").style.display = "block";
    }
    else{
      document.getElementById("graph").style.display = "none";
      document.getElementById("break").style.display = "block";
    }
    timers.push(timeEnd-timeStart) //Prints time to click
    setcsvNumber(n => n+1)
  }

  useEffect(() => {
    if(csvNumber == 0){
      document.getElementById("break").style.display = "none";
      document.getElementById("graph").style.display = "none";
      document.getElementById("end").style.display = "none";
      }
  }, []);


  return (
    <div className="App">
      <div id="intro" className="text-center intro">
        <h3 className="mx-auto p-2">In this experiment, you are asked to find and click this red circle as fast as you can in a scatterplot. There will be 7 scatterplots in the experiment. We will also start with a sample scatterplot for you to practice and familiarize yourself with. We won't record any other information from you except the time it takes to find and click the red circle.</h3>
        <h3 className="mx-auto p-2">Click the "agree" button to begin.</h3>
        <button className="btn btn-primary" onClick={navGraph}>Agree</button> 
      </div>
      
      <svg id="graph" width="700" height="700" onClick={navBreak}>
        <Scatterplot
          x={100}
          y={100}
          width={dimensions.width}
          height={dimensions.height}
          data={data}
        />
      </svg>

      <div id="break">
        <h3 className="mx-auto p-2">Click "next" when you're ready for the next graph.</h3>
        <button className="btn btn-primary" onClick={navGraph}>Next</button> 
      </div>

      <div id="end">
        <h3 className="mx-auto p-2">This is the end of the experiment. Thank you for participating!</h3>
        <h3 className="mx-auto p-2">Here are your results.</h3>
        <div id="timerContainer"></div>
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