import React from 'react'
import { Link } from 'react-router-dom'
import me from "../../assets/founderaman.webp";

import {RiFindReplaceLine} from "react-icons/ri"
const About = () => {
  return (
  <section className='about' >
    <main>
        <h1>About Us</h1>
        <article>
            <h4>MBA Burger Wala</h4>
            <p>We are MBA Burger Wala. The place where you can find most tastiest burger ever.</p>
            <p>Explore the diverse types of food and burgers . click below to see</p>
            <Link to="/" >
                <RiFindReplaceLine/>
            </Link>
        </article>
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Aman</h3>
                </div>
                <p>I am Aman , the founder of MBA burger wala . Affiliated to best taste...</p>
            </article>
        </div>
    </main>
  </section>
  )
}

export default About
