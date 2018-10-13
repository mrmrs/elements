import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Div = glamorous.div(
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Div.defaultProps = {
  w: 1,
}

export default Div
