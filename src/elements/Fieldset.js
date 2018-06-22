import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Fieldset = glamorous.fieldset(
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Fieldset.defaultProps = {}

export default Fieldset
