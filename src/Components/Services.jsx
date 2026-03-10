import { ServiceDatas } from "./ApiDatas";
import { useState } from "react";
import { Tilt } from "react-tilt";
import Button from "./Button";
import { motion } from "framer-motion";
import { container, textAnimate } from "./Animation";
const Services = () => {
  let [getDatas] = useState(ServiceDatas);
  return (
    <section>
      <div className="services_area">
        <motion.h1
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once: false, amount: 1}}
          variants={textAnimate}
          className="h1_center"
        >
          Services
        </motion.h1>
        <div className="services">
          {getDatas.map((elem) => {
            return (
              <Tilt>
                <motion.div
                  className="col"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div key={elem.id}>
                    <span className="border_line"></span>
                    <div className="box">
                      <h2 className="h2_center">{elem.title}</h2>
                      <p>{elem.description}</p>
                      <Button />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
