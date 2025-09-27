import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import LivestockPage from "./components/LivestockPage";
import EggsPage from "./components/EggsPage";
import MeatPage from "./components/MeatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route exact path="/" element={<Landingpage />} />
     <Route  path="/livestock" element={<LivestockPage/>} />
      <Route path="/meat" element={<MeatPage />} />
        <Route path="/eggs" element={<EggsPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
