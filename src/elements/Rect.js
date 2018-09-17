import glamorous from 'glamorous'
import {color} from 'styled-system'

const Rect = glamorous.rect(color, {
  boxSizing: 'border-box',
})

Rect.defaultProps = {
  fill: 'currentColor',
}

export default Rect
