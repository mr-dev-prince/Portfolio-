import React, { useEffect, useRef } from "react";
import music1 from "../../assets/bgMusic.ogg";
import music2 from "../../assets/bgMusic.mp3";

const BackgroundMusic = ({ playMusic }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (playMusic) {
      audio.play().catch((error) => {
        console.log("Error playing music:", error);
      });
    }
  }, [playMusic]);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src={music1} type="audio/mpeg" />
      <source src={music2} type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
