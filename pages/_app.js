import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cat Wiki</title>
        <meta name="description" content="Devchallenges Cat Wiki solution" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp