import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

import PlanItem from './PlanItem';

const Plan = () => {
  return (
    <div className="plan-bg text-center">
      <Link to="/dashboard">
        <img className="abs-btn-plan" src="../img/elements/previous.png" alt="previous" />
      </Link>
      <div className="d-flex justify-content-center mb-4">
        <img src="./img/icons/plan_white.png" width={40} height={40} alt="plan" />
        <span className="font-weight-bolder text-white ml-3" style={{ fontSize: '24px' }}>Plan</span>
      </div>
      <div className="d-flex justify-content-center">
        <div className="planitem-list">
          <PerfectScrollbar>
            <PlanItem />
            <PlanItem />
            <PlanItem />
            <PlanItem />
            <PlanItem />
            <PlanItem />
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  )
}

export default Plan;