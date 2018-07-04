import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  alignItems, 
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
} from 'styled-system'

const A = glamorous.a(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  alignItems, 
  justifyContent,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {},
)

A.defaultProps = {
  bg: 'transparent',
}

export default A
