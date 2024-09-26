import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Buy from "./Pages/Buy";
import Meat from "./Pages/Meat";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route exact path="/" element={<LandingPage />} />
     <Route exact path="/about" element={<About />} />
     <Route exact path="/buy" element={<Buy />} />
     <Route exact path="/meat" element={<Meat />} />
     <Route exact path="/services" element={<Services />} />
     <Route exact path="/contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
