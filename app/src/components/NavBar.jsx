import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="nav">
      <Link to="/" className="link">
        IntroPage
      </Link>
      <Link to="/vis1" className="link">
        Vis1
      </Link>
      <Link to="/results" className="link">
        Results
      </Link>
      <Link to="/test" className="link">
        Test
      </Link>
    </div>
  );
}
