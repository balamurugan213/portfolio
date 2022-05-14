import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

export const BirdsBackground = (props) => {
const [vantaEffect, setVantaEffect] = useState(0);
const vantaRef = useRef(null);

useEffect(() => {
    if (!vantaEffect) {
    setVantaEffect(
        BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xffffff,
        // blue one
        color1: 0x507270,
        color2: 0x980fbe,
        // bright
        // color1: 0x0,
        // color2: 0xff9500,
        // 
        // color1: 0x878a8c,
        // color2: 0x73ff,
        colorMode: "variance",
        speedLimit: 4.00,
        separation: 40.00,
        alignment: 70.00,
        cohesion: 30.00
        })
    );
    }
    return () => {
    if (vantaEffect) vantaEffect.destroy();
    };
}, [vantaEffect]);
return (
  
  <div  style={{height:'100vh',width:'100%',padding:'0px',margin:'0px'}} ref={vantaRef}>
     
     {/* <VersionTextTwo>

</VersionTextTwo>
<HeaderTitle></HeaderTitle> */}
       {props.children}
    </div>
);
};