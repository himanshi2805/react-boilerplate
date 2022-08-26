import { Box, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.style';

const Login = () => {
  const auth = useAuth();

  const [email, setEmail] = useState('himanshipatel@gmail.com');
  const [password, setPassword] = useState('Himanshi@123');

  const onLogin = () => {
    auth.setLogin({ email, password });
  }

  return (
    <Grid
      container
      component="main"
      justify="center"
      alignItems="center"
      sx={{
        ...styles.background,
      }}>
      <Card
        style={styles.card}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <CardContent sx={styles.content} flexDirection={'column'}>
          <Box style={styles.content}>
            <form>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <Button variant="contained" onClick={onLogin}>Login</Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;