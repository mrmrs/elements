import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
} from 'styled-system'

const Td = glamorous.td(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  {},
)

Td.defaultProps = {}

export default Td
