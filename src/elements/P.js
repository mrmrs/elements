import glamorous from 'glamorous'
import {space, width, maxWidth, display, fontSize, fontWeight, lineHeight, textAlign, color} from 'styled-system'

const P = glamorous.p(
  space,
  width,
  maxWidth,
  display,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign, 
  {
    boxSizing: 'border-box',
  },
)

P.defaultProps = {
  maxWidth: '34em', // Sets text to maximum 80 characters wide
}

export default P
