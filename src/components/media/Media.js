import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Media = ({ auth }) => {
  return (
    <Fragment>
      <div className="media-header">
        <div className="media-abs-btn1">
          <img className="abs-btn-size" src="../img/icons/hide.png" alt="hide" />
          <Link to="/dashboard">
            <img className="abs-btn-size ml-3" src="../img/elements/previous.png" alt="previous" />
          </Link>
        </div>
        <img className="media-abs-btn2 abs-btn-size ml-1" src="../img/icons/setting.png" alt="setting" />
        <div className="d-flex justify-content-center" style={{ alignItems: 'center' }}>
          <img src="../img/icons/receiver_white.png" width={35} height={35} alt="receiver" />
          <div className="ml-2">
            <span className="font-weight-bolder text-white d-block m-0 lineheight-1" style={{ fontSize: '20px' }}>Soporte</span>
          </div>
        </div>
        <div className="d-flex" style={{ alignItems: 'center', height: '90%' }}>
          <img src={`../${auth.user.avatar}`} className="media-avatar" alt="avatar" />
          <div className="text-center ml-4" style={{ width: '50%' }}>
            <p className="text-white m-0">Usuario_vehículo</p>
            <p className="text-white text-justify m-0 lineheight-1 font10">I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
          </div>
        </div>
      </div>
      <div className="media-icon-panel">
        <div style={{ width: '100%' }}>
          {/* First row */}
          <div style={{ width: '100%', marginBottom: '2vh' }}>
            <div className="d-flex justify-content-between" style={{ width: '100%' }}>
              <div className="d-flex">
                <div>
                  <div className="d-flex nav-icon justify-content-center" style={{ alignItems: 'center' }}>
                    <img className="nav-icon-img" src="../img/icons/phone.png" alt="phone" />
                  </div>
                  <p className="m-0 mt-1 text-center" style={{ color: '#727272', width: '11.3vh' }}>Asesoria</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <div className="d-flex nav-icon justify-content-center" style={{ alignItems: 'center' }}>
                    <img className="nav-icon-img" src="../img/icons/robot.png" alt="robot" />
                  </div>
                  <p className="m-0 mt-1 text-center" style={{ color: '#727272', width: '11.3vh' }}>Soporte en línea</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <div className="d-flex nav-icon justify-content-center" style={{ alignItems: 'center' }}>
                    <img className="nav-icon-img" src="../img/icons/anti-virus.png" alt="anti-virus" />
                  </div>
                  <p className="m-0 mt-1 text-center" style={{ color: '#727272', width: '11.3vh' }}>Garantías</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div style={{ width: '100%', marginBottom: '2vh' }}>
            <div className="d-flex justify-content-between" style={{ width: '100%' }}>
              <div className="d-flex">
                <div>
                  <div className="d-flex nav-icon justify-content-center" style={{ alignItems: 'center' }}>
                    <img className="nav-icon-img" src="../img/icons/chat.png" alt="chat" />
                  </div>
                  <p className="m-0 mt-1 text-center" style={{ color: '#727272', width: '11.3vh' }}>Reclamos</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <div className="d-flex nav-icon justify-content-center" style={{ alignItems: 'center' }}>
                    <img className="nav-icon-img" src="../img/icons/home.png" alt="home" />
                  </div>
                  <p className="m-0 mt-1 text-center" style={{ color: '#727272', width: '11.3vh' }}>Atención a domicilio</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <div className="d-flex nav-icon justify-content-center" style={{ alignItems: 'center' }}>
                    <img className="nav-icon-img" src="../img/icons/card.png" alt="card" />
                  </div>
                  <p className="m-0 mt-1 text-center" style={{ color: '#727272', width: '11.3vh' }}>Pagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Media.propTypes = ({
  auth: PropTypes.object.isRequired
})

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Media);