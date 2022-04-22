import React from 'react'
import Styles from './Navbar.module.css';
import icon from '../../assets/covid.png';

const Navbar = () => {
  return (
    <div className={"nav " + Styles.mainContainer}>
      <div className="container-lg">
        <div className='d-flex align-items-center'>
          <img src={icon} style={{ marginRight: 10 }} />
          <h5 style={{ margin: 0 }}>The COVID Tracking Project</h5>
        </div>
      </div>
    </div>
  )
}

export default Navbar