import glamorous from 'glamorous'
import {color} from 'styled-system'

const Svg = glamorous.Svg(color, {
  boxSizing: 'border-box',
})

Svg.defaultProps = {
  fill: 'currentColor',
}

export default Svg
