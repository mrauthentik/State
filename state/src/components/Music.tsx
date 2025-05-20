import React, { useEffect, useRef} from "react";
import bgMusic from "../assets/bach.mp3"

export const BackgroundMusic: React.FC = () =>{
 const audioRef = useRef<HTMLAudioElement | null>(null)

 useEffect(()=>{
    const playAudio = () => {
        if(audioRef.current){
            audioRef.current.play().catch((err)=>{
                console.log("Autoplay prevented:", err.message)
            })
        }
    }
    playAudio()
 }, [])

 return(
    <div>
       <audio ref={audioRef} src={bgMusic} loop />  
       <button onClick={()=> audioRef.current?.play()}> Play Music</button> 
    </div>
 )
}