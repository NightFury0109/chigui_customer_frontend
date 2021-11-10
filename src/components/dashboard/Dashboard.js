import React, { Fragment } from 'react';
import { Row, Col, Progress, Button } from 'antd';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';

import ProcessItem from './ProcessItem';
import PendingItem from './PendingItem';

const processInfo = [
  {
    time: '01:00 PM',
    date: '07-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico', 'Caja de', 'Transmisión', 'Automático']
  },
  {
    time: '09:00 PM',
    date: '07-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico', 'Automático']
  },
  {
    time: '11:00 AM',
    date: '08-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico', 'Caja de', 'Automático']
  },
  {
    time: '5:30 PM',
    date: '08-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico']
  },
  {
    time: '10:20 AM',
    date: '09-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico', 'Caja de', 'Transmisión', 'Automático']
  },
  {
    time: '12:30 PM',
    date: '010-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico', 'Caja de', 'Transmisión', 'Automático']
  },
  {
    time: '9:15 AM',
    date: '11-ENE',
    status: 'TERMINADO',
    description: ['Caja de', 'Transmisión', 'Automático']
  },
  {
    time: '08:45 PM',
    date: '12-ENE',
    status: 'TERMINADO',
    description: ['Diagnóstico', 'Caja de', 'Transmisión', 'Automático']
  },
]

const Dashboard = () => {

  return (
    <Fragment>
      <div className="dashboard-bg">
        <h4 className="text-white mb-0 header-margin">Resumen</h4>
        <Row className="text-white d-flex">
          <Col span={16}>
            <p className="mb-2">Salud de la motocicleta</p>
          </Col>
          <Col span={8} className="text-right">
            <span style={{ fontSize: '12px' }}>Ver más</span>
            <Button
              type="primary"
              size="small"
              className="ml-1 p-0 detail-btn-deco"
            >{">"}</Button>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <img src="./img/motorcycles/motor-logo.png" className="motor-logo" alt="motor-logo" />
          </Col>
          <Col span={8} className="text-right">
            {/* <Progress
              type="circle"
              percent={90}
              strokeColor="white"
              strokeWidth={5}
              trailColor="#9BD01D"
              width={80}
            /> */}
            <CircularProgressbar
              value={90}
              text='90%'
              styles={{
                root: {
                  width: '80px'
                },
                // Customize the path, i.e. the "completed progress"
                path: {
                  stroke: 'white',
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
                  fill: 'white',
                  fontSize: '30px',
                },
                background: {
                  fill: 'none',
                }
              }}
            />
          </Col>
        </Row>
        {/* Process status */}
        <div className="progress-service process-margin">
          <div className="detail-btn">
            <span className="font12">Ver más</span>
            <Button
              type="primary"
              size="small"
              className="ml-1 p-0 detail-btn-deco"
            >{">"}</Button>
          </div>
          <p className="font-weight-bolder mb-0 mt-2 lineheight-1">Estado del proceso</p>
          <p className="font-weight-bolder m-0 gray-color">Entrega estimada: 01:29 / 18-ENE</p>
          <div className="mt-1 d-flex justify-content-between bg-bar">
            <ProcessItem />
            <ProcessItem />
            <ProcessItem />
          </div>
        </div>
        {/* Pending List */}
        <div className="pending-repair pending-margin">
          <div className="detail-btn2">
            <span className="font12">Ver más</span>
            <Button
              type="primary"
              size="small"
              className="ml-1 p-0 detail-btn-deco"
            >{">"}</Button>
          </div>
          <p className="font-weight-bolder mb-0 mt-2 main-color">Reparaciones pendientes</p>
          <div className="mt-1 d-flex justify-content-between">
            <PendingItem status='urgent' count={0} />
            <PendingItem status='recommended' count={3} />
            <PendingItem status='optional' count={1} />
          </div>
        </div>
        {/* Navbar */}
        <div className="nav-bar justify-content-between nav-bar-margin">
          <div className="text-center">
            <Link to="/plan">
              <div className="d-flex justify-content-center">
                <div className="nav-btn justify-content-center">
                  <img className="nav-img" src="./img/icons/plan.png" alt="plan" />
                </div>
              </div>
            </Link>
            <p className="font12 main-color font-weight-bolder mt-1">Plan</p>
          </div>
          <div className="text-center">
            <Link to="/quotation">
              <div className="d-flex justify-content-center">
                <div className="nav-btn justify-content-center">
                  <img className="nav-img" src="./img/icons/quotation.png" alt="quotation" />
                </div>
              </div>
            </Link>
            <p className="font12 main-color font-weight-bolder mt-1">Cotización</p>
          </div>
          <div className="text-center">
            <Link to="/state">
              <div className="d-flex justify-content-center">
                <div className="nav-btn justify-content-center">
                  <img className="nav-img" src="./img/icons/motorcycle.png" alt="state" />
                </div>
              </div>
            </Link>
            <p className="font12 main-color font-weight-bolder mt-1">Estado</p>
          </div>
          <div className="text-center">
            <Link to="/media">
              <div className="d-flex justify-content-center">
                <div className="nav-btn justify-content-center">
                  <img className="nav-img" src="./img/icons/receiver.png" alt="media" />
                </div>
              </div>
            </Link>
            <p className="font12 main-color font-weight-bolder mt-1">Soporte</p>
          </div>
        </div>
        {/* Total approved */}
        <div className="justify-content-between d-flex total-margin">
          <div className="total-approved">
            <img
              src="./img/upbutton.png"
              style={{ width: '25px' }}
              alt="upbutton"
            />
            <span className="font12 ml-1">TOTAL APPROBADO</span>
          </div>
          <div className="total-amount">
            <span className="text-black">$107.500, 00</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard;