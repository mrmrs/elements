import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Span = glamorous.span(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  {},
)

Span.defaultProps = {}

export default Span
