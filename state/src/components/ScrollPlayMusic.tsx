import React, { useEffect, useRef, useState } from "react";
import bgMusic from "../assets/bach.mp3"; // adjust path

const ScrollPlayMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayed && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setHasPlayed(true); // Prevent repeated playing
            window.removeEventListener("scroll", handleScroll); // Cleanup
          })
          .catch((err) => {
            console.log("Playback failed:", err.message);
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPlayed]);

  return <audio ref={audioRef} src={bgMusic} loop />;
};

export default ScrollPlayMusic;
