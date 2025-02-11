import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitStats from "./components/GitStats";
import Footer from "./components/Footer";
import { HashRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
   <Router basename="/" >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitStats/>
      <Contact />
      <Footer/>
      </Router>
      </>
  );
 
}

export default App;
