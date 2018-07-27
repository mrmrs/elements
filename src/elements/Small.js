import glamorous from 'glamorous'
import {
  space,
  display,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  color,
} from 'styled-system'

const Small = glamorous.small(
  space,
  display,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  color,
  {},
)

Small.defaultProps = {}

export default Small
