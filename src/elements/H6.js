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

const H6 = glamorous.h6(
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

H6.defaultProps = { 
  lineHeight: 1.25
}

export default H6
