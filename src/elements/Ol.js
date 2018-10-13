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
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Ol.defaultProps = {}

export default Ol
