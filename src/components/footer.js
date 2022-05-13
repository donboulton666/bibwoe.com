/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"
import { SiGnuprivacyguard } from "react-icons/si"

const Footer = () => (
  <footer
    className="site-footer"
    itemScope='itemScope' itemType='https://schema.org/WPFooter'
    sx={{
      bg: "siteColor",
    }}
  >
    <div>
      <p>
      © {new Date().getFullYear()} Bibwoe.com{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        <Link to="/" area-label="Facebook">Basic Instructions Books While On Earth</Link>
        {" "}
        <span className="icon -lock">
          <SiGnuprivacyguard />
        </span>{" "} 
        <Link to="/privacy" area-label="Privacy">
          Privacy
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
