import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
} from "@mui/icons-material/";
import { Tilt } from "react-tilt";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { container, textAnimate, serviceBoxAnimate } from "./Animation";
const About = () => {
  return (
    <section>
      <div className="about_area">
          <Tilt
            className="col profile"
          >
            <img
              src="./images/Sahil-SEO-Expert _(2).JPG"
              alt="Search engine optimization (SEO) provided by man"
            />
          </Tilt>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="col content"
        >
          <motion.h1
            variants={textAnimate}
            initial="offscreen"
            whileInView="onscreen"
          >
            <span className="title">A</span>bout
          </motion.h1>
          <p>
            Greetings All! I am a highly skilled web developer and SEO expert
            with over 5 years of experience specializing in search engine
            optimization. My primary objective is to deliver genuine value to my
            clients, ensuring they derive maximum benefits from search engines.
            <hr />
            <br />
            To keep my clients well-informed and engaged, we provide regular SEO
            reports based on weekly and monthly activities. These reports serve
            as comprehensive updates on the progress and performance of their
            websites.
            <hr />
            <br />
            Besides SEO, we have great profound knowledge of web development,
            like HTML, CSS, JavaScript, Reactjs, Nextjs, Php, WordPress, and
            more. With these extensive skills, we are equipped to handle various
            aspects of web development, enabling us to create visually
            appealing, functional, and user-friendly websites.
            <hr />
            <br />
            Don't miss the opportunity to collaborate with talented web
            developer and SEO expert.
          </p>
          <br></br>
          <motion.ul
            variants={serviceBoxAnimate}
            initial="offscreen"
            whileInView="onscreen"
            className="social_media"
          >
            <li>
              <NavLink
                to="https://www.facebook.com/profile.php?id=100070724160769"
                target="_blank"
              >
                <Facebook className="social_icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://twitter.com/Sahilit1" target="_blank">
                <Twitter className="social_icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.linkedin.com/in/sahil-it-171761215"
                target="_blank"
              >
                <LinkedIn className="social_icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/sahilresource/"
                target="_blank"
              >
                <Instagram className="social_icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/Sahilitgithub" target="_blank">
                <GitHub className="social_icon" />
              </NavLink>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
