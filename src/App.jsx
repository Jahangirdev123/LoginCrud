import React from 'react'
import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edit from './components/EditUser'
import Login from './components/Login'
import SignUp from './components/SignUp'



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/AllUsers" element={<AllUsers/>}/>
      <Route path="/Add" element={<AddUser/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App