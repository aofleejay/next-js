import Link from 'next/link'

export default () =>  (
  <nav className="nav has-shadow">
    <div className="nav-left">
      <Link href="/">
        <a className="nav-item">
          React/Redux Testing Guide
        </a>
      </Link>
    </div>

    <div className="nav-right nav-menu">
      <a className="nav-item is-hidden-mobile" href="https://github.com/aofleejay" target="_blank">
        <span className="icon">
          <i className="fa fa-github"></i>
        </span>
      </a>
    </div>

    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div className="nav-right nav-menu is-hidden-tablet">
      <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
      <a className="nav-item is-tab is-hidden-tablet">Features</a>
      <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
      <a className="nav-item is-tab is-hidden-tablet">About</a>
      <a className="nav-item is-tab is-hidden-tablet">Log out</a>
    </div>
  </nav>
)
