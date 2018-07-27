import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Code = glamorous.code(
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Code.defaultProps = {}

export default Code
