import { Router } from 'next/router';
import {Fragment} from 'react'


const Auth = () => {
    const auth = localStorage.getItem('user');
  return auth ?<Fragment />: Router.push('/index')
    
  
}


export default Auth;