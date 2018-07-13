import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Progress = glamorous.progress(
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  borderWidth,
  {

  },
)

Progress.defaultProps = {}

export default Progress
