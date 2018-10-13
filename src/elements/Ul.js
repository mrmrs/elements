import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Ul = glamorous.ul(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
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
