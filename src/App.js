import React from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './views/Home/Home';
import StateInfo from './views/StateInfo/StateInfo';
import USA from './views/USA/USA';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/stateInfo/:state' element={ <StateInfo/> } />
        <Route path='/USA_Info' element={ <USA/> } />

        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App