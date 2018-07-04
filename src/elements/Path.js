import glamorous from 'glamorous'
import {color} from 'styled-system'

const Path = glamorous.Path(color, {
  boxSizing: 'border-box',
})

Path.defaultProps = {
  fill: 'currentColor',
}

export default Path
