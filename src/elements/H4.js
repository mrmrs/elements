import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const H4 = glamorous.h4(space, width, fontSize, fontWeight, lineHeight, color, {
  boxSizing: 'border-box',
})

H4.defaultProps = {}

export default H4
