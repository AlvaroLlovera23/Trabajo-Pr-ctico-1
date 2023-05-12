import React from 'react'
import {AiFillGithub, AiFillFacebook} from 'react-icons/ai'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div class="contain">
        <a href="https://github.com/AlvaroLlovera23" class="myLink">
            <AiFillGithub/> 
            Mi github 
        </a>
        <a href="https://www.facebook.com/alvaro.llovera" class="myLink">
            <AiFillFacebook/>
            Mi facebook
        </a>
    </div>
  )
}

export default Footer
