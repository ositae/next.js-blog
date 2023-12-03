import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"; // used to link between sites
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Osita's Software Engineering Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to my engineering blog!</h1>

        <Image src="/image.png" alt="image" width="400" height="400" />

        <p className={styles.description}>
          Get started by reading about my blog!
        </p>

        <div className={styles.grid}>
          <Link href="/posts/first-post" className={styles.card}>
            <h3>First Blog &rarr;</h3>
            <p>Follow my software engineering blog</p>
          </Link>

          <Link href="/posts/second-post" className={styles.card}>
            <h3> Second Blog &rarr;</h3>
            <p>Learn FullStack Development with Relational Databases</p>
          </Link>

          <Link href="/posts/third-post" className={styles.card}>
            <h3>Third Blog &rarr;</h3>
            <p>Learn React and MongoDB</p>
          </Link>

          <Link href="/posts/fourth-post" className={styles.card}>
            <h3> Fourth Blog &rarr;</h3>
            <p> I am a truck driving, software engineer. How cool is that!</p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
