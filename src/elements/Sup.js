import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const Sup = glamorous.sup(space, fontSize, fontWeight, lineHeight, color, {})

Sup.defaultProps = {}

export default Sup
