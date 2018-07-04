import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const H1 = glamorous.h1(
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  {
    boxSizing: 'border-box',
  },
)

H1.defaultProps = {}

export default H1
