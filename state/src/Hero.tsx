import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import img from './assets/logo/uche.jpg'


export const Hero:React.FC = ()=>{
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(()=>{
    const typed = new Typed(typedRef.current, {
       strings: [
        "A Front-end Developer",
        "A Pixel Perfect Front-end Engineer",
        "A Creative UI Developer",
        "A Passionate React Developer"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true
    })

    return () =>{
      typed.destroy()
    }
  }, [])
  return(
    <div className="hero-section">
        <div className="text-container">
            <p>Hi, I'm <b>Uche</b> </p>
            <p ><span ref={typedRef}></span></p>
             <p className="description">
                I'm creative designer, 
                i can bring your <span>Designs</span> to <span>Life</span> 
             </p>

                <div className="sub">
                     <button>Shoot me a Mail</button>

                </div>

            
        </div>
        <div className="img-container">
            <img src={img} alt="" />
        </div>
    </div>
  )
}