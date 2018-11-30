import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container';

const AdvancedPackageRework = () => (
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
      <section>
        <h2>Calibration</h2>
        <p>To ensure the APR-5000 is working to its maximum efficiency and that the correct temperatures are being achieved, it is recommended the APR-5000 is calibrated annually. CKe can register the APR-5000 and will let you know when the calibration is due, and arrange for it to be carried out at a time convenient to you.</p>
      </section>
      <section>
        <h2>Repairs</h2>
        <p>If the APR-5000 is not working for any reason, we can arrange for one of our engineers to visit your facility to diagnose and repair your system. CKe has access to all spares and can advise on all repairs.</p>
      </section>
      <section>
        <h2>Accessories</h2>
        <p>CKe can supply all spares / accessories, ie heating or vacuum nozzles, and advice on any of your rework requirements.</p>
      </section>
    </Container>
  </Layout>
)

export default AdvancedPackageRework
