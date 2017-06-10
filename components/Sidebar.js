import Link from 'next/link'

export default () => (
  <aside className="menu">
    <p className="menu-label">
      Component
    </p>
    <ul className="menu-list">
      <li><Link href="/presentational-component"><a>Presentational Component</a></Link></li>
      <li><Link href="/container-component"><a>Container Component</a></Link></li>
      <li><Link href="/snapshot-testing"><a>Snapshot Testing</a></Link></li>
    </ul>
    <p className="menu-label">
      Action
    </p>
    <ul className="menu-list">
      <li><Link href="/action-creator"><a className="is-active">Action Creator</a></Link></li>
      <li><Link href="/asynchronus-action"><a>Asynchronus Action</a></Link></li>
    </ul>
    <p className="menu-label">
      Reducer
    </p>
    <ul className="menu-list">
      <li><Link href="/reducer"><a>Reducer</a></Link></li>
    </ul>
  </aside>
)
