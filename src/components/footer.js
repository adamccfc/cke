import React from 'react'
import Container from './container';

const Footer = () => (
  <div
    style={{
      backgroundColor: '#1072BD',
      fontSize: '14px'
    }}
  >
    <Container>
      <p style={{
        textAlign: 'right',
        margin: 0
      }}>
        Designed and developed by <a href="http://www.adammorgan.wales">Adam Morgan</a>.
      </p>
    </Container>
  </div>
)

export default Footer
