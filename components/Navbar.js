import Link from 'next/link'

export default () =>  (
  <nav>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <style jsx>{`
      nav {
        text-align: center;
      }
      a {
        margin: 0 10px;
      }
    `}</style>
  </nav>
)
