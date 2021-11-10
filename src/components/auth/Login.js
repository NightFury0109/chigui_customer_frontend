import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Avatar, Badge, Input, Form } from 'antd';
import { LeftOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../../redux/actions/authAction';

const Login = ({ login, auth, errors }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errors: {}
  });

  useEffect(() => {
    setFormData({ ...formData, errors: errors });
  }, [errors]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password
    }

    login(userData);
  }

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login-bg text-white justify-content-center">
        <div className="container">
          <Link to="/" className="back-btn-login"><LeftOutlined /></Link>
          <div className="text-center mb-2">
            <p className="lead" style={{ fontSize: '22px', fontWeight: 'bolder' }}>Inicio</p>
            {/* <Badge dot={true} offset={[0, 72]}> */}
            <Avatar
              shape="square"
              className="avt-rds"
              // size={72}
              src="./img/avatar.png"
            />
            {/* </Badge> */}
          </div>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Item
              validateStatus={formData.errors.email && 'warning'}
              help={formData.errors.email}
              className="text-center mb-4"
            >
              <Input
                prefix={<UserOutlined />}
                type="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                value={formData.email}
                className="login-width"
                onChange={onChange}
                onPressEnter={onSubmit}
              />
            </Form.Item>
            <Form.Item
              validateStatus={formData.errors.password && 'warning'}
              help={formData.errors.password}
              className="text-center my-4"
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={formData.password}
                className="login-width"
                onChange={onChange}
                onPressEnter={onSubmit}
              />
            </Form.Item>
            <div className="text-center">
              <Link to="#" className="text-white" id="text-link">¿Olvidaste tu contraseña?</Link>
            </div>
          </Form>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ height: '20vh', alignItems: 'center' }}>
        <div className="text-center">
          <Button
            type='primary'
            size='large'
            className='btn-lg-round my-1'
            onClick={onSubmit}
          >Iniciar sesión</Button>
          <Link to='#' className='d-block my-2' id="text-link">¿Necesitas ayuda?</Link>
        </div>
      </div>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { login })(Login);