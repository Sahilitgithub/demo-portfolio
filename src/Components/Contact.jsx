import { useState } from "react";
import { motion } from "framer-motion";
import { container } from "./Animation";

const Contact = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    massege: "",
  });

  const inputHandler = (event) => {
    let { name, value } = event.target;
    setForm((currentElem) => {
      return {
        ...currentElem,
        [name]: value,
      };
    });
  };

  return (
    <section className="contact_area">
      <motion.h1
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="h1_center"
      >
        Contact Us
      </motion.h1>
      <motion.div
        variants={container}
        initial={"hidden"}
        whileInView={"visible"}
        className="form_box"
      >
        <form action="https://formspree.io/f/xjvqbylo" method="POST">
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={form.name}
              name="name"
              onChange={inputHandler}
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="email"
              required="required"
              name="email"
              value={form.email}
              onChange={inputHandler}
            />
            <span>Email Address</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={form.subject}
              name="subject"
              onChange={inputHandler}
            />
            <span>Add Subject</span>
            <i></i>
          </div>
          <div className="inputBox">
            <textarea
              required="required"
              value={form.message}
              name="message"
              onChange={inputHandler}
            />
            <span>Message</span>
            <i></i>
          </div>
          <button type="submit" className="submitBtn">
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
