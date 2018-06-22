import glamorous from 'glamorous'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Form = glamorous.form(
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

Form.defaultProps = {}

export default Form
