import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemnum , burgerSrc,price ,title,handler,delay=0}) => {

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
    <motion.div {...options} transition={{
        delay,
    }}
     className="menuCard">
      <div>Item {itemnum}</div>

      <main>

    <img src={burgerSrc} alt={itemnum} />

    <h5>₹{price}</h5>
    <p>{title}</p>
    <button onClick={()=>handler(itemnum)} >Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
