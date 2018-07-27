import glamorous from 'glamorous'
import {space, width, display, fontSize, fontWeight, color} from 'styled-system'

import theme from '../theme'

const Var = glamorous.var(space, width, display, fontSize, fontWeight, color, {
  fontFamily: theme.fontFamily.mono
    ? theme.fontFamily.mono
    : 'monospace, monospace',
})

Var.defaultProps = {}

export default Var
