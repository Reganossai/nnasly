import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import LivestockPage from "./components/LivestockPage";
import EggsPage from "./components/EggsPage";
import MeatPage from "./components/MeatPage";
import  {
  ContactPage,
  ShopPage,
  AboutPage,
} from "./components/Landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route path="/livestock" element={<LivestockPage />} />
          <Route path="/meat" element={<MeatPage />} />
          <Route path="/eggs" element={<EggsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
