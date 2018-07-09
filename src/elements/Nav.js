import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderWidth,
  borderColor,
  borderRadius,
} from 'styled-system'

const Nav = glamorous.nav(
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderWidth,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Nav.defaultProps = {}

export default Nav
