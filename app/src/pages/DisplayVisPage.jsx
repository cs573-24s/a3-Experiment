import "./DisplayVisPage.css"
import { useState, Children } from "react"
import AnswerSelectoin from "../components/AnswerSelection"
import AnswerSelection from "../components/AnswerSelection"
export default function DisplayVisPage({ children }) {
  const childrenArray = Children.toArray(children)
  const [currVis, changeVis] = useState(childrenArray[0])


  //iterate over children 
  const options = [1, 2, 3, 4, 5]


  //TODO: make look pretty

  return (
    <div>
      <div id="progress-bar">
        <div id="inner-progress" style={{ width: "10%" }} />
      </div>
      <div id="main-flex">
        <button>left</button>
        <div id="main-area">
          {currVis}
        </div>
        <button>right</button>
      </div>
      <AnswerSelection options={options} />
    </div>
  )
}


const styles = {





}
