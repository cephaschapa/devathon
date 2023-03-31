import React, { FC, HTMLAttributes, useState } from "react";
import styles from "./Modal.module.css";
import { SlLink } from "react-icons/sl";

interface Props {
    title: string,
    date: string,
    data: object []
}

const Modal:FC<Props> = ({title, date, data}) => {
    const [hasLoaded, setHasLoaded] = useState<boolean>(true);
   
    const readNotes = (e: HTMLAttributes<HTMLButtonElement>) => {
        setHasLoaded(false)
    }
    return (
        <div className={`${styles.root} ${hasLoaded ? "scale-100":"scale-0"}`}>
            <div className={styles.messageBox}>
                <div className={styles.header}>
                    <p className="text-blue-600">March 31, 2023</p>
                    <p className="text-xl">Devathon exposes developers, collaboraters to a wider scope of hackathons. </p>
                    <p className="text-gray-600">Web Release</p>
                    <button className="w-40 rounded-3xl flex items-center justify-between space-x-2  p-3 text-white bg-blue-600 font-normal "><span>Change log</span> <SlLink/></button>
                </div>
                <div className={styles.body}>
                    <div className={styles.newFeatures}>
                        <h1 className="font-bold text-gray-600">New Features </h1>
                        <p className="font-bold text-gray-600">Added i8n internationalization and translation</p>
                        <p>We have made it easy for users in different countries to get most out our platform. Our goal is to have as much engagment as possible this means eliminating language barriers. <span className="text-blue-600">Lean more</span></p>
                    </div>
                    <div className={styles.bugFixes}>
                        <h1 className="font-bold text-gray-600">Bug Fixes & improvements</h1>
                       <ul className="space-y-2 py-2 list-disc px-5">
                            <li>Object would move to the top of the nav when selecting a menu item.</li>
                            <li>Previously only images on the card would be clickable</li>
                            <li>When registering a new user the page would return null</li>
                            <li>Hover state for menu items had a lower opacity</li>
                       </ul>
                    </div>
                </div>
                <div className="border-t">
                    <p className="font-bold text-gray-600">Some features may not be available in all regions or browsers. For information on content of Devathon software updates please visit this website</p>
                    <p className="text-blue-600 underline ">https://www.devathon.io/HTB20231a</p>
                </div>
                <div className="py-4">
                    <button onClick={(e:any)=>readNotes(e)} className="w-40 rounded-3xl flex items-center justify-center space-x-2  p-3 text-white bg-blue-600 font-normal ">
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;