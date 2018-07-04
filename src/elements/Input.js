import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
  color,
} from 'styled-system'

const Input = glamorous.input(
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
  {},
)

Input.defaultProps = {}

export default Input
