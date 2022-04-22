import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import Styles from './WithCommonMenu.module.css'

export default function WithCommonMenu(Component) {
  
  const CommonComponents = (props) => {
    return(
      <div className={Styles.mainContainer}>
        <Navbar/>
        <div className={Styles.componentContainer}>
          <Component {...props} />
        </div>
      </div>
    )
  }
  return CommonComponents
}