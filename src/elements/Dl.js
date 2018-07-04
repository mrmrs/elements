import glamorous from 'glamorous'
import {
  space,
  width,
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
