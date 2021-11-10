import React from 'react';
import { Button, Row, Col } from 'antd';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

const StateDetail = () => {
  return (
    <div className="state-bg text-center">
      <Link to="/state">
        <img className="abs-btn-quote" src="../img/elements/previous.png" alt="previous" />
      </Link>
      <div className="d-flex justify-content-center mb-4" style={{ alignItems: 'center' }}>
        <img src="../img/icons/motor_white.png" width={75} height={45} alt="plan" />
        <div className="ml-2">
          <span className="font-weight-bolder text-white d-block m-0 lineheight-1" style={{ fontSize: '24px' }}>Estado</span>
          <span className="lineheight-1 text-white d-block m-0 font-weight-lighter">Detalles</span>
        </div>
      </div>
      {/* State Card */}
      <div className="d-flex justify-content-center">
        <div className="state-card text-center">
          <div className="red-circle-symbol"></div>
          <Row className="py-2" style={{ width: '100%' }}>
            <Col span={10} className="d-flex justify-content-center" style={{ alignItems: 'center' }}>
              <div style={{ width: '100%' }}>
                <p className="lineheight-1 font12 m-0" style={{ color: '#727272' }}>Salud del</p>
                <p className="font-weight-bolder lineheight-1 font10 m-0" style={{ color: '#727272' }}>amortiguador</p>
                <p className="font-weight-bolder lineheight-1 font10 m-0" style={{ color: '#727272' }}>trasero</p>
                <CircularProgressbar
                  value={7}
                  text='7%'
                  className="mt-2"
                  styles={{
                    root: {
                      width: '10vh'
                    },
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: '#AAAAAB',
                      strokeWidth: '6px',
                      strokeLinecap: 'butt',
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    trail: {
                      stroke: 'red',
                      strokeWidth: '2px',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: 'red',
                      fontSize: '30px',
                    },
                    background: {
                      fill: 'white',
                    }
                  }}
                />
              </div>
            </Col>
            <Col span={14} className="d-flex justify-content-center" style={{ alignItems: 'center' }}>
              <div style={{ width: '100%' }}>
                <img className="motor-element" src="../img/elements/back_shock.png" alt="motor" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* First Item */}
      <div className="d-flex justify-content-center" style={{ marginTop: '3vh' }}>
        <div className="state-item-card">
          <Button
            type="primary"
            size="small"
            className="ml-1 p-0 detail-btn-deco detail-btn3"
          >{">"}</Button>
          <div className="icon-panel justify-content-center" style={{ backgroundColor: '#D7DFB9' }}>
            <img src="../img/icons/info.png" style={{ width: '7vh', height: '7vh' }} alt="info" />
          </div>
          <div className="d-flex">
            <div className="state-text-field d-flex" style={{ alignItems: 'end' }}>
              <div>
                <p className="text-left font-weight-bolder lineheight-1  font12 my-1 main-color mb-1">Amortiguador delantero</p>
                <p className="mb-0 font10 lineheight-1 text-justify" style={{ color: '#727272' }}>I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Item */}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="state-item-card">
          <Button
            type="primary"
            size="small"
            className="ml-1 p-0 detail-btn-deco-yellow detail-btn3"
          >{">"}</Button>
          <div className="icon-panel justify-content-center" style={{ backgroundColor: '#FFFFCC' }}>
            <img src="../img/icons/state.png" style={{ width: '7vh', height: '7vh' }} alt="info" />
          </div>
          <div className="d-flex">
            <div className="state-text-field d-flex" style={{ alignItems: 'end' }}>
              <div>
                <p className="text-left font-weight-bolder lineheight-1  font12 my-1 main-color mb-1" style={{ color: '#727272' }}>Estado del amortiguador trasero</p>
                <p className="mb-0 font10 lineheight-1 text-justify" style={{ color: '#727272' }}>I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Item */}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="state-item-card">
          <Link to="/state/details/images">
            <Button
              type="primary"
              size="small"
              className="ml-1 p-0 detail-btn-deco-red detail-btn3"
            >{">"}</Button>
          </Link>
          <div className="icon-panel justify-content-center" style={{ backgroundColor: '#FDCDB8' }}>
            <img src="../img/icons/star.png" style={{ width: '7vh', height: '7vh' }} alt="info" />
          </div>
          <div className="d-flex">
            <div className="state-text-field d-flex" style={{ alignItems: 'end' }}>
              <div>
                <p className="text-left font-weight-bolder lineheight-1  font12 my-1 main-color mb-1" style={{ color: 'red' }}>Recomendaciones</p>
                <p className="mb-0 font10 lineheight-1 text-justify" style={{ color: '#727272' }}>I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateDetail;