import { Tilt } from "react-tilt";
import { useState } from "react";
import { ProjectsApi } from "./ApiDatas.jsx";
import { motion } from "framer-motion";
import { container, textAnimate } from "./Animation";

const Projects = () => {
  let [getDatas, setDatas] = useState(ProjectsApi);
  return (
    <section className="projects_area">
      <motion.h1
        className="h1_center"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 1 }}
        variants={textAnimate}
      >
        See Porjects
      </motion.h1>
      <br></br>
      <div className="porjects">
        {getDatas.map((elem, index) => {
          return (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              key={index}
              title={elem.popupTitle}
            >
              <Tilt className="box">
                <div className="imgBox">
                  <img src={elem.imgSrc} alt={elem.altTag} />
                  <div
                    className="github_link cursor-pointer"
                    onClick={() => window.open(elem.source_code_link, "_blank")}
                  >
                    {elem.btnIcon}
                  </div>
                </div>
                <h2 className="h2_center ">{elem.title}</h2>
                <p>{elem.description}</p>
                {elem.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className={`text-[14px] text-orange-500 ${tag.color}`}
                    >
                      {" "}
                      #{tag.name}{" "}
                    </span>
                  );
                })}
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
