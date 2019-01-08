import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Container from '../components/container'

const Contact = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact Us | CKe</title>
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
        <form name="contact-form" method="POST" action="/thanks" netlify="true">
          <div className="form__item">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form__item">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="form__item">
            <label>Message:</label>
            <textarea name="message"></textarea>
          </div>
          <button class="button button--primary" type="submit">Send</button>
        </form>
      </Container>
    </div>
  </Layout>
)

export default Contact
