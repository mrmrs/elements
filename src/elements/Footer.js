import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Footer = glamorous.footer(
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Footer.defaultProps = {}

export default Footer
