import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Img = glamorous.img(
  space,
  width,
  maxWidth,
  color,
  borders,
  borderColor, 
  borderWidth,
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
