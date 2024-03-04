import "./DisplayVisPage.css"
import { useState, Children, useEffect, useRef } from "react"
import Vis1 from "./Vis1"
import Vis2 from "./Vis2"
export default function DisplayVisPage({ children }) {
  const childrenArray = Children.toArray(children)
  const [visNum, changeVis] = useState(0);


  //TODO: REMOVE
  const [showChange, changeChange] = useState(0)
  const [currVis, setCurrVis] = useState(null);


  //iterate over children 
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        label: `Data ${i + 1}`,
        value: Math.round(Math.random() * 100)
      });
    }

    // Randomly select two indices to highlight
    const indicesToHighlight = [];
    while (indicesToHighlight.length < 2) {
      const index = Math.floor(Math.random() * 5);
      if (!indicesToHighlight.includes(index)) {
        indicesToHighlight.push(index);
      }
    }

    for (let i = 0; i < 5; i++) {
      data[i].highlighted = indicesToHighlight.includes(i);
    }

    return data;
  };




  useEffect(() => {
    const randomData = generateRandomData()

    setCurrVis(visNum < 4 ? <Vis1 randomData={randomData} /> : <Vis2 randomData={randomData} />)
    console.log(randomData)
  }, [visNum])
  //dummy code
  const updateVis = () => {
    changeChange(showChange + 1)
    changeVis(visNum + 1)

  }




  //TODO: make look pretty

  return (
    <div>
      <div id="progress-bar">
        <div id="inner-progress" style={{ width: "10%" }} />
      </div>
      <div id="main-flex">
        <div id="question-area">
          <div id="prompt">
            What percentage difference is the smaller marked element from the larger?
          </div>
          <div id="input-area">
            <div style={{ display: 'inline-block', margin: 'auto' }}>
              <input type="number" />
              <button onClick={updateVis}>submit</button>
            </div>
          </div>
        </div>
        <div id="main-area">
          {currVis}
          {showChange}
        </div>
      </div>
    </div>
  )
}

