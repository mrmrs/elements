import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Nav = glamorous.nav(
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Nav.defaultProps = {}

export default Nav
