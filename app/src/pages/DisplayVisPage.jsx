import { useState } from "react"
export default function DisplayVisPage({ children }) {
  const [currVis, changeVis] = useState(children[0])


  //iterate over children 


  return <div>
    {currVis}
  </div>
}
