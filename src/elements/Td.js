import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Td = glamorous.td(
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  {},
)

Td.defaultProps = {}

export default Td
