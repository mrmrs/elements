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
} from 'styled-system'

const Dd = glamorous.dd(
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
  {},
)

Dd.defaultProps = {}

export default Dd
