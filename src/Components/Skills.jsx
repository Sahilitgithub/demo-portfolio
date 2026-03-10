import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { container, textAnimate } from "./Animation";
const Skills = () => {
  return (
    <section className="skills_area">
      <motion.h1
        variants={textAnimate}
        initial="offscreen"
        whileInView="onscreen"
        className="h1_center"
      >
        Skills
      </motion.h1>
      <div className="skills">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="web_deveplopment"
        >
          <h2 className="h2_center">Website Development </h2>
          <Tilt className="box">
            <img src="./images/html.png" alt="sahil html" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/css.png" alt="sahil css" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/scss.png" alt="sahil scss" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/bootstrap.png" alt="sahil bootstrap" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/js.png" alt="js" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/tailwincss.png" alt="sahil tailwincss" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/react .png" alt="sahil react" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/vite.svg" alt="sahil vite" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/nextjs.png" alt="sahil nextjs" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/wordpress.png" alt="sahil wordpress" />
          </Tilt>
        </motion.div>
        {/* Search Engine Optimization */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="seo_part"
        >
          <h2 className="h2_center">Search Engine Optimization (SEO)</h2>
          <Tilt className="box">
            <img
              src="./images/seo/search_engine.jpg"
              alt="sahil search engine"
            />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/ahref.jpg" alt="sahil ahref" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/bing_search_engine.jpg" alt="sahil bing" />
          </Tilt>
          <Tilt className="box">
            <img
              src="./images/seo/google_my_business.jpg"
              alt="sahil google my business"
            />
          </Tilt>
          <Tilt className="box">
            <img
              src="./images/seo/google_marketing_platform.jpg"
              alt="sahil google marketing platform"
            />
          </Tilt>
          <Tilt className="box">
            <img
              src="./images/seo/google_search_console.jpg"
              alt="sahil google search console"
            />
          </Tilt>
          <Tilt className="box">
            <img
              src="./images/seo/google_analytics.png"
              alt="sahil google analytics"
            />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/semrush.png" alt="sahil semrush" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/ubersuggest.png" alt="sahil ubersuggest" />
          </Tilt>
          <Tilt className="box">
            <img
              src="./images/seo/YouTube-SEO-Tips.jpg"
              alt="sahil youtube video seo"
            />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/chatgpt.jpg" alt="sahil chatgpt" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/google.png" alt="sahil Google" />
          </Tilt>
          <Tilt className="box">
            <img src="./images/seo/wordpress.png" alt="sahil wordpress" />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
