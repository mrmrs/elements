import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Div = glamorous.div(
  space,
  width,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  color,
  textAlign,
  borders,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Div.defaultProps = {
  w: 1,
}

export default Div
