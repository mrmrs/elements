import glamorous from 'glamorous'
import {
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Sup = glamorous.sup(
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  {},
)

Sup.defaultProps = {}

export default Sup
