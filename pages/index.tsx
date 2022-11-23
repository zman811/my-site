import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
            <button>Test</button>
            {/* want to have a page to chat room using websocket */}
          </li>
        </ul>
      </nav>
    Hello world

    </div>
  )
}
