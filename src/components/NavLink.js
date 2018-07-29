import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const NavLink = glamorous.a(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
)

NavLink.defaultProps = {
  bg: 'transparent',
  fontWeight: 600,
  color: 'currentColor',
  fontSize: [1,2, 3]
}

export default NavLink
