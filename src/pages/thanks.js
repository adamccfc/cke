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
      <h1>Thank you!</h1>
    </Container>
  </Layout>
);

export default Thanks;
