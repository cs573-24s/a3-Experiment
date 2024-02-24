import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {

  return (
    <div id="nav">
      <Link to="/" className="link">IntroPage</Link>
      <Link to="/vis1" className="link">Vis1</Link>
      <Link className="link"></Link>
      <Link className="link"></Link>

    </div>
  )
}
