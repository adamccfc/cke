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
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#222222',
            textDecoration: 'none',
            padding: '10px',
            border: '2px solid #222222'
          }}
        >
          {siteTitle}
        </Link>
      </div>
    </div>
  </div>
)

export default Header
