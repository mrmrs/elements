import glamorous from 'glamorous'
import {color} from 'styled-system'

const Polyline = glamorous.polyline(color, {
  boxSizing: 'border-box',
})

Polyline.defaultProps = {
  fill: 'currentColor',
}

export default Polyline
