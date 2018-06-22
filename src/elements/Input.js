import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  borders,
  borderRadius,
  color,
} from 'styled-system'

const Input = glamorous.input(
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
  {},
)

Input.defaultProps = {}

export default Input
