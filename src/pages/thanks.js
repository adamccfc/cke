import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'

const Thanks = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Thanks | CKe</title>
    </Helmet>
    <Container>
      <div className="tagline">Contact</div>
      <h1>Thank you!</h1>
      <p>We will try go get in touch within 48 hours.</p>
    </Container>
  </Layout>
);

export default Thanks;
