import glamorous from 'glamorous'
import {
  space,
  width,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
} from 'styled-system'

const Article = glamorous.article(
  space,
  width,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor, 
  borderWidth,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Article.defaultProps = {
  w: 1,
}

export default Article
