/** @jsx jsx */
import { jsx } from 'theme-ui'
/* eslint-disable no-unused-vars */
import * as React from 'react'
/* eslint-enable no-unused-vars */
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ReactNode } from 'react'
import { Embed, Container } from 'theme-ui'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import Scroll from '../Scroll'
import ScrollDown from '../ScrollDown'
import Header from '../Header'
import Logo from '../Logo'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Search from '../Search'
import Theme from '../Theme'
import { SiGnuprivacyguard } from 'react-icons/si'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('../FramerFeatures').then(res => res.default)

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
  return (
    <>
      <div
        sx={{
          display: 'grid',
          minHeight: '100vh',
          gridTemplateAreas: [
            '"header" "nav" "main" "ads" "footer"',
            '"header header header" "nav main ads" "footer footer footer"',
          ],
          gridTemplateColumns: ['1fr', '64px 1fr 64px'],
          gridTemplateRows: ['min-content min-content 1fr min-content min-content', 'min-content 1fr min-content'],
        }}
      >
        <div
          sx={{
            gridArea: 'header',
          }}
        >
          <Header>
            <Logo />
            <div sx={layoutStyle.nav}>
              <div sx={{ display: ['flex', 'flex', 'flex', 'none'] }}>
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
            gridArea: 'main',
          }}
        >
          <LazyMotion features={loadFeatures}>
            <m.main className={'container ' + className}>{children}</m.main>
          </LazyMotion>
          <ScrollDown direction="down" to={205} showAbove={1500} css="position: fixed; right: 1em; top: 4.5em;" />
          <Scroll showBelow={1500} css="position: fixed; right: 1em; bottom: 4em;" />
        </div>
        <div
          sx={{
            gridArea: 'nav',
          }}
        ></div>
        <div
          sx={{
            gridArea: 'ads',
          }}
        ></div>
        <div
          sx={{
            gridArea: 'footer',
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
          cookieName="gtm"
          style={{
            background: 'linear-gradient(to right, #4338ca, transparent, #4338ca)',
            textShadow: '2px 2px black',
          }}
          buttonStyle={{
            background: 'radial-gradient(circle at top right, #4338ca, transparent)',
            color: 'white',
            fontWeight: 'bolder',
            borderRadius: '3px',
            border: '1px black',
            textShadow: '2px 2px black',
          }}
        >
          Bibwoe uses cookies for user experience.{' '}
          <span
            style={{
              fontSize: '14px',
              textAlign: 'center',
              marginLeft: '20px',
            }}
          >
            <Link to="/privacy" className="text-gray-200" alt="Privacy Page">
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
    display: ['none', 'none', 'none', 'flex'],
    alignItems: 'center',
    gap: 4,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
}
