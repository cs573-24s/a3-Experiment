import "./DisplayVisPage.css"
import { useState, Children, useEffect } from "react"
import AnswerSelectoin from "../components/AnswerSelection"
import AnswerSelection from "../components/AnswerSelection"
export default function DisplayVisPage({ children }) {
  const childrenArray = Children.toArray(children)
  const [currVis, changeVis] = useState(childrenArray[0])


  //TODO: REMOVE
  const [showChange, changeChange] = useState(0)


  //iterate over children 
  const options = [1, 2, 3, 4, 5]


  useEffect(() => {



  }, [currVis, showChange])
  //dummy code
  const updateVis = () => {
    changeChange(showChange + 1)
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

