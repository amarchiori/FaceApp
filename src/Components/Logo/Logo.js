import React from "react";
import Tilt from 'react-parallax-tilt';
import faceicon from './icons8-face-96.png'
import 'tachyons';
import './Logo.css'


const Logo = () => {
    return (
        <div className="ma4 mt0 br-100">
            <Tilt className="parallax-effect-glare-scale" glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                <div className="inner-element">
                    <img alt='face icon by Icons8' src={faceicon}></img>
                </div>
            </Tilt>`
        </div>
    )
}

export default Logo;