import React from 'react'
import AboutImage from "../assets/about.png"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
      <img src={AboutImage} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
    </div>
  )
}

export default About
