import React from "react";
import img from './assets/logo/uche.jpg'
export const Hero:React.FC = ()=>{
  return(
    <div className="hero-section">
        <div className="text-container">
            <p><span>Hello</span> my name is <b>Uche</b> </p>
            <p>Am a <span>Front-end</span> Developer</p>
             <p className="mini">A Pixel Perfect Front-end Engineer</p>
             <p className="description">
                I'm creative designer based in Nigeria, 
                and I'm very passionate and dedicated to my work.
             </p>

                <div className="sub">
                     <button>About Me</button>

                </div>

            
        </div>
        <div className="img-container">
            <img src={img} alt="" />
        </div>
    </div>
  )
}