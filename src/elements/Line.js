import glamorous from 'glamorous'
import {color} from 'styled-system'

const Line = glamorous.line(color, {
  boxSizing: 'border-box',
})

Line.defaultProps = {
  fill: 'currentColor',
}

export default Line
