import React, { PropTypes } from 'react'

const rowStyle = {
  display: 'table',
  width: '100%',
  tableLayout: 'fixed'
}

const cellStyle = {
  display: 'table-cell',
  width: '33%'
}

const Row = ({ index, cellsData, onChange }) => {
  const onLocalChange = event => {
    const dimension = event.target.name
    onChange(index, dimension, event.target.value)
  }

  const cells = Object.keys(cellsData)
    .map(k =>
      <div key={k} style={cellStyle}>
        <input name={k} type="text" value={cellsData[k]} onChange={onLocalChange} />
      </div>
    )

  return <div style={rowStyle}>{cells}</div>
}

const EditableDataTable = ({ data, onChange }) => {
  const header = <div>Header</div>
  const rows = data
    .map((d, i) => <Row key={i} index={i} cellsData={d} onChange={onChange} />)

  return <div>
    {header}
    {rows}
  </div>
}

EditableDataTable.propTypes = {
  // And array like [ { a: 0, b: 2 }, { a: 3 } ]
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired
}

export default EditableDataTable
