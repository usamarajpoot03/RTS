import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RTS</title>
        <meta name='description' content='Resource training system' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to RTS!</h1>

        <p className={styles.description}>Resource Training System</p>

        <div className={styles.grid}>
          <h2 className={styles.card}>
            <Link href='/users'>
              <a>Users &rarr;</a>
            </Link>
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
