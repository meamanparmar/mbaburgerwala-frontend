import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"
const Menu = () => {

  const addToCartHandler=(itemnum)=>{

  }


  return (
    <section id='menu' >

      <h1>MENU</h1>
      <div>
        <MenuCard
         itemnum={1} 
         burgerSrc={burger1}
         price={200}
         title="cheese Burger"
         handler={addToCartHandler} 
         delay={.1}
        />
           <MenuCard
         itemnum={2} 
         burgerSrc={burger2}
         price={300}
         title="Veg cheese Burger"
         handler={addToCartHandler} 
         delay={.5}
        />
           <MenuCard
         itemnum={3} 
         burgerSrc={burger3}
         price={400}
         title="cheese Burger and fries"
         handler={addToCartHandler} 
         delay={.8}
        />
       
      </div>

    </section>
  )
}

export default Menu
