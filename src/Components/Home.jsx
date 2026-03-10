import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import FreequentlyQues from "./FreequentlyQues";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <FreequentlyQues/>
      <Contact/>
    </section>
  );
};

export default Home;
