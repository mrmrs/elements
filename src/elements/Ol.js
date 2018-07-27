import glamorous from 'glamorous'
import {
  space,
  display,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Ol = glamorous.ol(
  space,
  display,
  width,
  maxWidth,
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

Ol.defaultProps = {}

export default Ol
