import glamorous from 'glamorous'
import {space, width, maxWidth, fontSize, color} from 'styled-system'

const P = glamorous.p(space, width, maxWidth, fontSize, fontWeight, lineHeight, color, {
  boxSizing: 'border-box',
})

P.defaultProps = {
  maxWidth: '34em' // Sets text to maximum 80 characters wide
}

export default P
