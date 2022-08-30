import { Box, Button, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.style';

const Login = () => {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    auth.setLogin({ email, password });
  }

  return (
    <Grid
      container
      component="main"
      justify="center"
      alignItems="center"
      sx={styles.background}>
      <Card style={styles.card}>
        <CardContent sx={styles.content} flexDirection={'column'}>
          <Box style={styles.content}>
            <FormControl sx={{ width: "100%" }}>
              <Typography align="center" variant="h3" component="h2">
                Login
              </Typography>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
                label="Email"
                variant="outlined" />
              <TextField
                margin="normal"
                value={password}
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="outlined" />
              <Button style={styles.button} variant="contained" onClick={onLogin} size="large">Login</Button>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;