import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const H2 = glamorous.h2(space, width, fontSize, fontWeight, lineHeight, color, {
  boxSizing: 'border-box',
})

H2.defaultProps = {}

export default H2
