import glamorous from 'glamorous'
import {space, width, display, fontSize, fontWeight, color} from 'styled-system'

const B = glamorous.b(space, width, display, fontSize, fontWeight, color, {})

B.defaultProps = {
  fontWeight: 'bolder',
}

export default B
