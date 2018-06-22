import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'
import theme from '../theme'

const Var = glamorous.var(space, width, fontSize, color, {
  fontFamily: theme.fontFamily.mono,
})

Var.defaultProps = {}

export default Var
