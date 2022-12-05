import React from 'react'
import {MdError} from "react-icons/md"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
<section className='notfound' >
    <main>
        <div>
            <MdError/>
            <h1>404</h1>

        </div>
        <p>Page Not found , click below to land on home page</p>
        <Link to="/" >Go to Home</Link>
    </main>
</section>
  )
}

export default NotFound
