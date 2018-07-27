import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
} from 'styled-system'

const Header = glamorous.header(
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  {
    boxSizing: 'border-box',
  },
)

Header.defaultProps = {}

export default Header
