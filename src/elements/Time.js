import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
} from 'styled-system'

const Time = glamorous.time(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  {},
)

Time.defaultProps = {}

export default Time
