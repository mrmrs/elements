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
  {
    boxSizing: 'border-box',
  },
)

H4.defaultProps = {
  lineHeight: 1.25
}

export default H4
