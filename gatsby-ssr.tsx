import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { AnimatePresence } from "framer-motion"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return
  <AnimatePresence wait>{element}</AnimatePresence>
}
