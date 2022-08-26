import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';

const AuthRoutes = () => {
  const auth = useAuth();
  if (auth.authUser) {
    return (<LoggedInRoutes />)
  }
  return <LoggedOutRoutes />
}

export default AuthRoutes;