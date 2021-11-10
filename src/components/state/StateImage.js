import React from 'react';
import { Button, Row, Col } from 'antd';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

const StateImage = () => {
  return (
    <div className="state-bg text-center">
      <Link to="/state/details">
        <img className="abs-btn-quote" src="../../img/elements/previous.png" alt="previous" />
      </Link>
      <div className="d-flex justify-content-center mb-4" style={{ alignItems: 'center' }}>
        <img src="../../img/icons/motor_white.png" width={75} height={45} alt="plan" />
        <div className="ml-2">
          <span className="font-weight-bolder text-white d-block m-0 lineheight-1" style={{ fontSize: '24px' }}>Estado</span>
          <span className="lineheight-1 text-white d-block m-0 font-weight-lighter">Imagenes</span>
        </div>
      </div>
      {/* State Card */}
      <div className="d-flex justify-content-center">
        <div className="state-card-block text-center">
          <div className="red-circle-symbol"></div>
          <div style={{ height: '8vh' }}>
            <div className="d-flex text-left" style={{ alignItems: 'end', height: '100%' }}>
              <p className="ml-4 mb-1 font-weight-bolder" style={{ color: '#727272' }}>Mal estado</p>
            </div>
          </div>
          <div className="justify-content-center state-card-red-bg">
            <div style={{ width: '100%' }}>
              <p className="text-white lineheight-1 m-0">Clasificación</p>
              <h3 className="m-0 lineheight-1 text-white">Urgente</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Text card*/}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="state-text-card text-left">
          <h4 className="main-color m-0">Sellado</h4>
          <p className="my-2 ml-3" style={{ color: '#727272' }}>Prueba realizada:</p>
          <p className="m-0 ml-3" style={{ color: '#727272' }}>Resultado:</p>
        </div>
      </div>
      {/* Image card */}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="image-card justify-content-center">
          <Button
            type="primary"
            size="small"
            className="ml-1 p-0 detail-btn-deco-yellow detail-btn4"
          >{">"}</Button>
          <div>
            <div style={{ width: '100%' }}>
              <p className="text-left" style={{ color: '#727272' }}>Imagenes</p>
            </div>
            <div className="image-panel"></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default StateImage;