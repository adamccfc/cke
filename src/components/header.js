import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'inline-block',
          color: '#222222',
          textDecoration: 'none',
          padding: '10px',
          border: '3px solid #222222',
          fontWeight: '700'
        }}
      >
        {siteTitle}
      </Link>
      <nav className="main-menu">
        <Link to="/">Home</Link>
        <Link to="/page-2/">Page 2</Link>
      </nav>
    </div>
  </div>
)

export default Header
