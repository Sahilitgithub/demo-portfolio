import Typewriters from "typewriter-effect";
import EarthCanvas from "./threejsmodel/canvas/Earth";
import StarsCanvas from "./threejsmodel/canvas/Stars";
import Button from "./Button";
import Massege from "./Massege";
import { motion } from "framer-motion";
import { textAnimate, container } from "./Animation";
const HeroSection = () => {
  return (
    <main className="hero_area">
      <div
        className="intro_text"
      >
        <motion.h1 variants={textAnimate} initial="offscreen" whileInView="onscreen">
          Hello, <br></br>I'm a <span className="firstName">Sahil</span>
          <span className="lastName">
            <Typewriters
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["I am a Web Developer.", "I am an SEO Expert."],
              }}
            />
          </span>
        </motion.h1>
        <motion.p variants={textAnimate} initial="offscreen" whileInView='onscreen'>
          Are you searching for a talented web developer and SEO expert who can
          take your online presence to next levels? I am sitting here for
          helping you. Get in touch now and take your digital presence to new
          heights!
        </motion.p>
        <br></br>
        <motion.div variants={container} initial="hidden" whileInView="visible">
          <Button />
        </motion.div>
      </div>
      <div className="intro_3d">
        <EarthCanvas />
        <StarsCanvas />
      </div>
      <Massege />
    </main>
  );
};

export default HeroSection;
