import React from 'react'

const Container = ( {children} ) => (
  <div style={{
    maxWidth: 700,
    margin: '0 auto',
    padding: '20px'
  }}>
    {children}
  </div>
)

export default Container
