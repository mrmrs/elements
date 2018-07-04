import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Li = glamorous.li(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderwidth,
  {
    boxSizing: 'border-box',
  },
)

Li.defaultProps = {
  pl: 0,
}

export default Li
