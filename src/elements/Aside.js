import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
} from 'styled-system'

const Aside = glamorous.aside(
  space,
  width,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Aside.defaultProps = {}

export default Aside
