import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import WithCommonMenu from '../../HOC/WithCommonMenu'

import { getUSAInfo } from '../../services/endpoints'

import Styles from '../Home/Home.module.css'

const USA = () => {

  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    let resp = await getUSAInfo();
    setData(resp.data)
  }

  console.log("----->", data);

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container-lg' style={{ marginTop: 100 }}>
      <div className={Styles.subcontainer + ' container-lg'}>
        <div className={Styles.box}>
          <h1>USA Information</h1>
          <button className='btn btn-primary' onClick={() => navigate('home')}>Home</button>
        </div>
        <br />
        <br />

        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Positivos</th>
              <th scope="col">Negativos</th>
              <th scope="col">Hosptalizados</th>
              <th scope="col">Muertos</th>
              <th scope="col">Con Ventilador</th>
              <th scope="col">Estados</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(({ date, positive, negative, hospitalized, death, onVentilatorCurrently, states }, count = 0) => (
                <tr key={`_id:${date}`}>
                  <th scope='row'>{ count + 1 }</th>
                  <td>{date === null ? 0 : date}</td>
                  <td>{positive === null ? 0 : positive}</td>
                  <td>{negative === null ? 0 : negative}</td>
                  <td>{hospitalized === null ? 0 : hospitalized}</td>
                  <td>{death === null ? 0 : death}</td>
                  <td>{onVentilatorCurrently === null ? 0 : onVentilatorCurrently}</td>
                  <td>{states === null ? 0 : states}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WithCommonMenu(USA)