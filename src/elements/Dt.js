import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const Dt = glamorous.dt(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  {},
)

Dt.defaultProps = {}

export default Dt
