import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Ul = glamorous.ul(
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

Ul.defaultProps = {
  ml: 0,
  pt: 0,
}

export default Ul
