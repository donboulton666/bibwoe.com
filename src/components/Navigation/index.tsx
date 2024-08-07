/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Theme from '../Theme'

const MenuItems = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/posts',
    title: 'Blog',
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    return (
      <nav className="site-navigation" sx={navStyle.menu}>
        <button
          onClick={this.handleToggleClick}
          id="menu"
          aria-labelledby="Menu Open Close"
          className={'menu-trigger' + (this.state.showMenu ? ' is-active' : '')}
        >
          <div className="icon-menu-line">
            <RiMenu3Line area-label="Menu Open" />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine area-label="Menu Close" />
          </div>
        </button>
        <ul>
          {listMenuItems}
          <div sx={navStyle.border}></div>
          <div sx={navStyle.theme}>
            <Theme area-label="Theme" />
          </div>
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu: {
    ul: {
      bg: 'siteColor',
      listStyle: 'none',
      listStyleType: 'none',
      margin: '0',
      padding: '0',
    },
    li: {
      display: 'inline-block',
      marginLeft: '20px',
      listStyle: 'none',
      listStyleType: 'none',
    },
  },
  theme: {
    display: ['block', 'block', 'block', 'none'],
    p: ' 25px 20px 20px',
  },
  border: {
    bg: 'borderColor',
    borderTop: '1px solid transparent',
    display: ['block', 'block', 'block', 'none'],
  },
}
