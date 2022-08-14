import "./App.css";
import TopNav from "./components/Header/TopNav";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
