import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
} from 'styled-system'

const Cite = glamorous.cite(
  space,
  width,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
  {},
)

Cite.defaultProps = {}

export default Cite
