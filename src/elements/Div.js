import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  textAlign,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Div = glamorous.div(
  space,
  width,
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
