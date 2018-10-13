import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Img = glamorous.img(
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor, 
  borderRadius,
  {
    display: 'block',
    maxWidth: '100%',
    borderStyle: 'none',
  },
)

Img.defaultProps = {
  w: 1,
  src: 'https://picsum.photos/200/300'
}

export default Img
