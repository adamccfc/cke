import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Page 2 | CKE</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
