import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const H1 = glamorous.h1(space, width, fontSize, fontWeight, lineHeight, color, {
  boxSizing: 'border-box',
})

H1.defaultProps = {}

export default H1
