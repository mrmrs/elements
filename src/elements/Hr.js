import glamorous from 'glamorous'
import {space, width, color, borders} from 'styled-system'

const Hr = glamorous.hr(space, width, color, borders, {
  boxSizing: 'border-box',
  height: 0,
  overflow: 'visible',
})

Hr.defaultProps = {}

export default Hr
