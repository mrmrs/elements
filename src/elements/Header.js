import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const Header = glamorous.header(space, width, fontSize, color, {
  boxSizing: 'border-box',
})

Header.defaultProps = {}

export default Header
