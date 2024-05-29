import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";

// import { motion } from "framer-motion"

import "./App.css";
import Footer from "./Components/Footer";
import CTA_Banner from "./Components/CTA_Banner";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      {/* <hr></hr> */}
      <Projects />
      <CTA_Banner />
      {/* <hr></hr> */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
