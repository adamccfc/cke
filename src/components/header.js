import React from 'react'
import { Link } from 'gatsby'
import Container from './container';

const Header = ({ siteTitle }) => (
  <div
    style={{
      paddingTop: 20
    }}
  >
    <Container>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          color: '#1072BD',
          textDecoration: 'none',
          padding: '10px',
          border: '3px solid #222222',
          fontWeight: '700',
          fontSize: '2em'
        }}
      >
        {siteTitle}
      </Link>
    </Container>
  </div>
)

export default Header
