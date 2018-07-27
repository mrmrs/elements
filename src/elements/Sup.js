import glamorous from 'glamorous'
import {
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Sup = glamorous.sup(
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  {},
)

Sup.defaultProps = {}

export default Sup
