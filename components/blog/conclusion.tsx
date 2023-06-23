'use client'

import "../../styles/globals.css";
import {useEffect, useState} from "react";
import styles from "../../styles/components/blog/blog.module.css";
import { ChevronRightIcon } from '@heroicons/react/outline';
import {log} from "next/dist/server/typescript/utils";

const Conclusion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTextClick = () => {
        setIsOpen(!isOpen);
    };

const setAnimation = () =>{

    if(document.querySelector('#anim').classList.contains(`${styles["Popup-module--button-first"]}`)){

         document.querySelector('#anim').classList.remove(`${styles["Popup-module--button-first"]}`)
         document.querySelector('#anim').classList.add(`${styles["Popup-module--button-second"]}`)
        return
    }
    document.querySelector('#anim').classList.add(`${styles["Popup-module--button-first"]}`)
    document.querySelector('#anim').classList.remove(`${styles["Popup-module--button-second"]}`)
    return


}
// // useEffect(()=>{
// //     var myButton = document.getElementById("anim");
// //     myButton.style.transform = translateX("-100px");
// },[])



    return (
        <>

            <hr className="w-full mt-8 "/>

            <div className={`${styles["Popup-module--button--72f64"]} w-full flex row relative mt-3`}>
                   <button onClick={setAnimation} className={`${styles["Popup-module--button"]} mr-1`}>!</button>
                   <div className="relative">
                       <div id={"anim"} className={`${styles["Popup-module--button-first"]}`}>testiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiing</div>
                   </div>
            </div>


        </>
    );
}

export default Conclusion;