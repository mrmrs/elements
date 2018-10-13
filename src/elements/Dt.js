import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Dt = glamorous.dt(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {},
)

Dt.defaultProps = {}

export default Dt
