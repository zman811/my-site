import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="chat">
              <button>Chat Room</button>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Testing website</h1>
      <h3>
        This is a site made for testing diffrent tech and ways of doing things.
        Each page from here is set around a diffrent technique or technogoly
      </h3>
    </div>
  );
}
