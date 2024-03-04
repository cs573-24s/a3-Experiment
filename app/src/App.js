import NavBar from "./components/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Vis1 from "./pages/Vis1";
import Vis2 from "./pages/Vis2";
import ResultsPage from "./pages/ResultsPage";
import DisplayVisPage from "./pages/DisplayVisPage";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/vis1" element={<Vis1 />} />
        <Route path="/vis2" element={<Vis2 />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/test" element={<DisplayVisPage><div>hello</div></DisplayVisPage>} />
      </Routes>
    </div>
  );
}

export default App;
