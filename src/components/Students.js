import React from 'react'
import PropTypes from 'prop-types'

const Students = props => {
  return (
    <div>
      <h3>The students are:</h3>
      <h3>{props.groupName}</h3>
      {props.names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  )
}

Students.propTypes = {
  names: PropTypes.array.isRequired
}

export default Students
