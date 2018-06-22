import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Textarea = glamorous.textarea(
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    overflow: 'auto',
  },
)

Textarea.defaultProps = {}

export default Textarea
