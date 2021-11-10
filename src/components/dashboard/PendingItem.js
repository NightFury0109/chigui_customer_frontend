import React from 'react'
import PropTypes from 'prop-types'

const PendingItem = ({ status, count }) => {
  let bgColor, color, title;

  if (status === 'urgent') {
    bgColor = {
      backgroundColor: '#C2000B'
    };
    color = {
      color: 'white'
    };
    title = 'Urgente';
  } else if (status === 'recommended') {
    bgColor = {
      backgroundColor: '#F2F91C'
    };
    color = {
      color: '#4B4C38'
    };
    title = 'Recomendado';
  } else if (status === 'optional') {
    bgColor = {
      backgroundColor: '#2E58A6'
    };
    color = {
      color: 'white'
    };
    title = 'Opcional';
  }

  return (
    <div className="pending-item text-center" style={bgColor}>
      <p className="pending-count" style={color}>{count}</p>
      <p className="pending-title" style={color}>{title}</p>
    </div>
  )
}

PendingItem.propTypes = ({
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
})

export default PendingItem;