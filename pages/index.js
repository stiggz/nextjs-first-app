import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My first react / next.js app</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My first <a href="https://nextjs.org">next.js</a> app
        </h1>

        <p className={styles.description}>
          Step one - sign in to stackblitz.com
        </p>

        <p className={styles.description}>
          Step two - edit the main page{' '}
          <code className={styles.code}>pages/index.js</code> and view all pages
        </p>

        <p className={styles.description}>
          Step three - save changes, commit changes to git and then view in
          <a href="https://vercel.com/stiggz/nextjs-first-app"> vercel.com </a>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Creating new files &rarr;</h3>
            <p>
              Simply add files to the PAGES root directory with simple syntax
              like the about.js page I added to the PAGES directory - abouts
              route is automagically set to /about
            </p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created by&nbsp;<b>stiggz</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
