import Head from 'next/head';
import Image from 'next/image';
import styles from "./index.module.css";

import { SlEnvolope, SlKey } from "react-icons/sl";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <span className='text-blue-600 text-opacity '>{"</DevaThon>"}</span>
      </header>
      <main className={styles.main}>
          <div className={styles.auth}>
            <div className={styles.authHeader}>
                Login to <span className='text-blue-600 text-opacity '>{"</DevaThon>"}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.inputWrapper}>
                  <SlEnvolope className={styles.inputIcon}/>
                  <input className={styles.input} placeholder="Username" value="user1"/>
                </div>
                <div className={styles.inputWrapper}>
                  <SlKey className={styles.inputIcon} />
                  <input className={styles.input} placeholder="Password" value="password1"/>
                </div>
            </div>
            <div className={styles.footer}>
                <Link href="/home">
                  <button className={styles.authBtn}>Login</button>
                </Link>
            </div>
          </div>
      </main>
    </>
  )
}
