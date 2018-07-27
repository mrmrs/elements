import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Li = glamorous.li(
  space,
  width,
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

Li.defaultProps = {
  pl: 0,
}

export default Li
