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

const H4 = glamorous.h4(
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

H4.defaultProps = {}

export default H4
