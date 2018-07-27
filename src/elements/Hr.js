import glamorous from 'glamorous'
import {
  space,
  width,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Hr = glamorous.hr(
  space,
  width,
  color,
  borders,
  borderColor,
  borderWidth,
  {
    boxSizing: 'border-box',
    height: 0,
    overflow: 'visible',
  },
)

Hr.defaultProps = {}

export default Hr
