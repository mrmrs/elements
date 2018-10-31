import glamorous from 'glamorous'
import {space, width, display, fontSize, textAlign, color} from 'styled-system'

const Tfoot = glamorous.tfoot(
  space,
  width,
  display,
  fontSize,
  textAlign,
  color,
  {},
)

Tfoot.defaultProps = {
  width: 1,
}

export default Tfoot
