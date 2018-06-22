import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
} from 'styled-system'

const Span = glamorous.span(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  {},
)

Span.defaultProps = {}

export default Span
