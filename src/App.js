import "./App.css";
import { Route, Routes } from "react-router-dom/dist";
import { BrowserRouter } from "react-router-dom/dist";
import Header from "./components/header/Header";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
