import Head from 'next/head'
import Link from 'next/link'
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
            <Link href="chat">
            <button>Test</button>
            </Link>
            {/* want to have a page to chat room using websocket */}
          </li>
        </ul>
      </nav>
    Hello world

    </div>
  )
}
