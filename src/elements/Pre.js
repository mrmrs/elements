import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const Pre = glamorous.pre(space, width, fontSize, color, {
  boxSizing: 'border-box',
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
})

Pre.defaultProps = {}

export default Pre
