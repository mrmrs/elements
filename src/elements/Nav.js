import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Nav = glamorous.nav(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Nav.defaultProps = {}

export default Nav
