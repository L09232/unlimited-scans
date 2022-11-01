import '../styles/globals.css'
import Layout from '../components/Layout'
import '../styles/nav.css'
import '../styles/footer.css'
import Head from 'next/head'
import '../styles/Container.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <Script src="https://kit.fontawesome.com/c9e6235f1b.js" crossorigin="anonymous"></Script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
