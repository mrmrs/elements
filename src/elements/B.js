import glamorous from 'glamorous'
import {space, width, fontSize, fontWeight, color} from 'styled-system'

const B = glamorous.b(space, width, fontSize, fontWeight, color, {})

B.defaultProps = {
  fontWeight: 'bolder',
}

export default B
