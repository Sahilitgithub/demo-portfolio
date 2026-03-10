import React, { useState } from "react";
import { freequentlyAskQuestion } from "./ApiDatas";
import AskQuestion from "./AskQuestion";
import { motion } from "framer-motion";
import { container, textAnimate } from "./Animation";
const FreequentlyQues = () => {
  const [data, setData] = useState(freequentlyAskQuestion);
  return (
    <div className="freeAskQues_area">
      <div className="freeAskQues_box">
        <motion.h1
          variants={textAnimate}
          initial="offscreen"
          whileInView="onscreen"
          className="h1_center"
        >
          Freequently Ask Questions
        </motion.h1>
        {data.map((elem) => {
          let { id } = elem;
          return <motion.div variants={container} initial="hidden" whileInView="visible"> <AskQuestion key={id} {...elem} /> </motion.div>;
        })}
      </div>
    </div>
  );
};

export default FreequentlyQues;
