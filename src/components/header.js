import React from 'react'
import { Link } from 'gatsby'
import Container from './container';

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      paddingTop: 20
    }}
  >
    <Container>
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
    </Container>
  </div>
)

export default Header
