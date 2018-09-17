import glamorous from 'glamorous'
import {color} from 'styled-system'

const Circle = glamorous.circle(color, {
  boxSizing: 'border-box',
})

Circle.defaultProps = {
  fill: 'currentColor',
}

export default Circle
