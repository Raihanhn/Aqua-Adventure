import React from 'react'
import img1 from "../../src/assets/f1.jpg"
import img2 from "../../src/assets/f2.jpg"
import img3 from "../../src/assets/f3.jpg"

const About = () => {
  return (
    <div className="about">
        
            <div className="box">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>

    </div>
  )
}

export default About