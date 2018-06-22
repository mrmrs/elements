import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Dl = glamorous.dl(
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
  {},
)

Dl.defaultProps = {}

export default Dl
