import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials.jsx";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { motion, useScroll } from "framer-motion";


const App = () => {
  let { scrollYProgress } = useScroll();

  return (
    <BrowserRouter>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
