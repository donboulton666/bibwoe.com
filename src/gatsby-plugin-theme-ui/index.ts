import { tailwind } from '@theme-ui/preset-tailwind'
import defaultColors from '../util/default-colors.json'
import darkColors from '../util/dark-theme-colors.json'
import { lightness } from '@theme-ui/color'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  ...tailwind,
  styles: {
    ...tailwind.styles,
  },
  colors: {
    ...defaultColors,
    ...tailwind.colors,
    text: '#000',
    background: '#fff',
    primary: '#5C2941',
    accent: '#fff',
    muted: 'rgba(0, 0, 0, 0.7)',
    cardBg: '#fff',
    borderColor: '#540229',
    labelText: '#777',
    inputBorder: '#aaa',
    inputBackground: '#fff',
    socialIcons: lightness('siteColor', 0.4),
    socialIconsHover: lightness('siteColor', 0.3),
    buttonColor: lightness('siteColor', 0.9),
    buttonHoverBg: lightness('siteColor', 0.4),
    buttonHoverColor: lightness('siteColor', 0.8),
    modes: {
      dark: {
        text: '#f5f5f5',
        background: '#111',
        primary: '#252525',
        accent: '#5C2941',
        muted: 'rgba(255, 255, 255, 0.7)',
        cardBg: '#252525',
        borderColor: '#888',
        labelText: '#777',
        inputBorder: '#777',
        inputBackground: '#333',
        socialIcons: lightness('siteColor', 0.5),
        socialIconsHover: lightness('siteColor', 0.9),
        buttonColor: lightness('siteColor', 0.7),
        buttonHoverBg: lightness('siteColor', 0.3),
        buttonHoverColor: lightness('siteColor', 0.9),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: 'muted',
      '&:hover': {
        color: 'text',
      },
    },
  },
  variants: {
    button: {
      bg: 'siteColor',
      color: 'buttonColor',
      '&:hover': {
        bg: 'buttonHoverBg',
        color: 'buttonHoverColor',
      },
    },
    socialIcons: {
      a: {
        color: 'socialIcons',
        ':hover': {
          color: 'socialIconsHover',
        },
      },
    },
    header: {
      sticky: true,
      stickyMobile: true,
      maxWidth: 1260,
      mobileNavWidth: 300,
      mobileAnimation: 'fade' /* fade, fadeInUp, fadeInDown, slideRight, slideLeft */,
      spring: {
        tension: 170,
        friction: 26,
      } /* React Spring config object for your MobileNav */,
    },
    nav: {
      width: '.3fr',
    },
  },
}
