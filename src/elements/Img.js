import glamorous from 'glamorous'
import {space, width, maxWidth, color, borders, borderRadius} from 'styled-system'

const Img = glamorous.img(space, width, maxWidth, color, borders, borderRadius, {
  display: 'block',
  maxWidth: '100%',
  borderStyle: 'none',
})

Img.defaultProps = {
  w: 1,
}

export default Img
