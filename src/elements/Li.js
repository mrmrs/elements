import glamorous from 'glamorous'
import {space, width, fontSize, color, borders} from 'styled-system'

const Li = glamorous.li(space, width, fontSize, color, borders, {
  boxSizing: 'border-box',
})

Li.defaultProps = {
  pl: 0,
}

export default Li
