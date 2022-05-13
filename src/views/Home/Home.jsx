import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import WithCommonMenu from '../../HOC/WithCommonMenu'
import { getStates } from '../../services/endpoints';
import Styles from './Home.module.css'

const Home = () => {

  const [estados, setEstados] = useState([]);

  let navigate = useNavigate();

  const getStatesCovid = async () => {
    let resp = await getStates();
    setEstados(resp.data);
  }

  useEffect(() => {
    getStatesCovid()
  }, [])

  return (
    <div className='container-lg' style={{ marginTop: 100 }}>
      <div className={Styles.subContainer + ' container-lg'}>
        <div className={Styles.box}>
          <h1>Covid Data</h1>
          <button className='btn btn-primary'>USA information</button>
        </div>
        <br />
        <br />

        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Estado</th>
              <th scope="col">twitter</th>
            </tr>
          </thead>
          <tbody>
            {
              estados.map(({ name, state, twitter, covid19Site }, count = 0) => (
                <tr key={`_id:${state}`} onClick={() => navigate(`stateInfo/${state.toLowerCase()}`)} style={{ cursor: 'pointer' }}>
                  <th scope="row">{count + 1}</th>
                  <td>{name}</td>
                  <td>{twitter}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WithCommonMenu(Home)