/** @jsx jsx */
import { jsx } from "theme-ui"
/* eslint-disable no-unused-vars */
import * as React from "react"
/* eslint-enable no-unused-vars */
import { useStaticQuery, graphql, Link } from "gatsby"
import { ReactNode } from "react"
import { Script } from "gatsby"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"
import Scroll from "../Scroll"
import ScrollDown from "../ScrollDown"
import Header from "../Header"
import Logo from "../Logo"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Theme from "../Theme"
import Search from "../Search"
import { SiGnuprivacyguard } from "react-icons/si"
import { motion } from "framer-motion"

import "../../assets/scss/style.scss"

const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

interface LayoutProps {
  children: ReactNode
  className: string
}

const Layout = ({ className, children }: LayoutProps) => {
  const { siteSearchIndex } = useStaticQuery(query)
  console.log(getCookieConsentValue())
  getCookieConsentValue("gatsby-gdpr-google-analytics")
  return (
    <>
      <Script>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap Index"
          href="/static/sitemap.xml"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap Pages"
          href="/static/sitemap-pages.xml"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap Posts"
          href="/static/sitemap-posts.xml"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap Tags"
          href="/static/sitemap-tags.xml"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap Categories"
          href="/static/sitemap-categories.xml"
        />
      </Script>
      <div
        sx={{
          display: "grid",
          minHeight: "100vh",
          gridTemplateAreas: [
            '"header" "nav" "main" "ads" "footer"',
            '"header header header" "nav main ads" "footer footer footer"',
          ],
          gridTemplateColumns: ["1fr", "64px 1fr 64px"],
          gridTemplateRows: [
            "min-content min-content 1fr min-content min-content",
            "min-content 1fr min-content",
          ],
        }}
      >
        <div
          sx={{
            gridArea: "header",
          }}
        >
          <Header>
            <Logo />
            <div sx={layoutStyle.nav}>
              <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
                <Search searchIndex={siteSearchIndex.index} />
              </div>
              <Navigation />
            </div>
            <div sx={layoutStyle.appearance}>
              <Search searchIndex={siteSearchIndex.index} />
              <Theme />
            </div>
          </Header>
        </div>
        <div
          sx={{
            gridArea: "main",
          }}
        >
          <motion.main
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
            className={"container " + className}
          >
            {children}
          </motion.main>
          <ScrollDown
            direction="down"
            to={205}
            showAbove={1500}
            css="position: fixed; right: 1em; top: 4.5em;"
          />
          <Scroll
            showBelow={1500}
            css="position: fixed; right: 1em; bottom: 4em;"
          />
        </div>
        <div
          sx={{
            gridArea: "nav",
          }}
        ></div>
        <div
          sx={{
            gridArea: "ads",
          }}
        ></div>
        <div
          sx={{
            gridArea: "footer",
          }}
        >
          <Footer />
        </div>
        <CookieConsent
          enableDeclineButton
          flipButtons
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          ariaAcceptLabel="Accept Cookies"
          ariaDeclineLabel="Decline Cookies"
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: "linear-gradient(to right, transparent, #171717)",
            textShadow: "2px 2px black",
          }}
          buttonStyle={{
            background:
              "radial-gradient(circle at top right, #222, transparent)",
            color: "white",
            fontWeight: "bolder",
            borderRadius: "3px",
            border: "1px black",
            textShadow: "2px 2px black",
          }}
        >
          Bibwoe uses cookies for a better user experience.{" "}
          <span
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginLeft: "20px",
            }}
          >
            <span className="icon -lock">
              <SiGnuprivacyguard />
            </span>{" "}
            <Link to="/privacy" alt="Privacy Page">
              Privacy Page
            </Link>
          </span>
        </CookieConsent>
      </div>
    </>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
