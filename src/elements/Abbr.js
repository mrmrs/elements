import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
} from 'styled-system'

const Abbr = glamorous.abbr(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  {},
)

Abbr.defaultProps = {}

export default Abbr
