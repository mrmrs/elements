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

const Label = glamorous.label(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  {},
)

Label.defaultProps = {}

export default Label
