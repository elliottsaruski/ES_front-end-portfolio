import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";

// import { motion } from "framer-motion"

import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <hr></hr>
      <Projects />
      <hr></hr>
      <About />
      <hr></hr>
      <Contact />
      <hr></hr>
      <Footer />
    </main>
  );
}

export default App;
