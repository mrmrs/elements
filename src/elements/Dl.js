import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Dl = glamorous.dl(
  space,
  width,
  maxWidth,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {},
)

Dl.defaultProps = {}

export default Dl
