import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const Tbody = glamorous.tbody(space, width, fontSize, color, {})

Tbody.defaultProps = {
  width: 1,
}

export default Tbody
