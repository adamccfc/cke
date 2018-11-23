import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'

const Contact = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact Us | CKe</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Container>
      <div className="tagline">Contact</div>
      <h1>Get in touch</h1>
      <p>If you would like to get in touch with regards to any of our services or products fill out the form below and we will get in touch.</p>
    </Container>
    <div style={{
      backgroundColor: '#FAFAFB',
      padding: '20px 0'
    }}>
      <Container>
        <form
          name="contact-form"
          method="post"
          action="/thanks"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
          </div>
          <button>Send</button>
        </form>
      </Container>
    </div>
  </Layout>
)

export default Contact
