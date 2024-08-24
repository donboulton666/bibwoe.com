/** @jsx jsx */ /** @jsxFrag React.Fragment */
import { jsx } from 'theme-ui'
/* eslint-disable no-unused-vars */
import * as React from 'react'
/* eslint-enable no-unused-vars */
import { Link } from 'gatsby'
import { ReactNode } from 'react'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import { SuspenseHelper } from '../SuspenseHelper'

const Header = React.lazy(() => import('../Header'))
const Footer = React.lazy(() => import('../Footer'))
const Scroll = React.lazy(() => import('../Scroll'))
const ScrollDown = React.lazy(() => import('../ScrollDown'))
const Stars = React.lazy(() => import('../Stars'))
const ScrollIndicator = React.lazy(() => import('../ScrollIndicator'))

interface LayoutProps {
  children: ReactNode
  className: string
}

const Layout = ({ className, children }: LayoutProps) => {
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
        <SuspenseHelper fallback={<div>Loading...</div>}>
          <Stars />
        </SuspenseHelper>
        <SuspenseHelper fallback={<div>Loading...</div>}>
          <ScrollIndicator />
        </SuspenseHelper>
        <div
          sx={{
            gridArea: 'header',
          }}
        >
          <SuspenseHelper fallback={<div>Loading...</div>}>
            <Header />
          </SuspenseHelper>
        </div>
        <div
          sx={{
            gridArea: 'main',
          }}
        >
          <main className={'container ' + className}>{children}</main>
          <SuspenseHelper fallback={<div>Loading...</div>}>
            <ScrollDown direction="down" to={205} showAbove={1500} css="position: fixed; right: 1em; top: 4.5em;" />
          </SuspenseHelper>
          <SuspenseHelper fallback={<div>Loading...</div>}>
            <Scroll
              showBelow={1500}
              css="position: fixed; right: 1em; bottom: 4em;"
              by={undefined}
              to={undefined}
              className={undefined}
            />
          </SuspenseHelper>
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
          <SuspenseHelper fallback={<div>Loading...</div>}>
            <Footer />
          </SuspenseHelper>
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
            <Link to="/privacy" className="text-gray-200" area-lu ="Privacy Page">
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
