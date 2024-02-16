import React, { createContext, useReducer } from 'react'
import Header from '../components/Header'
import Home from '../pages/Home'
import {Routes, Route} from 'react-router-dom'
import DocDetails from '../pages/Docters/DocDetails'
import Docters from '../pages/Docters/Docters'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Service from '../pages/Service'
import Signup from '../pages/Signup'
import Dashbord from '../pages/Dashbord/Dashbord'
// import { inicialState, reducer } from '../Reducer/Usereducer'
export const UserContext = createContext()
const Router = () => {

  // const [state, dispatch] =useReducer(reducer,inicialState)
  return (
    // <UserContext.Provider value={{state, dispatch}} >
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docter/:id' element={<DocDetails />} />
        {/* <Route path='/docter/:id' element={<DocDetails />} /> */}
        <Route path='/docters/' element={<Docters />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/service' element={<Service/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashbord' element={<Dashbord/>} />
    </Routes>
    // </UserContext.Provider>
  )
}

export default Router