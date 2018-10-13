import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  color,
  borders,
  borderColor,
} from 'styled-system'

const Progress = glamorous.progress(
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  {},
)

Progress.defaultProps = {}

export default Progress
