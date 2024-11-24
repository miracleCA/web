import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Loyalty from "./pages/Loyalty";
import Warranty from "./pages/Warranty";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import About from "./pages/About";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={ <Home/> } />
          <Route exact path="pricing" element={ <Pricing/> } />
          <Route exact path="loyalty" element={ <Loyalty/> } />
          <Route exact path="warranty" element={ <Warranty/> } />
          <Route exact path="contact" element={ <Contact/> } />
          <Route exact path="booking" element={ <Booking/> } />
          <Route exact path="about" element={ <About/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
