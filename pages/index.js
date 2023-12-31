import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Ninja List</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          corporis sapiente odit, harum corrupti incidunt, nobis voluptas
          nesciunt pariatur ad voluptate! Ea vel ullam alias molestiae deserunt
          odit commodi in.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          corporis sapiente odit, harum corrupti incidunt, nobis voluptas
          nesciunt pariatur ad voluptate! Ea vel ullam alias molestiae deserunt
          odit commodi in.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
