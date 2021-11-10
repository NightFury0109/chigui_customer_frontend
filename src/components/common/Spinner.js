import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <div className="spin-field justify-content-center">
      <img
        src={spinner}
        style={{ width: '100vw', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  </Fragment>
);

export default Spinner;