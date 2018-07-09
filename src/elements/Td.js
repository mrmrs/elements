import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
} from 'styled-system'

const Td = glamorous.td(
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  {},
)

Td.defaultProps = {}

export default Td
