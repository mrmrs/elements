import glamorous from 'glamorous'
import {space, display, fontSize, fontWeight, color} from 'styled-system'

const Strong = glamorous.strong(space, display, fontSize, fontWeight, color, {})

Strong.defaultProps = {
  fontWeight: 'bolder',
}

export default Strong
