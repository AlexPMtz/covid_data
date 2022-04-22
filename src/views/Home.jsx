import React from 'react'
import WithCommonMenu from '../HOC/WithCommonMenu'
import Styles from './Home.module.css'

const Home = () => {
  return (
    <div className='container-lg'>
      <div className={Styles.subContainer}>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default WithCommonMenu(Home)