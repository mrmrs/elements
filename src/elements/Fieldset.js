import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Fieldset = glamorous.fieldset(
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

Fieldset.defaultProps = {}

export default Fieldset
