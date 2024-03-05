import "./DisplayVisPage.css"
import { useState, Children, useEffect, useRef } from "react"
import Vis1 from "./Vis1"
import Vis2 from "./Vis2"
export default function DisplayVisPage() {
  const [visNum, changeVis] = useState(0);
  const [percentDiff, setPercentDiff] = useState(null);
  //TODO: REMOVE
  const [showChange, changeChange] = useState(0)
  const [currVis, setCurrVis] = useState(null);
  const [userAnswers, setUserAnswers] = useState({})



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

    const chosen_values = data.filter(d => d.highlighted);
    const smallerHighlightedSum = Math.min(...chosen_values.map(d => d.value));
    const largerHighlightedSum = Math.max(...chosen_values.map(d => d.value));

    const percentDiff = Math.round((smallerHighlightedSum / largerHighlightedSum) * 100);
    return [data, percentDiff]
  };



  const currType = visNum < 15 ? "bar" : "pie";

  useEffect(() => {
    const [randomData, percentDiff] = generateRandomData();

    setCurrVis(visNum < 15 ? <Vis1 randomData={randomData} /> : <Vis2 randomData={randomData} />)
    setPercentDiff(percentDiff)
    console.log(randomData)
  }, [visNum])



  const submit = () => {
    const input = document.getElementById("input")
    let j = userAnswers;
    j['vis' + visNum] = { type: currType, user_answer: Number(input.value), correct: percentDiff, difference: Math.abs(input.value - percentDiff) }
    setUserAnswers(j)
    input.value = "";
    changeVis(visNum + 1)

  }


  const handleKeyDown = (event) => {
    console.log(userAnswers)
    if (event.key === 'Enter') {
      submit()
      event.target.value = "";
    }
  }


  //TODO: make look pretty

  return (
    <div>
      <div id="progress-bar">
        <div id="inner-progress" style={{ width: (visNum / 45) * 100 + "%" }} />
      </div>
      <div id="main-flex">
        <div id="question-area">
          <h4>Visualization {visNum} / 45</h4>
          <div id="prompt">
            What percentage of the larger element is the smaller element in area?
            <br />
            (Round to the nearest percent)
          </div>
          <div id="input-area">
            <div style={{ display: 'inline-block', margin: 'auto' }}>
              <input id="input" type="number" onKeyDown={handleKeyDown} />
              <button onClick={submit}>submit</button>
            </div>
          </div>
        </div>
        <div id="main-area">
          {currVis}
          {percentDiff}
        </div>
      </div>
    </div>
  )
}

