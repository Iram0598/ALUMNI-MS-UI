import { Router } from 'next/router';
import React from 'react'
import Outlet from 'react'

const Auth = () => {
    const auth = localStorage.getItem('user');
  return auth ?<Outlet />: Router.push('/index')
    
  
}


export default Auth;