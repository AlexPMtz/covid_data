import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { getState, getStateInfo } from '../../services/endpoints';
import WithCommonMenu from '../../HOC/WithCommonMenu';

import Styles from '../Home/Home.module.css'

const StateInfo = () => {

  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  let { state } = useParams();
  let navigate = useNavigate();

  const getDataState = async () => {
    let resp = await getState(state)
    setData(resp.data)
  }

  const getDataStateInfo = async () => {
    let resp = await getStateInfo(state);
    setInfo(resp.data)
  }

  useEffect(() => {
    getDataState()
    getDataStateInfo()
  }, [])


  return (
    <div className='container-lg' style={{ marginTop: 100 }}>
      <div className={Styles.subContainer + ' container-lg'}>
        <div className={Styles.box}>
          <h1>{`${info.name} Information`}</h1>
          <button className='btn btn-primary' onClick={() => navigate('home')}>Home</button>
        </div>
        <br />
        <br />

        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Positivos</th>
              <th scope="col">Negativos</th>
              <th scope="col">Hosptalizados</th>
              <th scope="col">Muertos</th>
              <th scope="col">Con Ventilador</th>
              <th scope="col">Página web covid</th>
            </tr>
          </thead>
          <tbody>
            <tr key={`_id:${state}`}>
              <th>{data.date === null ? 0 : data.date}</th>
              <th>{data.positive === null ? 0 : data.positive}</th>
              <th>{data.negativeTestsViral === null ? 0 : data.negativeTestsViral}</th>
              <th>{data.hospitalized === null ? 0 : data.hospitalized}</th>
              <th>{data.death === null ? 0 : data.death}</th>
              <th>{data.onVentilatorCurrently === null ? 0 : data.onVentilatorCurrently}</th>
              <th>
                <a className='text-truncate' href={info.covid19Site}>Ir al sitio...</a>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="card text-white bg-primary mb-3" >
          <div className="card-header">Notes</div>
          <div className="card-body">
            <h5 className="card-title">{`${info.name} details`}</h5>
            <p className="card-text">{info.notes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithCommonMenu(StateInfo)