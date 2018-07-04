import glamorous from 'glamorous'
import {space, width, display, fontSize, textAlign, color} from 'styled-system'

const Header = glamorous.header(space, width, display, fontSize, textAlign, color, {
  boxSizing: 'border-box',
})

Header.defaultProps = {}

export default Header
