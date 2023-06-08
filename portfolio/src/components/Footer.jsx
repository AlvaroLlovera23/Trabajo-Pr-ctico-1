import React from 'react'
import {AiFillGithub, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div class="contain">
      <h4>Redes: </h4>
        <a href="https://github.com/AlvaroLlovera23" class="myLink" target="blank">
            <AiFillGithub/> 
            Mi github 
        </a>
        <a href="https://www.facebook.com/alvaro.llovera" class="myLink" target="blank">
            <AiFillFacebook/>
            Mi facebook
        </a>
        <a href="https://www.instagram.com/alvarollovera16/" class="myLink" target="blank">
            <AiFillInstagram/>
            Mi instagram
        </a>
    </div>
  )
}

export default Footer
