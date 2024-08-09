import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { AnimatePresence } from 'framer-motion'
import 'prismjs/themes/prism.css'

import './src/assets/scss/style.scss'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return
  ;<AnimatePresence wait>{element}</AnimatePresence>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`)

  if (answer === true) {
    window.location.reload()
  }
}

export const shouldUpdateScroll = ({ routerProps: { location, transitionDelay }, getSavedScrollPosition }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    const top = savedPosition[1]
    window.setTimeout(() => {
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }, transitionDelay)
  }
  return false
}

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', { page_path: pagePath })
    }
  }, 100)
}
