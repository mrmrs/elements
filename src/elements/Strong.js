import glamorous from 'glamorous'
import {space, fontSize, fontWeight, color} from 'styled-system'

const Strong = glamorous.strong(space, fontSize, fontWeight, color, {})

Strong.defaultProps = {
  fontWeight: 'bolder',
}

export default Strong
