import glamorous from 'glamorous'
import {color} from 'styled-system'

const Polygon = glamorous.polygon(color, {
  boxSizing: 'border-box',
})

Polygon.defaultProps = {
  fill: 'currentColor',
}

export default Polygon
