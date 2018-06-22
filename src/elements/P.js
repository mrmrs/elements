import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const P = glamorous.p(space, width, fontSize, fontWeight, lineHeight, color, {
  boxSizing: 'border-box',
})

P.defaultProps = {}

export default P
