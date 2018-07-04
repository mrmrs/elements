import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Button = glamorous.button(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
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
