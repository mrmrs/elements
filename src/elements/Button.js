import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Button = glamorous.button(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
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
  textAlign: 'center',
}

export default Button
