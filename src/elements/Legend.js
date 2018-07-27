import glamorous from 'glamorous'
import {
  space,
  display,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Legend = glamorous.legend(
  space,
  display,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    boxSizing: 'border-box',
    maxWidth: '100%',
    whiteSpace: 'normal',
  },
)

Legend.defaultProps = {
  color: 'inherit',
  display: 'table',
  p: 0,
}

export default Legend
