import React from 'react'
import { Link } from 'gatsby'
import { RiArrowLeftSLine, RiCheckboxCircleLine } from 'react-icons/ri'
import Seo from '../components/Seo'
import Stars from '../components/Stars'
import Layout from '../components/Layout'

const Thanks = () => (
  <Layout className="thanks-page">
    <div className="blog-beams">
      <Seo title="Thank you" />
      <div
        className="wrapper"
        style={{
          textAlign: 'center',
        }}
      >
        <Stars />
        <RiCheckboxCircleLine
          style={{
            fontSize: '128px',
            color: 'var(--primary-color)',
          }}
        />
        <h1>Got your message</h1>
        <p>Thank you for getting in touch us. We will get back to you shortly.</p>
        <Link to="/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Lets go back to Homepage
        </Link>
      </div>
    </div>
  </Layout>
)

export default Thanks
