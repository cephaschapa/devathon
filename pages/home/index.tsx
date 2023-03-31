import React, {useState} from "react";
import styles from "./index.module.css";
// import MovingText from 'react-moving-text';
import Modal from "@/components/Modal/Modal";


const Home = () => {
    const [hasRead, setHasRead] =  useState<boolean>(false);
    const data = [
        {
            id: "1",
            type: "fix",
            notes: "We fixed an issue"
        }
    ]
    return (
        <>
            <Modal title="Test" date="2023-03-31" data={data}/>
            <main className={styles.main}>
            <div>
                Welcome to &nbsp;<span className='text-blue-600 text-opacity '>{"<DevaThon/>"}</span>
            </div>
            
            </main>
        </>
    )
}

export default Home;