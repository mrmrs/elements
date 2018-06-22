import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Ol = glamorous.ol(space, width, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box',
})

Ol.defaultProps = {}

export default Ol
