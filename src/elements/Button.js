import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Button = glamorous.button(
  space,
  width,
  fontSize,
  fontWeight,
  color,
  borders,
  borderRadius,
  {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    overflow: 'visible',
    textTransform: 'none',
    webkitAppearance: 'button',
  },
)

Button.defaultProps = {
  fontSize: '100%',
  lineHeight: 1.25,
  m: 0,
}

export default Button
