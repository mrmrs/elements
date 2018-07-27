import glamorous from 'glamorous'
import {color, width, maxWidth, height, display} from 'styled-system'

const Svg = glamorous.svg(color, width, maxWidth, height, display, {
  boxSizing: 'border-box',
})

Svg.defaultProps = {
  fill: 'currentColor',
}

export default Svg
