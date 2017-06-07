import Head from 'next/head'
import Navbar from '../components/Navbar'

export default ({ children }) => (
  <div>
    <Head>
      <title>React/Redux Testing Tutorial</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    { children }
  </div>
)