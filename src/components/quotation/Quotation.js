import React from 'react';
import { Button } from 'antd';
import PerfectScroll from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

const Quotation = () => {
  return (
    <div className="quotation-bg text-center">
      <Link to="/dashboard">
        <img className="abs-btn-quote" src="../img/elements/previous.png" alt="previous" />
      </Link>
      <div className="d-flex justify-content-center mb-4">
        <img src="./img/icons/quotation_white.png" width={40} height={40} alt="plan" />
        <span className="font-weight-bolder text-white ml-3" style={{ fontSize: '24px' }}>Cotización</span>
      </div>
      {/* Total service */}
      <div className="d-flex justify-content-center">
        <div className="total-service text-center">
          <div style={{ width: '100%' }}>
            <h3 className="main-color font-weight-bolder m-0">$ 5,634.12</h3>
            <p className="my-1 lineheight-1" style={{ color: '#7F7F7F' }}>Total del servicio</p>
          </div>
        </div>
      </div>
      {/* Add service manually */}
      <div className="d-flex justify-content-center" style={{ marginTop: '4vh' }}>
        <div className="text-right text-white add-service">
          <span style={{ fontSize: '12px' }}>Agregar servicio manualmente</span>
          <Button
            type="primary"
            size="small"
            className="ml-1 p-0 detail-btn-deco"
          >{">"}</Button>
        </div>
      </div>
      {/* Urgent */}
      <div className="d-flex justify-content-center" style={{ marginTop: '1vh' }}>
        <div className="service-card">
          <p className="fixed-title m-0 font12">Urgente</p>
          <div className="urgent-icon">
            <div style={{ width: '100%' }}>
              <img src="./img/icons/urgent_icon.png" style={{ width: '6vh', height: '6vh' }} alt="urgent" />
            </div>
          </div>
          <div className="d-flex">
            <div className="text-field">
              <p className="text-left font12 font-weight-bolder lineheight-1 m-0">08 ENE/10:00 AM</p>
              <p className="text-left font12 lineheight-1 m-0">Garantía: 6 meses</p>
              <PerfectScroll className="card-scroll">
                <p className="mb-0 font10 lineheight-1 text-justify">I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
              </PerfectScroll>
            </div>
          </div>
        </div>
      </div>
      {/* Recommened */}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="service-card">
          <p className="fixed-title m-0 font12">Recomendado</p>
          <div className="recommend-icon">
            <div style={{ width: '100%' }}>
              <img src="./img/icons/recommended_icon.png" style={{ width: '6vh', height: '6vh' }} alt="urgent" />
            </div>
          </div>
          <div className="d-flex">
            <div className="text-field">
              <p className="text-left font12 font-weight-bolder lineheight-1 m-0">10 ENE/10:00 AM</p>
              <p className="text-left font12 lineheight-1 m-0">Garantía: 6 meses</p>
              <PerfectScroll className="card-scroll">
                <p className="mb-0 font10 lineheight-1 text-justify">I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
              </PerfectScroll>
            </div>
          </div>
        </div>
      </div>
      {/* Optional */}
      <div className="d-flex justify-content-center" style={{ marginTop: '2vh' }}>
        <div className="service-card">
          <p className="fixed-title m-0 font12">Opcional</p>
          <div className="optional-icon">
            <div style={{ width: '100%' }}>
              <img src="./img/icons/optional_icon.png" style={{ width: '6vh', height: '6vh' }} alt="urgent" />
            </div>
          </div>
          <div className="d-flex">
            <div className="text-field">
              <p className="text-left font12 font-weight-bolder lineheight-1 m-0">10 ENE/10:00 AM</p>
              <p className="text-left font12 lineheight-1 m-0">Garantía: 6 meses</p>
              <PerfectScroll className="card-scroll">
                <p className="mb-0 font10 lineheight-1 text-justify">I hope you are safe from COVID-19.I've just read yourscript very carefully and got interested in this project because it fits on my skill.</p>
              </PerfectScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotation;