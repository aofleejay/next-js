import Head from 'next/head'
import Navbar from '../components/Navbar'
import bulma from 'bulma/css/bulma.css'

export default ({ children }) => (
  <div>
    <Head>
      <title>React/Redux Testing Tutorial</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <style dangerouslySetInnerHTML={{ __html: bulma }} />
    { children }
  </div>
)