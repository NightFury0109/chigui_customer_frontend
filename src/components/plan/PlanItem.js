import React from 'react';

const PlanItem = () => {
  return (
    <div className="plan-item my-2">
      <div className="plus-icon">
        <img src="./img/icons/plusicon.png" width={12} height={12} alt="plus" />
      </div>
      <p className="font12 main-color font-weight-bolder lineheight-15 m-0">07 ENE</p>
      <p className="font12 main-color font-weight-bolder lineheight-15 m-0">09:45 PM</p>
      <p className="font12 my-1">Reception</p>
      <p className="font10 m-0 lineheight-1" style={{ color: '#7F7F7F' }}>Hello, dear client!
        I hope you are safe from COVID-19.
        I've just read your job description very carefully and got interested in this project because it fits on my skill. I have a rich experiences in this field.
      </p>
    </div>
  )
}

export default PlanItem;
