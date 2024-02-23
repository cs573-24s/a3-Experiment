import NavBar from './components/NavBar';
import './App.css';
import { Route, Routes } from "react-router-dom";
import IntroPage from './pages/IntroPage';
import Vis1 from './pages/Vis1';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/vis1" element={<Vis1 />} />

      </Routes>
    </div>
  );
}

export default App;
