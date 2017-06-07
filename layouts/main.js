import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import bulma from 'bulma/css/bulma.css'

export default ({ children }) => (
  <div>
    <Head>
      <title>React/Redux Testing Guide</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: bulma }} />
    <Navbar />
    <div className="notification">
      <div className="columns">
        <div className="column is-one-quarter is-hidden-mobile">
          <Sidebar />
        </div>
        <div className="column">
          <div className="content">
            { children }
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)