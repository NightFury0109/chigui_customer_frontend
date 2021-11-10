import React from 'react';
import { Button, Row, Col } from 'antd';
import PerfectScroll from 'react-perfect-scrollbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

const State = () => {
  return (
    <div className="state-bg text-center">
      <Link to="/dashboard">
        <img className="abs-btn-quote" src="../img/elements/previous.png" alt="previous" />
      </Link>
      <div className="d-flex justify-content-center mb-4" style={{ alignItems: 'center' }}>
        <img src="./img/icons/motor_white.png" width={75} height={45} alt="plan" />
        <div className="ml-2">
          <span className="font-weight-bolder text-white d-block m-0 lineheight-1" style={{ fontSize: '24px' }}>Estado</span>
          <span className="lineheight-1 text-white d-block m-0 font-weight-lighter">Resumen</span>
        </div>
      </div>
      {/* Motorcycle heath */}
      <div className="d-flex justify-content-center">
        <div className="motor-health text-center">
          <Row className="py-2" style={{ width: '100%' }}>
            <Col span={10} className="d-flex justify-content-center right-border" style={{ alignItems: 'center' }}>
              <div style={{ width: '100%' }}>
                <p className="main-color lineheight-1 font12">Salud de la motocicleta</p>
                <CircularProgressbar
                  value={90}
                  text='90%'
                  styles={{
                    root: {
                      width: '12vh'
                    },
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: '#7c983e',
                      strokeWidth: '6px',
                      strokeLinecap: 'butt',
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    trail: {
                      stroke: '#9BD01D',
                      strokeWidth: '2px',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: '#7c983e',
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
                <p className="lineheight-1 font12">Mapa del Sistema de Suspención</p>
                <img className="motor-state-1" src="./img/motorcycles/motor_detail.png" alt="motor" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Parts checked, diagnosed and fixed */}
      <div className="d-flex justify-content-center" style={{ marginTop: '4vh' }}>
        <div className="text-center text-white check-fix">
          <p className="font12 m-0 lineheight-1">Partes revisadas, diagnosticadas y arregladas</p>
          <img src="./img/elements/downarrow.png" style={{ width: '10px', height: 'auto' }} alt="down" />
        </div>
      </div>
      {/* First Item */}
      <div className="d-flex justify-content-center" style={{ marginTop: '3vh' }}>
        <div className="check-card">
          <Button
            type="primary"
            size="small"
            className="ml-1 p-0 detail-btn-deco detail-btn3"
          >{">"}</Button>
          <img className="item-image" src="./img/motorcycles/front_shock_broken.png" alt="front-shock" />
          <div className="d-flex">
            <div className="text-field">
              <div className="text-left">
                <CircularProgressbar
                  value={90}
                  text='90%'
                  styles={{
                    root: {
                      width: '5vh'
                    },
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: '#7c983e',
                      strokeWidth: '6px',
                      strokeLinecap: 'butt',
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    trail: {
                      stroke: '#9BD01D',
                      strokeWidth: '2px',
                      strokeLinecap: 'butt',
                    },
                    text: {
                      fill: '#7c983e',
                      fontSize: '30px',
                    },
                    background: {
                      fill: 'white',
                    }
                  }}
                />
              </div>
              <p className="main-color text-left font-weight-bolder font12 lineheight-1 my-1">Amortiguador delantero</p>
              <div className="check-scroll">
                <PerfectScroll>
                  <p className="mb-0 font10 lineheight-1 text-justify">I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
                </PerfectScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Item */}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="check-card">
          <Link to="/state/details">
            <Button
              type="primary"
              size="small"
              className="ml-1 p-0 detail-btn-deco-red detail-btn3"
            >{">"}</Button>
          </Link>
          <img className="item-image" src="./img/motorcycles/back_shock_broken.png" alt="back-shock" />
          <div className="d-flex">
            <div className="text-field">
              <div className="text-left">
                <CircularProgressbar
                  value={7}
                  text='7%'
                  styles={{
                    root: {
                      width: '5vh'
                    },
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: '#C2000B',
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
              <p className="main-color text-left font-weight-bolder font12 lineheight-1 my-1">Amortiguador trasero</p>
              <div className="check-scroll">
                <PerfectScroll>
                  <p className="mb-0 font10 lineheight-1 text-justify">I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
                </PerfectScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default State;