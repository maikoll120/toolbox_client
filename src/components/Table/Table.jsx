import React from 'react'
import PropTypes from 'prop-types'
import UITable from 'react-bootstrap/Table'

const header = (header) => {
  return header.map((title, index) => (
    <th key={index}>{title}</th>
  ))
}

const rows = (data) => {
  return data.map((item, index) => (
    <tr key={index}>
      <td>{item[0]}</td>
      <td>{item[1]}</td>
      <td>{item[2]}</td>
      <td>{item[3]}</td>
    </tr>
  ))
}

const Table = ({ head, data }) => {
  return (
    <UITable striped bordered hover responsive>
      <thead>
        <tr>
          {header(head)}
        </tr>
      </thead>
      <tbody>
        {rows(data)}
      </tbody>
    </UITable>
  )
}

Table.propTypes = {
  head: PropTypes.array,
  data: PropTypes.array
}

export default Table
