import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container';

const SecondPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>APR - Advanced Package Rework | CKe</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Container>
      <h1>APR - Advanced Package Rework</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
