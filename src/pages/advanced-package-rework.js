import React from 'react'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Container from '../components/container';

const AdvancedPackageRework = (props) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>APR - Advanced Package Rework | CKe</title>
    </Helmet>
    <Container>
      <section>
        <div className="tagline">APR</div>
        <h1>Advanced Package Rework</h1>
        <p>CKe offer a range of services related to Advanced Package Rework systems.</p>
      </section>
    </Container>
    <div style={{
      backgroundColor: '#FAFAFB',
      padding: '20px 0'
    }}>
      <Container>
        <section css={{
          display: 'grid',
          gridGap: '50px',
          gridTemplateColumns: '1fr 2fr'
        }}>
          <div>
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </div>
          <div>
            <h2>Calibration</h2>
            <p>To ensure the APR-5000 is working to its maximum efficiency and that the correct temperatures are being achieved, it is recommended the APR-5000 is calibrated annually. CKe can register the APR-5000 and will let you know when the calibration is due, and arrange for it to be carried out at a time convenient to you.</p>
          </div>
        </section>
      </Container>
    </div>
    <Container>
      <section css={{
        display: 'grid',
        gridGap: '50px',
        gridTemplateColumns: '2fr 1fr',
        padding: '20px 0'
      }}>
        <div>
          <h2>Repairs</h2>
          <p>If the APR-5000 is not working for any reason, we can arrange for one of our engineers to visit your facility to diagnose and repair your system. CKe has access to all spares and can advise on all repairs.</p>
        </div>
        <div>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
    </Container>
    <div style={{
      backgroundColor: '#FAFAFB',
      padding: '20px 0'
    }}>
      <Container>
        <section css={{
          display: 'grid',
          gridGap: '50px',
          gridTemplateColumns: '1fr 2fr'
        }}>
          <div>
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          </div>
          <div>
            <h2>Accessories</h2>
            <p>CKe can supply all spares / accessories, ie heating or vacuum nozzles, and advice on any of your rework requirements.</p>
          </div>
        </section>
      </Container>
    </div>
  </Layout>
)

export default AdvancedPackageRework

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "icons/png/012-industrial.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "icons/png/015-maintenance.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "icons/png/016-mandatory.png" }) {
      ...fluidImage
    }
  }
`
