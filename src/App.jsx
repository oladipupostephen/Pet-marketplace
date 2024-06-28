import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
