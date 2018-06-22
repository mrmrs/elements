import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  borders,
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
  borders,
  borderRadius,
  {},
)

A.defaultProps = {
  bg: 'transparent',
}

export default A
