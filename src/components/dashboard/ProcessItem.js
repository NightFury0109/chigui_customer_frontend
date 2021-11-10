import React from 'react'
import PropTypes from 'prop-types'

const ProcessItem = () => {
  return (
    <div className="process-item text-center d-flex">
      <div style={{ maxHeight: '75px', overflowY: 'hidden' }}>
        <p className="font10 gray-color lineheight-1 m-0">01:00 PM </p>
        <p className="font10 gray-color lineheight-1 m-0">07-ENE</p>
        <p className="font10 font-weight-bolder lineheight-1 m-0">TERMINADO</p>
        <p className="font10 gray-color lineheight-1 m-0">sadfsdaf 21312312 sdfaassdaf sdfdsf</p>
      </div>
    </div>
  )
}

// ProcessItem.propTypes = ({
//   time: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// })

export default ProcessItem;