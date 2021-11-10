import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Avatar, Select, Input, Form, DatePicker, Upload } from 'antd';
import { LeftOutlined, UserOutlined, LockOutlined, MailOutlined, UnlockOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';

import { register } from '../../redux/actions/authAction';

const { Option } = Select;

const Register = ({ register, auth, errors }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    gender: 'Male',
    birthday: '',
    address: '',
    phone: '',
    avatar: null,
    errors: {}
  });

  useEffect(() => {
    setFormData({ ...formData, errors: errors });
  }, [errors]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSelectGender = e => {
    setFormData({ ...formData, gender: e });
  }

  const onChangeBithday = (date, dateString) => {
    setFormData({ ...formData, birthday: dateString });
  }

  const onSubmit = e => {
    e.preventDefault();

    const newUser = new FormData();
    newUser.append('name', formData.name);
    newUser.append('email', formData.email);
    newUser.append('password', formData.password);
    newUser.append('password2', formData.password2);
    newUser.append('gender', formData.gender);
    newUser.append('birthday', formData.birthday);
    newUser.append('address', formData.address);
    newUser.append('phone', formData.phone);
    newUser.append('avatar', formData.avatar);

    register(newUser);
  }

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const props = {
    showUploadList: false,
    beforeUpload(file) {
      let reader = new FileReader();

      reader.onload = function () {
        document.getElementById('avatar').firstChild.src = reader.result;
      }

      reader.readAsDataURL(file);

      setFormData({ ...formData, avatar: file });
    }
  };

  return (
    <Fragment>
      <div className="register-bg text-white">
        <div className="container">
          <Form onSubmit={onSubmit} className="text-center">
            <Link to="/" className="back-btn-reg"><LeftOutlined /></Link>
            <p className="lead text-white mb-2" style={{ fontSize: '22px', fontWeight: 'bolder' }}>Registrar</p>
            <Upload {...props}>
              <Avatar
                shape="square"
                id="avatar"
                className="avt-rds"
                // size={72}
                src="./img/avatar.png"
              />
            </Upload>
            {formData.errors.avatar && <div style={{ color: '#FAA834' }}>{formData.errors.avatar}</div>}
            <Form.Item
              validateStatus={formData.errors.name && 'warning'}
              help={formData.errors.name}
              className="reg-margin"
            >
              <Input
                prefix={<UserOutlined />}
                type="text"
                name="name"
                placeholder="Ingrese su nombre"
                value={formData.name}
                className="login-width"
                onChange={onChange}
                onPressEnter={onSubmit}
              />
            </Form.Item>
            <Form.Item
              validateStatus={formData.errors.email && 'warning'}
              help={formData.errors.email}
              className="reg-margin"
            >
              <Input
                prefix={<MailOutlined />}
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
              className="reg-margin"
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
            <Form.Item
              validateStatus={formData.errors.password2 && 'warning'}
              help={formData.errors.password2}
              className="reg-margin"
            >
              <Input
                prefix={<UnlockOutlined />}
                type="password"
                name="password2"
                placeholder="Confirmar Contraseña"
                value={formData.password2}
                className="login-width"
                onChange={onChange}
                onPressEnter={onSubmit}
              />
            </Form.Item>
            <Select
              defaultValue="Male"
              className="text-left login-width"
              onSelect={onSelectGender}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
            <Form.Item
              validateStatus={formData.errors.birthday && 'warning'}
              help={formData.errors.birthday}
              className="reg-margin"
            >
              <DatePicker
                onChange={onChangeBithday}
                placeholder="Selecciona tu cumpleaños"
                className="login-width"
              />
            </Form.Item>
            <Form.Item
              validateStatus={formData.errors.address && 'warning'}
              help={formData.errors.address}
              className="reg-margin"
            >
              <Input
                prefix={<HomeOutlined />}
                type="text"
                name="address"
                placeholder="Ingrese su dirección"
                value={formData.address}
                className="login-width"
                onChange={onChange}
                onPressEnter={onSubmit}
              />
            </Form.Item>
            <Form.Item
              validateStatus={formData.errors.phone && 'warning'}
              help={formData.errors.phone}
              className="reg-margin"
            >
              <Input
                prefix={<PhoneOutlined />}
                type="text"
                name="phone"
                placeholder="Ingrese su número de teléfono"
                value={formData.phone}
                className="login-width"
                onChange={onChange}
                onPressEnter={onSubmit}
              />
            </Form.Item>
            <Button
              type='primary'
              className='btn-lg-round mb-3'
              onClick={onSubmit}
            >Iniciar sesión</Button>
          </Form>
        </div>
      </div>
    </Fragment>
  )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { register })(Register);