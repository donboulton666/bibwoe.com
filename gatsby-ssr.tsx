import * as React from 'react'
import type { GatsbySSR } from 'gatsby'
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return
  <AnimatePresence initial={false} mode="popLayout">
    {element}
  </AnimatePresence>
}

const ORIGIN = 'https://www.googletagmanager.com/'
const GATSBY_GA_MEASUREMENT_ID = 'G-7WR7C0L7V4'

export function onRenderBody({ setPreBodyComponents, setHtmlAttributes }) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null
  setHtmlAttributes({ lang: 'en' })
  setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=G-7WR7C0L7V4" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />,
    React.createElement('script', {
      key: 'class',
      dangerouslySetInnerHTML: {
        __html: `
void function() {
  window.__onThemeChange = function() {}
  var preferredTheme
  try {
    preferredTheme = localStorage.getItem('theme')
  } catch (err) { }
  function setTheme(newTheme) {
    if (preferredTheme && document.documentElement.classList.contains(preferredTheme)) {
      document.documentElement.classList.replace(preferredTheme, newTheme)
    } else {
      document.documentElement.classList.add(newTheme)
    }
    window.__theme = newTheme
    preferredTheme = newTheme
    window.__onThemeChange(newTheme)
  }
  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (err) {}
  }
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  })
  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
}()
    `,
      },
    }),
  ])
}
