import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <div className="container">
        <div className="content">
            <h1>underwater</h1>
            <h2>adventure</h2>
            <a href="#"><button>join now</button></a>

            <div className="icons">
                <a href="#"><AiFillFacebook/></a>
                <a href="#"><AiFillTwitterSquare/></a>
                <a href="#"><AiFillInstagram/></a>
            </div>
        </div>
    </div>
  )
}

export default Home