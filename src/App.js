import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route exact path="/" element={<Landingpage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
