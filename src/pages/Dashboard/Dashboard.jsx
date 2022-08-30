import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Dashboard.style';

const Dashboard = () => {
  const auth = useAuth();

  const onLogout = () => {
    auth.setLogout()
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h2">
        Welcome to Dashboard
      </Typography>
      <Button style={styles.button} variant="contained" onClick={onLogout}>Logout</Button>
    </Box>
  );
};

export default Dashboard;