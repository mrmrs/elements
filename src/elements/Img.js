import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Img = glamorous.img(
  space,
  width,
  maxWidth,
  display,
  color,
  borders,
  borderColor, 
  borderRadius,
  {
    maxWidth: '100%',
    borderStyle: 'none',
  },
)

Img.defaultProps = {
  width: 1,
  display: 'block',
  src: 'https://picsum.photos/200/300'
}

export default Img
