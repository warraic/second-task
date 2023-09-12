import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../usersAuthentication/login';
function PrivateRoutes() {
  const Auth = localStorage.getItem("Auth");
 let parseData = JSON.parse(Auth);

 return parseData ?  <Outlet/> : <Login/>
}
export default PrivateRoutes