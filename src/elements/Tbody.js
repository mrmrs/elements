import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const Tbody = glamorous.tbody(space, width, fontSize, color, {})

Tbody.defaultProps = {
  w: 1,
}

export default Tbody
