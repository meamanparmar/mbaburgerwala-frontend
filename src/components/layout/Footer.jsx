import React from 'react'
import {AiFillInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
const Footer = () => {
  return <footer>
    <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you the best taste possible</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All right reserved @mbaburgerwala</strong>

    </div>
    <aside>
        <h4>Follow us</h4>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube/>
        </a>
        <a href="https://instagram.com " target="_blank" rel="noopener noreferrer">
            <AiFillInstagram/>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook/>
        </a>
    </aside>
  </footer>
}

export default Footer
