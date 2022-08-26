import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const auth = useAuth();

  const onLogout = () => {
    auth.setLogout()
  }

  return (
    <div>
      dashboard
      <Button variant="contained" onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default Dashboard;