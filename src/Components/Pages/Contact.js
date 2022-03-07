import React from 'react'
import './Contact.css'
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate=useNavigate();
  const buttonHandler=()=>{
    navigate('/about')
    }
  return (
    <div>
        <h1> Contact us</h1>
         <form >
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="enter your name"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
            ></input>

            <textarea className='textarea' type='text' placeholder='Enter your message'/>
            <input type="submit" onClick={buttonHandler} value="Submit"></input>
          </form>
    </div>
  )
}

export default Contact