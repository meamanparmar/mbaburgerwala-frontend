import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founderaman.webp";
const Founder = () => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={300} width={200} />
        <h3>Aman Parmar</h3>
        <p>
          Hey , Everyone I am Aman Parmar , the founder of MBA burger wala
          <br />
          Our aim is to take you through the most tastiest burger
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
