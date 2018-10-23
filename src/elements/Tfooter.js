import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const Tfooter = glamorous.tbody(space, width, fontSize, color, {})

Tfooter.defaultProps = {
  width: 1,
}

export default Tfooter
