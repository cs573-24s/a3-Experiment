import "./DisplayVisPage.css"
import { useState, useEffect } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import Vis1 from "./Vis1"
import Vis2 from "./Vis2"
export default function DisplayVisPage() {
  const [visNum, changeVis] = useState(1);
  const [percentDiff, setPercentDiff] = useState(null);
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
    //if no more vis needed
    console.log(userAnswers)
    if (visNum > 45) {
      //TODO: send to 
      const docRef = addDoc(collection(db, "results"), userAnswers)
      console.log(docRef.id)
    } else {
      const [randomData, percentDiff] = generateRandomData();
      setCurrVis(visNum < 15 ? <Vis1 randomData={randomData} /> : <Vis2 randomData={randomData} />)
      setPercentDiff(percentDiff);
    }
  }, [visNum])


  const submit = () => {
    const input = document.getElementById("input").value
    console.log(input)
    if (input === "") {
      alert("please enter a percentage")
    } else {
      let currAnswers = userAnswers;
      const diff = Math.abs(input - percentDiff)
      const calcError = Math.log2(diff + (1 / 8))
      currAnswers['vis' + visNum] = { type: currType, user_answer: Number(input), correct: percentDiff, difference: diff, error: calcError > 0 ? calcError : 0 }
      setUserAnswers(currAnswers)
      input.value = "";
      changeVis(visNum + 1)
    }
  }


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submit()
      event.target.value = "";
    }
  }


  //TODO: make look pretty
  return (
    <div>
      {visNum <= 45 ?
        <div>
          <div id="progress-bar">
            <div id="inner-progress" style={{ width: (visNum / 45) * 100 + "%" }} />
          </div>
          <div id="main-flex">
            <div id="question-area">
              <h4>Visualization {visNum} / 45</h4>
              <div id="prompt">
                What percentage of the larger element is the smaller element?
                <br />
                (Round to the nearest percent)
              </div>
              <div id="input-area">
                <div style={{ display: 'inline-block', margin: 'auto' }}>
                  <input id="input" type="number" onKeyDown={handleKeyDown} />
                  <button id="submit" onClick={submit}>submit</button>
                </div>
              </div>
            </div>
            <div id="main-area">
              {currVis}
            </div>
          </div>
        </div>
        :
        <div>
          <p><br /><br /><br />Thank you for participating, your answers have been logged.</p>
          <p>Please visit "Results" to see live results of our study</p>
        </div>
      }
    </div>
  )
}

