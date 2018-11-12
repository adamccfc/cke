import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Serving Electronic Manufacturing | CKe</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Container>
      <h1>Serving Electronic Manufacturing</h1>
      <p>CKe offer a range specialist services within the electronic manufacturing sector.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        {/* <Image /> */}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
    <div style={{
      backgroundColor: '#DCECF8',
      padding: '20px 0'
    }}>
      <Container>
        <h2>Certified Agent</h2>
        <p>CKe are a certified agent for the following companies.</p>
        <div className="gallery">
          <div className="item"><Image></Image></div>
          <div className="item"><Image></Image></div>
          <div className="item"><Image></Image></div>
          <div className="item"><Image></Image></div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
