import React from 'react'



import video1 from "../../src/assets/video/v1.mp4"
import video2 from "../../src/assets/video/v2.mp4"
import video3 from "../../src/assets/video/v3.mp4"

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
                <a href="#"><AiFillFacebook className='icon' /></a>
                <a href="#"><AiFillTwitterSquare className='icon' /></a>
                <a href="#"><AiFillInstagram className='icon' /></a>
            </div>
        </div>

        <div className="video-container">
        <video src={video1} muted autoPlay loop type="video/mp4" />
        </div>


    </div>
  )
}

export default Home