/** @jsx jsx */ /** @jsxFrag React.Fragment */
import { jsx } from 'theme-ui'
/* eslint-disable no-unused-vars */
import * as React from 'react'
import { SuspenseHelper } from '../SuspenseHelper'
/* eslint-enable no-unused-vars */
import { useStaticQuery, graphql } from 'gatsby'

const Navigation = React.lazy(() => import('../Navigation'))
const Logo = React.lazy(() => import('../Logo'))
const Search = React.lazy(() => import('../Search'))
const Theme = React.lazy(() => import('../Theme'))

const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

const Header = () => {
  const { siteSearchIndex } = useStaticQuery(query)
  return (

  <div itemScope itemType="https://schema.org/WebPage">
    <header
      className="site-header"
      itemScope="itemScope"
      itemType="https://schema.org/WPHeader"
      sx={{
        bg: 'siteColor',
      }}
    >
                 <>
              <SuspenseHelper fallback={<div>Loading...</div>}>
                <Logo />
              </SuspenseHelper>
              <div sx={layoutStyle.nav}>
                <div sx={{ display: ['flex', 'flex', 'flex', 'none'] }}>
                  <SuspenseHelper fallback={<div>Loading...</div>}>
                    <Search searchIndex={siteSearchIndex.index} />
                  </SuspenseHelper>
                </div>
                <SuspenseHelper fallback={<div>Loading...</div>}>
                  <Navigation />
                </SuspenseHelper>
              </div>
              <div sx={layoutStyle.appearance}>
                <SuspenseHelper fallback={<div>Loading...</div>}>
                  <Search searchIndex={siteSearchIndex.index} />
                </SuspenseHelper>
                <SuspenseHelper fallback={<div>Loading...</div>}>
                <Theme />
                </SuspenseHelper>
              </div>
            </>
    </header>
  </div>
  )
}

export default Header

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