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
  {},
)

Td.defaultProps = {}

export default Td
