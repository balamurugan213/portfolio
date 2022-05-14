import LinkBox from "./linkBox";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useState } from "react";

const MainText = () => {

    const contentArr=["<span class='oswald'> Programming</span>","<span class='knewave'>Creating Origami</span>","<span class='orbitron'>Developing Apps</span>","<span class='monoton'>Designing  UI/UX </span>" ];
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: contentArr, // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 200,
            backSpeed: 200,
            backDelay: 100,
            contentType :'html',
            // smartBackspace: true,
            loop: true,
            showCursor: false,
            // cursorChar: "!"
            
        });


        
         // Destropying
        return () => {
            typed.destroy();

        };
    }, []);

    return ( 
        <div className="mainText" >
            <h2>Hi, I am <span className='light'>Balamurugan213 </span>  </h2>
            <h1>I Love <span className=''><span ref={el}></span></span> </h1>
        <LinkBox></LinkBox>

        </div>
    );
}

export default MainText;