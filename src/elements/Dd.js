import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor, 
  borderWidth
} from 'styled-system'

const Dd = glamorous.dd(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor, 
  borderWidth,
  {},
)

Dd.defaultProps = {}

export default Dd
