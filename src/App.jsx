import NavBar from "./Components/NavBar-components/NavBar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

// import { motion } from "framer-motion"

import "./App.css";
import Footer from "./Components/Footer";
import CTA_Banner from "./Components/CTA_Banner";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <Projects />
      <CTA_Banner />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
