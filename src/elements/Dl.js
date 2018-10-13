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
  borderRadius,
} from 'styled-system'

const Dl = glamorous.dl(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {},
)

Dl.defaultProps = {}

export default Dl
