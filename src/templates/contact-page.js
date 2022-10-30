/** @jsx jsx */
import { jsx } from "theme-ui"
/* eslint-disable no-unused-vars */
import * as React from "react"
/* eslint-enable no-unused-vars */
import { Input, Button, Textarea } from "theme-ui"
import { graphql, Script } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { NetlifyForm, Honeypot, Recaptcha } from "react-netlify-forms"
import { RiSendPlane2Line } from "react-icons/ri"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stars from "../components/Stars"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        path
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== "undefined" ? window.location.href : ""
  const Image = frontmatter.featuredImage
    ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const SITE_RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <Script>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={Image} />
        <meta name="twitter:image:alt" content={frontmatter.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta
          property="twitter:description"
          content={frontmatter.description}
        />
      </Script>
      <div className="wrapper">
        <Stars />
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
          </section>
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="cover"
            />
          ) : (
            ""
          )}
        </header>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <NetlifyForm
          method="POST"
          name="contact"
          className="contact-form"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          enableRecaptcha
          onSuccess={(response, context) => {
            console.log("Successfully sent form data to Netlify Server")
            context.formRef.current.reset()
          }}
        >
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              <Recaptcha siteKey={SITE_RECAPTCHA_KEY} theme="dark" invisible />
              <p
                style={{
                  display: "hidden",
                }}
              ></p>
              <div>
                <div>
                  <div>
                    <div>
                      <label htmlFor="name">Name</label>
                      <p>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="off"
                          required
                          placeholder="Enter your Name here."
                          onChange={handleChange}
                        />
                      </p>
                    </div>

                    <div>
                      <label htmlFor="email">Email address</label>
                      <p>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="off"
                          required
                          placeholder="Enter your Email here."
                          onChange={handleChange}
                        />
                      </p>
                    </div>

                    <div>
                      <label htmlFor="phone">Phone</label>
                      <p>
                        <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="off"
                          required
                          placeholder="Enter Phone Number here."
                          onChange={handleChange}
                        />
                      </p>
                    </div>

                    <div>
                      <label htmlFor="subject">Subject</label>
                      <p>
                        <Input
                          type="text"
                          name="subject"
                          id="subject"
                          autoComplete="on"
                          required
                          placeholder="Enter your Subject here."
                          onChange={handleChange}
                        />
                      </p>
                    </div>

                    <div>
                      <label htmlFor="text">Message</label>
                      <p>
                        <Textarea
                          rows={5}
                          name="text"
                          required
                          placeholder="Enter your message here."
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  {success && (
                    <p className="text-rose-500">Thanks for Subscribing!</p>
                  )}
                  {error && (
                    <p className="text-rose-500">
                      Sorry, we could not reach our servers.
                    </p>
                  )}
                  <Button type="submit" className="button g-recaptcha">
                    Send Message{" "}
                    <span className="icon -right">
                      <RiSendPlane2Line />
                    </span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </NetlifyForm>
      </div>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      color: "#777",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      color: "#777",
      outline: "none",
    },
  },
}
