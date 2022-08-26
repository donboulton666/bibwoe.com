import { jsx } from "theme-ui"
import * as React from "react"

const Wrapper = ({ children }) => {
  return (
    <div
      sx={{
        textCenter: "center",
        mx: "auto",
        maxWidth: "100%",
        opacity: "0.8",
        width: ["100%", "50%", "25%"],
      }}
    >
      {children}
    </div>
  )
}

export default Wrapper
