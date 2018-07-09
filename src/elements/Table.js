import glamorous from 'glamorous'
import {space, width, maxWidth, fontSize, color} from 'styled-system'

const layout = props => ({
  tableLayout: props.layout ? props.layout : 'default',
})

const Table = glamorous.table(space, width, maxWidth, fontSize, color, layout, {
  borderCollapse: 'collapse',
  cellSpacing: 0,
  cellPadding: 0,
})

Table.defaultProps = {
  w: 1,
  layout: 'initial',
}

export default Table
