import glamorous from 'glamorous'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Article = glamorous.article(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Article.defaultProps = {
  w: 1,
}

export default Article
