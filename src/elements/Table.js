import glamorous from 'glamorous'
import {space, width, fontSize, color} from 'styled-system'

const getCellWidth = props => ({
  tableLayout: props.layout ? props.layout : 'default',
})

const Table = glamorous.table(space, width, fontSize, color, {
  borderCollapse: 'collapse',
  cellSpacing: 0,
  cellPadding: 0,
})

Table.defaultProps = {
  w: 1,
}

export default Table
