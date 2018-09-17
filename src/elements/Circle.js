import glamorous from 'glamorous'
import {color} from 'styled-system'

const Circle = glamorous.circle(color, {
  boxSizing: 'border-box',
})

Circle.defaultProps = {
  fill: 'currentColor',
  cx: 0, // x-axis coordinate of circle center (0 is default)
  cy: 0, // y-axis coordinate of circle center (0 is default)
  r: 0, // radius of the element (0 is default)
  // pathLength: 0, // define total length for the path (no default value)
}

export default Circle
