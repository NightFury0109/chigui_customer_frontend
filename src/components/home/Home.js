import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import { clearErrors } from '../../redux/actions/authAction';

const Home = ({ clearErrors }) => {
  useEffect(() => {
    clearErrors();
  });

  return (
    <Fragment>
      <div className="home-bg justify-content-center">
        <img src="./logo.png" alt="logo" style={{ width: '160px', height: '215px' }} />
      </div>
      <div className="text-center px-2 d-flex justify-content-center" style={{ alignItems: 'center', height: '35vh' }}>
        <div>
          <Link to="/login" className="d-block">
            <Button type='primary' size='large' className='btn-lg-round mt-2 mb-3'>Iniciar sesión</Button>
          </Link>
          <Link to="/register" className="d-block">
            <Button type='primary' size='large' className='btn-lg-round my-3'>Registrar</Button>
          </Link>
          <Link to='#' className='d-block mt-2 mb-1' id="text-link">¿Necesitas ayuda?</Link>
        </div>
      </div>
    </Fragment>
  )
}

Home.propTypes = ({
  clearErrors: PropTypes.func.isRequired
});

export default connect(null, { clearErrors })(Home);