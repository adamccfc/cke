import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Container from '../components/container'

const IndexPage = (props) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Serving Electronic Manufacturing | CKe</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Container>
      <h1>Serving electronic manufacturing</h1>
      <p>We offer a range specialist services within the electronic manufacturing sector.</p>
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
        <h2>Certified agent</h2>
        <p>Being a certified agent allows us to supply you with products from the following companies.</p>
        <div className="gallery">
          <div className="item"><Img fluid={props.data.imageOne.childImageSharp.fluid} /></div>
          <div className="item"><Img fluid={props.data.imageTwo.childImageSharp.fluid} /></div>
          <div className="item"><Img fluid={props.data.imageThree.childImageSharp.fluid} /></div>
          <div className="item"><Img fluid={props.data.imageFour.childImageSharp.fluid} /></div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_noBase64
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "providers/DescoEurope.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "providers/APR-Logo.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "providers/exmel.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "providers/high_torque.png" }) {
      ...fluidImage
    }
  }
`
